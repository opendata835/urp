import React from 'react';
import { Admin, Resource, ListGuesser, } from 'react-admin';

import UserIcon from '@material-ui/icons/Group';


import hasuraDataProvider from 'ra-data-hasura';
import authProvider from './service/authProvider';

// import { Layout } from './configuration/layout';
// import themeReducer from './app/themeReducer';

// import Menu from './configuration/layout/Menu';

import { Minjustod01UOList }  from './datasets/MinjustOD01UO';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {}


const App = () => (
    <Admin
        title="URP"
        // menu={Menu}
        dataProvider={hasuraDataProvider(hasuraUrl, headers)}
        authProvider={authProvider}
        locale="ua"
        // customReducers={{ theme: themeReducer }}
        // appLayout={Layout}
    >
        {/* <Resource name="" list={ListGuesser} /> */}
        {/* <Resource name="" {...} /> */}
        {/* <Resource name="minjustod01edruo" icon={UserIcon} list={Minjustod01edruoList} /> */}
        <Resource name="minjustod01uo" icon={UserIcon} list={Minjustod01UOList} />
    </Admin>
);
export default App;