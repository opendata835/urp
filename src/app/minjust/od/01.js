import React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    EditButton,
    EmailField,
    Filter,
    List,
    Responsive,
    TextField,
    TextInput,
    ReferenceField,
} from 'react-admin';
import MobileGrid from './MobileGrid';


const Minjustod01edruo = (props) => {
    Minjustod01edruoFilter,
    Minjustod01edruoList,
    // Minjustod01edruoCreate,
    // Minjustod01edruoEdit
};

const Minjustod01edruoFilter = (props) => (
    <Filter {...props}>
                    <TextInput label="ЄДРПУО" source="edrpou" alwaysOn />
                    <TextField label="Назва" source="name" alwaysOn />
                    <TextField label="Коотка назва" source="shortname" />
                    <TextField label="Керівник" source="bossname" />
                    <TextField label="Адреса" source="address" />
                    <TextField label="КВЕД" source="kved" alwaysOn />
                    <TextField label="КВЕД повний" source="kvedfull" />
                    <DateField label="Почтовий індекс" source="postcode" />
                    <TextField label="Стан реєстрації" source="status" alwaysOn />
    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const Minjustod01edruoList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<Minjustod01edruoFilter />}
        sort={{ field: 'edrpou', order: 'DESC' }}
        perPage={50}
    >
        <Responsive
            xsmall={<MobileGrid />}
            medium={
            <Datagrid rowClick="edit">
                    {/* <TextField source="id" /> */}
                    <TextInput label="ЄДРПУО" source="edrpou" />
                    <TextField label="Назва" source="name" />
                    <TextField label="Коотка назва" source="shortname" />
                    <TextField label="Керівник" source="bossname" />
                    <TextField label="Адреса" source="address" />
                    <TextField label="КВЕД" source="kved" />
                    <TextField label="КВЕД повний" source="kvedfull" />
                    <DateField label="Почтовий індекс" source="postcode" />
                    <TextField label="Стан реєстрації" source="status" />
                <EditButton />
            </Datagrid>
            }
        />
    </List>
);

// const Minjustod01edruoCreate = ({ classes, ...props }) => (
//     <Create {...props }>
//         <TabbedForm redirect="show">
//             <FormTab label="Основні">
//                 <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
//                 <ReferenceInput source="" reference="" label="" defaultValue={5} >
//                     <SelectInput source="" />
//                 </ReferenceInput>
//             </FormTab>
//             <FormTab label="Додаткові">
//             </FormTab>
//         </TabbedForm>
//     </Create>
// );

// const Minjustod01edruoEdit = ({ classes, ...props }) => (
//     <Edit title={<Minjustod01edruoTitle />} {...props}>
//          <TabbedForm redirect="show">
//             <FormTab label="Основні">
//                 <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
//                 <ReferenceInput source="" reference="" label="" defaultValue={5} >
//                     <SelectInput source="" />
//                 </ReferenceInput>
//             </FormTab>
//             <FormTab label="Додаткові">
//             </FormTab>
//         </TabbedForm>
//     </Edit>
// );

export default Minjustod01edruo(styles)(Minjustod01edruo);