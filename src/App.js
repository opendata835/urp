import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";

import UserIcon from "@material-ui/icons/Group";

//import hasuraDataProvider from 'ra-data-hasura';
import hasuraDataProvider from "./service/dataProvider/hasura_dp";
import authProvider from "./service/authProvider";
import ukrainianMessages from "./configuration/i18n/ua";

import { Layout } from "./configuration/layout";
import Menu from "./configuration/layout/Menu";
// import themeReducer from './app/themeReducer';

import {
  RolesList,
  RolesShow,
  RolesCreate,
  RolesEdit
} from "./configuration/taxonomy/roles";
import {
  UsersList,
  UsersShow,
  UsersCreate,
  UsersEdit
} from "./configuration/taxonomy/users";
import { Minjustod01UOList, Minjustod01UOShow } from "./datasets/MinjustOD01UO";

const messages = { ua: ukrainianMessages };
const i18nProvider = locale => messages[locale];

const hasuraUrl = "https://graphql.ecoalition.org.ua";
const headers = { "content-type": "application/json" };

const App = () => (
  <div>
    <Admin
      dataProvider={hasuraDataProvider(hasuraUrl, headers)}
      authProvider={authProvider}
      appLayout={Layout}
      menu={Menu}
      i18nProvider={i18nProvider}
      locale="ua"
      // customReducers={{ theme: themeReducer }}
    >
      {/* <Resource name="users" list={ListGuesser} /> */}
      {/* <Resource name="" {...} /> */}
      <Resource
        name="users"
        list={UsersList}
        show={UsersShow}
        create={UsersCreate}
        edit={UsersEdit}
      />
      <Resource
        name="roles"
        list={RolesList}
        show={RolesShow}
        create={RolesCreate}
        edit={RolesEdit}
      />
      <Resource
        name="minjustod01uo"
        list={Minjustod01UOList}
        show={Minjustod01UOShow}
      />
    </Admin>
  </div>
);
export default App;
