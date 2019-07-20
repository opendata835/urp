import React from 'react';
import { Admin, Resource, ListGuesser, } from 'react-admin';



import './App.css';
import hasuraDataProvider from 'ra-data-hasura';
import authProvider from './app/authProvider';


import { Login, Layout } from './layout';
import UAMessages from './i18n/ua';
import themeReducer from './themeReducer';

// import Menu from './Menu';

// import Dashboard from './app/Dashboard';
import minjustod01edruo  from './app/minjust/od/01';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {}


const App = () => (
    <Admin
        title="URP"
        // menu={Menu}
        dataProvider={hasuraDataProvider(hasuraUrl, headers)}
        authProvider={authProvider}
        customReducers={{ theme: themeReducer }}
        // loginPage={Login}
        appLayout={Layout}
        locale={UAMessages}
        // dashboard={Dashboard}
    >
        {/* <Resource name="" list={ListGuesser} /> */}
        {/* <Resource name="" {...} /> */}
        <Resource name="minjustod01edruo" options={{ label: 'ЕДР' }} {...minjustod01edruo} />
    </Admin>
);
export default App;