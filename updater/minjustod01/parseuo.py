#!/usr/bin/python3
import re
import xmltodict
import csv
# import from another module
import sys
import os
from pathlib import Path


pre_entity=re.compile('(&\w+;)')
re_pindex = re.compile('(^\d{5}$)')
multy_spaces = re.compile('\s+')
english_word = re.compile('^[A-Z\d]+$')
digits_re =  re.compile('^\d+$')
zeros_re =  re.compile('^0+$')
reduce_leading_zeros = re.compile('^0+')
kved_re = re.compile('(\d\d\.\d\d)')
split_words_re = re.compile('\W')
# re exp for non digit symbol
non_digit_re = re.compile('\D+')

def fix_pindex(p):
  p = p.strip()
  # if found non digit - its bad pindex
  if non_digit_re.search(p):
    return None
  # reduce leading zeros to 1, e.g. 00012 -> 012
  p = reduce_leading_zeros.sub('0', p)
  if len(p) == 5:
    return p
  elif len(p) == 4:
    if p[0] == '0':
      p = p + '0'
    else:
      p = '0' + p
    return p
  else:
    return None

def fix_edrpou(edrpou):
    edrpou = edrpou.strip()
    all_digits = digits_re.match(edrpou)
    if not all_digits or len(edrpou) > 8 or zeros_re.match(edrpou):
        return None
    else:
        return '0'*(8-len(edrpou)) + edrpou

letters_to_ua={
    'Ў':"І",
    'A': 'А', 
    'E': 'Е', 
    'I': 'І', 
    'K': 'К', 
    'M': 'М', 
    'H': 'Н', 
    'O': 'О', 
    'P': 'Р', 
    'C': 'С', 
    'Y': 'У', 
    'X': 'Х',
    'B': 'В',
    'T': 'Т'
}

f=open("data/UO.xml.utf8")
print(f.readline())
print(f.readline())

# o=open("data/uo.csv","w")
uo_file_name = 'data/uo.csv'
uo_file = open(uo_file_name, 'w', encoding='utf8')
uo_writer = csv.writer(uo_file, delimiter=';', quotechar='"', lineterminator='\n', quoting=csv.QUOTE_MINIMAL)
ef=open("data/edrpou_founder.csv","w")
mef=open("data/multy_edrpou_founder.csv","w")


line_processed = 0
no_founders_count = 0
multy_edrpou_founders_count = 0
while(1):
    line=f.readline()
    if line == '</DATA>': break
    # protect from random '\n' in string fields (names etc)
    while line[-10:] != '</RECORD>\n':
        line+=f.readline()
    # escape and clean
    line=line.strip().replace('\n', '').replace('\t', '').replace('\\', '\\\\').replace('‘', "&apos;").replace('’',"'")
    line=multy_spaces.sub(' ', line)
    # upper - for unifing
    line=line.upper()
    # replace english and other letter in cyrilic words
    line2 = ''
    for word in line.split(' '):
        if english_word.match(word):
            line2 += word
        else:
            for i, l in enumerate(word):
                # english or other letter in cyrilic word
                if l in letters_to_ua and (i>0 and ord(line[i-1])>=ord('А') or i+1<len(line) and ord(line[i+1])>=ord('А')):
                    # new_line_arr.append(letters_to_ua[l])
                    line2 += letters_to_ua[l]
                else:
                    # new_line_arr.append(l)
                    line2 += l
    # predefined entities to lower
    line_copy = line
    for entity in pre_entity.findall(line):
        line_copy = line_copy.replace(entity, entity.lower())
    line = line_copy
    # xml to dict
    try:
        data=xmltodict.parse(line)
    except Exception as e:
        print('\nError! {}'.format(str(e)))
        e_n=int(str(e).split()[-1])
        print(1, line[e_n-10:e_n+10])
        # line=f.readline()
        # print(2, line)
        break

    record=data['RECORD']
    edrpou=fix_edrpou(record['EDRPOU'])
    # if edrpou == '26386221':
    #     print(record)
    #     exit()
    if edrpou is None: edrpou = ''
    address=record['ADDRESS'] if record['ADDRESS'] else ''  #.replace('"', "&quot;")
    name=record['NAME'] if record['NAME'] else ''  #.replace('"', "&quot;")
    sname=record['SHORT_NAME'] if record['SHORT_NAME'] else '' #.replace('"', "&quot;")
    boss=record['BOSS'] if record['BOSS'] else ''  #.replace('"', "&quot;")
    kved_full=record['KVED'] if record['KVED'] else ''  #.replace('"', "&quot;")
    kved=kved_re.findall(kved_full)
    if len(kved) > 0:
        kved = kved[0]
    else:
        kved = ''
    # pindex
    if address is not None:
        pindex = fix_pindex(address[0:5])
        if pindex is None: pindex=''
        address=address[7:]
    # name,short_name,edrpou,address,pindex,boss_name,kved_full,status,kved
    org_data = ["",name,sname,edrpou,address,pindex,boss,kved_full,record['STAN'],kved]
    uo_writer.writerow(org_data)
    if 'FOUNDERS' in record:
        founders=record['FOUNDERS']['FOUNDER']
        if isinstance(founders, list):
            multy_edrpou_founders_count += 1
            mef.write("'{}'\t'{}'\n".format(edrpou, founders))
            if '&sem;' in founders:
                print(founders)
                raise Exception('Error! &sem; is bad separator for founders!')
                quit()
            founder = '&sem;'.join(founders)  #.replace('"', "&quot;")
        else:
            founder = founders  #.replace('"', "&quot;")
        ef.write("'{}'\t'{}'\n".format(edrpou, founder))
    else:
        no_founders_count+=1
    line_processed+=1
    if line_processed%10**4 == 0:
        print('Lines processed count: {}'.format(line_processed))
        # TODO: delete this

print('edrpous that have more then one founder count: {}. Writen to multy_edrpou_founder.csv file'.format(multy_edrpou_founders_count))
print("edrpous that don't have founders count: {}".format(no_founders_count))

uo_file.close()
ef.close()
mef.close()
f.close()
