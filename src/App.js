import React from 'react';
import { Admin, Resource, ListGuesser, } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';


import authProvider from './app/authProvider';
// import Dashboard from './app/Dashboard';
import minjustod01edruo  from './app/minjust/od/01';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {}
const App = () => (
    <Admin
        title="URP"
        dataProvider={hasuraDataProvider(hasuraUrl, headers)}
        authProvider={authProvider}
        // dashboard={Dashboard}
    >
        {/* <Resource name="" list={ListGuesser} /> */}
        {/* <Resource name="" {...} /> */}
        <Resource name="minjustod01edruo" {...minjustod01edruo} />
    </Admin>
);
export default App;