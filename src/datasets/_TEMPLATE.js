//  Название всех констант содержит "Template"
//  Заменив его на название табилы (или другое логическое) автоматически происходит генерация небоходимого функционала
//  Предварительно необходимо описать полученые автоматически поля, правильно прописать типы и рассатавить это все по Filter, List и другим 
//  Не нужный функционал закоментировать
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Tab } from '@material-ui/core';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import ResetViewsButton from '../service/ResetViewsButton';
import {
    Pagination,
    CreateButton, 
    ShowButton,
    ExportButton, 
    RefreshButton,
    BulkDeleteButton,
    Show,
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

// кастомный пагинатор, Для маленьких списков
// const TemplatePagination = ({ page, perPage, total, setPage }) => {
//     const nbPages = Math.ceil(total / perPage) || 1;
//     return (
//         nbPages > 1 &&
//             <Toolbar>
//                 {page > 1 &&
//                     <Button color="primary" key="prev" icon={<ChevronLeft />} onClick={() => setPage(page - 1)}>
//                         назад
//                     </Button>
//                 }
//                 {page !== nbPages &&
//                     <Button color="primary" key="next" icon={<ChevronRight />} onClick={() => setPage(page + 1)} labelPosition="before">
//                         Далі
//                     </Button>
//                 }
//             </Toolbar>
//     );
// }

const TemplateListActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton label="Додати" basePath={basePath} />
        <ExportButton label="Експорт"
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
        <RefreshButton label="Оновити"/>
        {/* Add your custom actions */}
        {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </CardActions>
);


// Пока не работает, что то не то происходит
// const TemplateBulkActionButtons = props => (
//     <div>
//         <ResetViewsButton label="Скинути вибір" {...props} />
//         {/* Add the default bulk delete action */}
//         <BulkDeleteButton {...props} />
//     </div>
// );


const TemplateFilter = props => (
    <Filter {...props}>
                <TextInput label="" source="" alwaysOn defaultValue="" />
                <TextInput label="" source="" />
    </Filter>
);


// Блок справа, несет в себе разную информацию суммы и тд. https://marmelab.com/react-admin/List.html 
// const Aside = () => (
//     <div style={{ width: 200, margin: '1em' }}>
//         <Typography variant="title">Post details</Typography>
//         <Typography variant="body1">
//             Total views: {ids.map(id => data[id]).reduce((sum, post) => sum + post.views, 0)}
//         </Typography>
//     </div>
// );

export const TemplateList = ({ classes, ...props }) => (
    <div>
        <List
            title=""
            {...props}
            actions={<TemplateListActions />}
            filters={<TemplateFilter />}
            // pagination={<TemplatePagination />}
            // aside={<Aside />}
            // bulkActionButtons={<TemplateBulkActionButtons />}
            sort={{ field: '', order: 'DESC' }}
            perPage={50}
        >
                <Datagrid rowClick="edit">
                    <TextField sortable={false} label="" source="" />
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