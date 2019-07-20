import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';


import authProvider from './app/authProvider';
// import Dashboard from './app/Dashboard';
// import { UserList } from './app/user';
// import minjustod01edruo  from './app/minjust/od/01';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {}
const App = () => (
    <Admin
        dataProvider={hasuraDataProvider(hasuraUrl, headers)}
        authProvider={authProvider}
        // dashboard={Dashboard}
    >
        <Resource name="minjustod01edruo" list={ListGuesser} />
    </Admin>
);
export default App;