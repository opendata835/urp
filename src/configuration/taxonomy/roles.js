//  Название всех констант содержит "Roles"
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
  NumberField,
  TextField,
  DisabledInput,
  NumberInput,
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
// import {
//     required,
//     minLength,
//     maxLength,
//     minValue,
//     maxValue,
//     number,
//     regex,
//     email,
//     choices
// } from 'react-admin';

const RolesListActions = ({
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
    {/* <ExportButton label="Експорт"
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        /> */}
    <RefreshButton label="ra.action.refresh" />
    {/* Add your custom actions */}
    {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
  </CardActions>
);

// Пока не работает, что то не то происходит
// const RolesBulkActionButtons = props => (
//     <div>
//         <ResetViewsButton label="Скинути вибір" {...props} />
//         {/* Add the default bulk delete action */}
//         <BulkDeleteButton {...props} />
//     </div>
// );

const RolesFilter = props => (
  <Filter {...props}>
    <TextInput label="Роль" source="name" alwaysOn defaultValue="" />
  </Filter>
);

export const RolesList = ({ classes, ...props }) => (
  <div>
    <List
      {...props}
      title="Ролі користувачив"
      actions={<RolesListActions />}
      filters={<RolesFilter />}
      perPage={50}
    >
      <Datagrid>
        <NumberField label="ID" source="id" />
        <TextField sortable={false} label="Роль" source="name" />
        <ShowButton label="ra.action.show" />
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

const RolesTitle = ({ record }) => {
  return <span>Деталі по {record ? `"${record.name}"` : ""}</span>;
};

const RolesShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} label="ra.action.edit" />
  </CardActions>
);

export const RolesShow = ({ classes, ...props }) => (
  <div>
    <Show title={<RolesTitle />} actions={<RolesShowActions />} {...props}>
      <SimpleShowLayout>
        <TextField label="id" source="id" />
        <TextField label="Роль" source="name" />
      </SimpleShowLayout>
    </Show>
  </div>
);

const RolesCreateToolbar = props => (
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

export const RolesCreate = ({ classes, ...props }) => (
  <div>
    <Create undoable={false} {...props}>
      <SimpleForm toolbar={<RolesCreateToolbar />}>
        <NumberInput label="ID" source="id" />
        <TextInput label="Роль" source="name" />
      </SimpleForm>
    </Create>
  </div>
);

// Кастомный тульбар, можно удалить отсюда кнопку удаления и тогда при редактировании не ее не будет
// const RolesEditToolbar = props => (
//     <Toolbar {...props} >
//         <SaveButton />
//         <DeleteButton /> //
//     </Toolbar>
// );

export const RolesEdit = ({ classes, ...props }) => (
  <div>
    <Edit undoable={false} {...props}>
      <SimpleForm>
        <NumberInput label="ID" source="id" />
        <TextInput label="Роль" source="name" />
      </SimpleForm>
    </Edit>
  </div>
);
