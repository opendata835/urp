import React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter,
    NumberField
} from 'react-admin';


const Minjustod01edrpuoFilter = (props) => (
    <Filter {...props}>
                    <TextInput label="ЄДРПУО" source="edrpou" alwaysOn />
                    <TextField label="Назва" source="name" alwaysOn />
                    <TextField label="Коротка назва" source="shortname" />
                    <TextField label="Керівник" source="bossname" />
                    <TextField label="Адреса" source="address" />
                    <TextField label="КВЕД" source="kved" alwaysOn />
                    <TextField label="КВЕД повний" source="kvedfull" />
                    <NumberField label="Почтовий індекс" source="postcode" />
                    <TextField label="Стан реєстрації" source="status" alwaysOn />
    </Filter>
);

export const Minjustod01edrpuoList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<Minjustod01edrpuoFilter />}
        sort={{ field: 'edrpou', order: 'DESC' }}
        perPage={50}
    >
             <Datagrid rowClick="edit">
                    {/* <TextField source="id" /> */}
                    <TextInput label="ЄДРПУО" source="edrpou" />
                    <TextField label="Назва" source="name" />
                    <TextField label="Коротка назва" source="shortname" />
                    <TextField label="Керівник" source="bossname" />
                    <TextField label="Адреса" source="address" />
                    <TextField label="КВЕД" source="kved" />
                    <TextField label="КВЕД повний" source="kvedfull" />
                    <NumberField label="Почтовий індекс" source="postcode" />
                    <TextField label="Стан реєстрації" source="status" />
                <EditButton />
            </Datagrid>
        />
    </List>
);