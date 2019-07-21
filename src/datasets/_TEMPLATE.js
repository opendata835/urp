import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {
    List,
    Show,
    Create,
    Edit,
    ShowButton,
    EditButton,
    Filter,
    Datagrid,
    SimpleForm,
    TabbedForm,
    FormTab,
    SimpleShowLayout,
    TabbedShowLayout,
    TabbedShowLayoutTabs,
    RichTextField,
    LongTextField,
    ReferenceField,
    DateField,
    TextField,
    TextInput,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';
import { Tab } from '@material-ui/core';

const TemplateFilter = props => (
    <Filter {...props}>
                <TextInput label="" source="" alwaysOn />
                <TextInput label="" source="" />
    </Filter>
);

export const TemplateList = ({ classes, ...props }) => (
    <div>
            <List
            {...props}
            filters={<TemplateFilter />}
            sort={{ field: '', order: 'DESC' }}
            perPage={50}
             >
                <Datagrid rowClick="edit">
                    <TextField label="" source="" />
                    <ShowButton label="Детальніше"/>
                    <EditButton label="Змінити"/>
                </Datagrid>
        </List>
    </div>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const TemplateShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} label="Змінити"/>
        {/* Add your custom actions */}
        {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </CardActions>
);

const TemplateTitle = ({ record }) => {
    return <span>Деталі по {record ? `"${record.id}"` : ''}</span>;
};

export const TemplateShow = ({ classes, ...props }) => (
    <div>
        <Show title={<TemplateTitle />} actions={<TemplateShowActions />} {...props}>
            <SimpleShowLayout>
            <TextField label="" source="" />
            </SimpleShowLayout>
            <TabbedShowLayout tabs={<TabbedShowLayoutTabs scrollable={true}/>}>
                <Tab label="Основні">
                    <TextField label="" source="" />
                </Tab>
                <Tab label="Основні" path="drugoe" >
                    <TextField label="" source="" />
                </Tab>
            </TabbedShowLayout>
        </Show>
    </div>
);

export const TemplateCreate = ({ classes, ...props }) => (
    <div>
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
    </div>
);

export const TemplateEdit = ({ classes, ...props }) => (
    <div>
        <Edit {...props}>
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
    </div>
);