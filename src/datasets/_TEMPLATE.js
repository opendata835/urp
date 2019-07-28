//  Название всех констант содержит "Template"
//  Заменив его на название табилы (или другое логическое) автоматически происходит генерация небоходимого функционала
//  Предварительно необходимо описать полученые автоматически поля, правильно прописать типы и рассатавить это все по Filter, List и другим
//  Не нужный функционал закоментировать

import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

// Не взлетело
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import ResetViewsButton from '../service/ResetViewsButton';

// импорт всяких полей
import {
  Toolbar,
  Pagination,
  CreateButton,
  ShowButton,
  EditButton,
  SaveButton,
  DeleteButton,
  ExportButton,
  CloneButton,
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
  NumberField,
  BooleanField,
  BooleanInput,
  NumberInput,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  SimpleForm,
  TabbedForm,
  FormTab,
  required
} from "react-admin";

// Импорт валидации
import {
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
} from "react-admin";

// кастомный пагинатор, Для маленьких списков
const TemplatePagination = props => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

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
    {bulkActions &&
      React.cloneElement(bulkActions, {
        basePath,
        filterValues,
        resource,
        selectedIds,
        onUnselectItems
      })}
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: "button"
      })}
    <CreateButton label="ra.action.create" basePath={basePath} />
    <ExportButton
      label="ra.action.export"
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={filterValues}
      exporter={exporter}
    />
    <RefreshButton label="ra.action.refresh" />
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
//         <Typography variant="title">Template details</Typography>
//         <Typography variant="body1">
//             Total views: {ids.map(id => data[id]).reduce((sum, Template) => sum + Template.views, 0)}
//         </Typography>
//     </div>
// );

// Cоздание кнопки, которую можно повесить что бы создать связанную сущность.
// const CreateRelatedYOUTYPEButton = ({ record }) => (
//     <Button
//         component={Link}
//         to={{
//             pathname: '/comments/create',
//             state: { record: { Template_id: record.id } },
//         }}
//     >
//         Write a comment for that Template
//     </Button>
// );

export const TemplateList = ({ classes, ...props }) => (
  <div>
    <List
      {...props}
      title=""
      actions={<TemplateListActions />}
      filters={<TemplateFilter />}
      pagination={<TemplatePagination />}
      sort={{ field: "", order: "DESC" }}
    >
      <Datagrid rowClick="edit">
        <TextField sortable={false} label="" source="" />
        <ReferenceField label="Author" source="user_id" reference="users" />
        <ShowButton label="ra.action.show" />
        <CloneButton label="ra.action.clone" />
        <EditButton label="ra.action.edit" />
      </Datagrid>
    </List>
  </div>
);

const cardActionStyle = {
  zIndex: 2,
  display: "inline-block",
  float: "right"
};

const TemplateTitleShow = ({ record }) => {
  return <span>Деталі по {record ? `"${record.name}"` : ""}</span>;
};

const TemplateShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} label="ra.action.edit" />
    {/* Add your custom actions */}
    {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
  </CardActions>
);

export const TemplateShow = ({ classes, ...props }) => (
  <div>
    <Show
      title={<TemplateTitleShow />}
      actions={<TemplateShowActions />}
      {...props}
    >
      <SimpleShowLayout>
        <TextField label="" source="" />
      </SimpleShowLayout>
      <TabbedShowLayout tabs={<TabbedShowLayoutTabs scrollable={true} />}>
        <Tab label="Основні">
          <TextField label="" source="" />
        </Tab>
        <Tab label="Основні" path="drugoe">
          <TextField label="" source="" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  </div>
);

const TemplateCreateToolbar = props => (
  <Toolbar {...props}>
    <SaveButton
      label="ra.action.save_and_show"
      redirect="show"
      submitOnEnter={true}
    />
    <SaveButton
      label="ra.action.save_and_add"
      redirect={false}
      submitOnEnter={false}
      variant="flat"
    />
  </Toolbar>
);

// Примеры валидаторов
// const validateFirstName = [required(), minLength(2), maxLength(15)];
// const validateEmail = email();
// const validateAge = [number(), minValue(18)];
// const validateZipCode = regex(/^\d{5}$/, 'Must be a valid Zip Code');
// const validateSex = choices(['m', 'f'], 'Must be Male or Female');

// Пример вставки валидатора на поле
{
  /* <TextInput label="First Name" source="firstName" validate={validateFirstName} /> */
}

export const TemplateCreate = ({ classes, ...props }) => (
  <div>
    <Create redirect="show" undoable={false} {...props}>
      <SimpleForm toolbar={<TemplateCreateToolbar />}>
        <TextField label="" source="" />
      </SimpleForm>

      <TabbedForm toolbar={<TemplateCreateToolbar />}>
        <FormTab label="Основні">
          <TextInput
            type=""
            autoFocus
            source=""
            formClassName={classes.nickname}
          />
          <ReferenceInput source="" reference="" label="" defaultValue={5}>
            <SelectInput source="" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Додаткові" />
      </TabbedForm>
    </Create>
  </div>
);

// Кастомный тульбар, можно удалить отсюда кнопку удаления и тогда при редактировании не ее не будет
const TemplateEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButton /> //
  </Toolbar>
);

const TemplateTitleEdit = ({ record }) => {
  return <span>Редагування {record ? `"${record.username}"` : ""}</span>;
};

export const TemplateEdit = ({ classes, ...props }) => (
  <div>
    <Edit title={<TemplateTitleEdit />} undoable={false} {...props}>
      <SimpleForm>
        <TextInput label="" source="" />
      </SimpleForm>

      <TabbedForm toolbar={<TemplateEditToolbar />}>
        {" "}
        redirect="show" submitOnEnter={false} >
        <FormTab label="Основні">
          <TextInput
            type=""
            autoFocus
            source=""
            formClassName={classes.nickname}
          />
          <ReferenceInput source="" reference="" label="" defaultValue={5}>
            <SelectInput source="" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Додаткові" />
      </TabbedForm>
    </Edit>
  </div>
);
