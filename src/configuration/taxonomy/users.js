//  Название всех констант содержит "Users"
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
  NumberInput,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  BooleanInput,
  BooleanField,
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
const UsersPagination = props => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

const UsersListActions = ({
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
// const UsersBulkActionButtons = props => (
//     <div>
//         <ResetViewsButton label="Скинути вибір" {...props} />
//         {/* Add the default bulk delete action */}
//         <BulkDeleteButton {...props} />
//     </div>
// );

const UsersFilter = props => (
  <Filter {...props}>
    <TextInput label="Користувач" source="username" alwaysOn />
  </Filter>
);

// Блок справа, несет в себе разную информацию суммы и тд. https://marmelab.com/react-admin/List.html
// const Aside = () => (
//     <div style={{ width: 200, margin: '1em' }}>
//         <Typography variant="title">Users details</Typography>
//         <Typography variant="body1">
//             Total views: {ids.map(id => data[id]).reduce((sum, Users) => sum + Users.views, 0)}
//         </Typography>
//     </div>
// );

// Cоздание кнопки, которую можно повесить что бы создать связанную сущность.
// const CreateRelatedYOUTYPEButton = ({ record }) => (
//     <Button
//         component={Link}
//         to={{
//             pathname: '/comments/create',
//             state: { record: { Users_id: record.id } },
//         }}
//     >
//         Write a comment for that Users
//     </Button>
// );

export const UsersList = ({ classes, ...props }) => (
  <div>
    <List
      {...props}
      title="Користувачи"
      actions={<UsersListActions />}
      filters={<UsersFilter />}
      pagination={<UsersPagination />}
      sort={{ field: "created_at", order: "DESC" }}
    >
      <Datagrid>
        <DateField label="Cтворен" source="created_at" showTime />
        <TextField label="Користувач" source="username" />
        <BooleanField label="Активный" source="active" />
        <TextField label="Роль" source="default_role" />
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

const UsersTitleShow = ({ record }) => {
  return <span>Деталі по {record ? `"${record.username}"` : ""}</span>;
};

const UsersShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle}>
    <EditButton basePath={basePath} record={data} label="ra.action.edit" />
    {/* Add your custom actions */}
    {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
  </CardActions>
);

export const UsersShow = ({ classes, ...props }) => (
  <div>
    <Show title={<UsersTitleShow />} actions={<UsersShowActions />} {...props}>
      <SimpleShowLayout>
        <DateField label="Cтворен" source="created_at" />
        <TextField label="Користувач" source="username" />
        <BooleanField label="Активный" source="active" />
        <TextField label="Роль" source="default_role" />
      </SimpleShowLayout>
    </Show>
  </div>
);

const UsersCreateToolbar = props => (
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

export const UsersCreate = ({ classes, ...props }) => (
  <div>
    <Create redirect="show" undoable={false} {...props}>
      <SimpleForm toolbar={<UsersCreateToolbar />}>
        <TextInput label="Користувач" source="username" />
        <BooleanInput label="Активный" source="active" />
        <ReferenceInput
          label="Роль"
          source="default_role"
          reference="roles"
          sortBy="roles.id"
        >
          <SelectInput source="name" />
        </ReferenceInput>
        <TextInput label="Пароль" source="password" type="password" />
      </SimpleForm>
    </Create>
  </div>
);

// Кастомный тульбар, можно удалить отсюда кнопку удаления и тогда при редактировании не ее не будет
const UsersEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButton /> //
  </Toolbar>
);

const UsersTitleEdit = ({ record }) => {
  return <span>Редагування {record ? `"${record.username}"` : ""}</span>;
};

export const UsersEdit = ({ classes, ...props }) => (
  <div>
    <Edit title={<UsersTitleEdit />} undoable={false} {...props}>
      <SimpleForm toolbar={<UsersCreateToolbar />}>
        <TextInput label="Користувач" source="username" />
        <BooleanInput label="Активный" source="active" />
        <ReferenceInput
          label="Роль"
          source="default_role"
          reference="roles"
          sortBy="roles.id"
        >
          <SelectInput source="name" />
        </ReferenceInput>
        <TextInput label="Пароль" source="password" type="password" />
      </SimpleForm>
    </Edit>
  </div>
);
