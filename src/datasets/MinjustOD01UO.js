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


const Minjustod01UOFilter = props => (
    <Filter {...props}>
                    <TextInput label="ЄДРПОУ" source="edrpou" alwaysOn />
                    <TextInput label="Назва" source="name" alwaysOn />
                    <TextInput label="Коротка назва" source="shortname" />
                    <TextInput label="Керівник" source="bossname" />
                    <TextInput label="Адреса" source="address" />
                    <TextInput label="КВЕД" source="kved" alwaysOn />
                    <TextInput label="КВЕД повний" source="kvedfull" />
                    <TextInput label="Почтовий індекс" source="postcode" />
                    <TextInput label="Стан реєстрації" source="status" />
    </Filter>
);

export const Minjustod01UOList = ({ classes, ...props }) => {
        return (<div> <List {...props} filters={<Minjustod01UOFilter />} sort={{ field: 'edrpou', order: 'DESC' }} perPage={50}>
                    <Datagrid>
                        <TextField label="ЄДРПОУ" source="edrpou" />
                        <TextField label="Назва" source="name" />
                        <TextField label="Коротка назва" source="shortname" />
                        <TextField label="Керівник" source="bossname" />
                        <TextField label="Адреса" source="address" />
                        <TextField label="КВЕД" source="kved" />
                        <TextField label="КВЕД повний" source="kvedfull" />
                        <TextField label="Почтовий індекс" source="postcode" />
                        <TextField label="Стан реєстрації" source="status" />
                    </Datagrid>
                </List>
        </div>
    )
};