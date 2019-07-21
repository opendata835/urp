#!/bin/bash

function status(){
	data_dir=data
	rmdir $data_dir
	mkdir $data_dir
	cd $data_dir

	echo -e "Downloading..."
	url=https://data.gov.ua/dataset/b244f35a-e50a-4a80-b704-032c42ba8142/resource/b0476139-62f2-4ede-9d3b-884ad99afd08/download/15-ufop.zip	
	wget $url --user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.19 Safari/537.36" $fname
	fname='15-ufop.zip'
	echo -e "Downloaded. Size: " `du -hs $fname`
	echo -e "Extracting..."
	7z x -y $fname
	# 7z x -y $fname 15.1-EX_XML_EDR_UO.xml
	# 7z x -y $fname 15.2-EX_XML_EDR_FOP.xml
	echo -e "Extracted."

	rm 15-ufop.zip
	echo -e "Delete 15-ufop.zip"

	echo "Convertiong Orgs to UTF-8"
	time iconv -f cp1251 15.1-EX_XML_EDR_UO.xml > UO.xml.utf8
	rm 15.1-EX_XML_EDR_UO.xml
	echo -e "Delete 15.1-EX_XML_EDR_UO.xml"


	echo "Convertiong FOPs to UTF-8"
	# time iconv -f cp1251 15.2-EX_XML_EDR_FOP.xml > FOP.xml.utf8
	rm 15.2-EX_XML_EDR_FOP.xml
	echo -e "Delete 15.2-EX_XML_EDR_FOP.xml"

	echo "Converting UO file to multy line"
	if [ 1 -eq `wc -l <UO.xml.utf8` ];
		then 
			echo "File has one line, again... So we just use sed command!"
			sed -i -e "s/<RECORD>/\n<RECORD>/g" UO.xml.utf8
	fi

	# echo "Converting FOP file to multy line"
	# if [ 1 -eq `wc -l <FOP.xml.utf8` ];
		# then 
			# echo "File has one line, again... So we just use sed command!"
			# sed -i -e "s/<RECORD>/\n<RECORD>/g" FOP.xml.utf8
	# fi

	# echo "mode tag </DATA> to new line"
	sed -i -e "s/<\/DATA>/\n<\/DATA>/g" UO.xml.utf8
	# sed -i -e "s/<\/DATA>/\n<\/DATA>/g" FOP.xml.utf8
	cd -
}
status

echo "Parsing data"
time ./parseuo.py

sed -i -e "s/None/null/g" data/uo.tsv

echo 'done'