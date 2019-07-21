import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
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
    TabbedForm,
    FormTab
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

export const Minjustod01UOList = (props) => {
        return (<div> <List {...props} filters={<Minjustod01UOFilter />} sort={{ field: 'edrpou', order: 'DESC' }} perPage={50}>
                    <Datagrid>
                        <TextField label="ЄДРПОУ" source="edrpou" />
                        <TextField label="Назва" source="name" />
                        <TextField label="Керівник" source="bossname" />
                        <TextField label="Адреса" source="address" />
                        <TextField label="КВЕД" source="kved" />
                        <TextField label="Почтовий індекс" source="postcode" />
                        <TextField label="Стан реєстрації" source="status" />
                        <ShowButton label="Деталі"/>
                        {/* <EditButton label="Змінити"/> */}
                    </Datagrid>
                </List>
        </div>
    )
};

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const Minjustod01UOShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} label="Змінити" />
        {/* Add your custom actions */}
    </CardActions>
);

const Minjustod01UOTitle = ({ record }) => {
    return <span>Деталі по {record ? `"${record.edrpou}"` : ''}</span>;
};

export const Minjustod01UOShow = (props) => (
    <div>
        <Show title={<Minjustod01UOTitle />} actions={<Minjustod01UOShowActions />} {...props}>
            <SimpleShowLayout>
                <TextField label="ЄДРПОУ" source="edrpou" />
                <TextField label="Назва" source="name" />
                <TextField label="Коротка назва" source="shortname" />
                <TextField label="Керівник" source="bossname" />
                <TextField label="Адреса" source="address" />
                <TextField label="КВЕД" source="kved" />
                <TextField label="КВЕД повний" source="kvedfull" />
                <TextField label="Почтовий індекс" source="postcode" />
                <TextField label="Стан реєстрації" source="status" />
            </SimpleShowLayout>
        </Show>
    </div>
);

// export const Minjustod01UOCreate = ({ classes, ...props }) => (
//     <div>
//         <Create {...props }>
//                 <TabbedForm redirect="show">
//                     <FormTab label="Основні">
//                         <TextInput label="ЄДРПОУ" source="edrpou" />
//                         <TextInput label="Назва" source="name" />
//                         <TextInput label="Коротка назва" source="shortname" />
//                         <TextInput label="Керівник" source="bossname" />
//                         <TextInput label="Адреса" source="address" />
//                         <TextInput label="КВЕД" source="kved" />
//                         <TextInput label="КВЕД повний" source="kvedfull" />
//                         <TextInput label="Почтовий індекс" source="postcode" />
//                         <TextInput label="Стан реєстрації" source="status" />
//                     </FormTab>
//                     <FormTab label="Додаткові">
//                     </FormTab>
//                 </TabbedForm>
//         </Create>
//     </div>
// );

// export const Minjustod01UOEdit = ({ classes, ...props }) => (
//     <div>
//         <Edit {...props}>
//             <TabbedForm redirect="show">
//                 <FormTab label="Основні">
//                         <TextInput label="ЄДРПОУ" source="edrpou" />
//                         <TextInput label="Назва" source="name" />
//                         <TextInput label="Коротка назва" source="shortname" />
//                         <TextInput label="Керівник" source="bossname" />
//                         <TextInput label="Адреса" source="address" />
//                         <TextInput label="КВЕД" source="kved" />
//                         <TextInput label="КВЕД повний" source="kvedfull" />
//                         <TextInput label="Почтовий індекс" source="postcode" />
//                         <TextInput label="Стан реєстрації" source="status" />
//                 </FormTab>
//                 <FormTab label="Додаткові">
//                 </FormTab>
//             </TabbedForm>
//         </Edit>
//     </div>
// );