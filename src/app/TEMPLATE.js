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


const Template = (props) => (
    TemplateFilter,
    TemplateList,
    TemplateCreate,
    TemplateEdit
);

const TemplateFilter = (props) => (
    <Filter {...props}>
                <TextInput label="" source="" alwaysOn />
                <TextInput label="" source="" />
    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const TemplateList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<TemplateFilter />}
        sort={{ field: '', order: 'DESC' }}
        perPage={50}
    >
        <Responsive
            xsmall={<MobileGrid />}
            medium={
            <Datagrid rowClick="edit">
                <TextField label="" source="" />
                <EditButton />
            </Datagrid>
            }
        />
    </List>
);

const TemplateCreate = ({ classes, ...props }) => (
    <Create {...props }>
        <TabbedForm redirect="show">
            <FormTab label="Основні">
                <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
                <ReferenceInput source="" reference="" label="" defaultValue={5} >
                    <SelectInput source="" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="Додаткові">
            </FormTab>
        </TabbedForm>
    </Create>
);

const TemplateEdit = ({ classes, ...props }) => (
    <Edit title={<TemplateTitle />} {...props}>
         <TabbedForm redirect="show">
            <FormTab label="Основні">
                <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
                <ReferenceInput source="" reference="" label="" defaultValue={5} >
                    <SelectInput source="" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="Додаткові">
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(Template);
