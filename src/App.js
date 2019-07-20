import React from 'react';
import { Admin, Resource, ListGuesser, } from 'react-admin';

import UserIcon from '@material-ui/icons/Group';


import hasuraDataProvider from 'ra-data-hasura';
import authProvider from './service/authProvider';

import { Layout } from './configuration/layout';
import Menu from './configuration/layout/Menu';
// import themeReducer from './app/themeReducer';


import { Minjustod01UOList }  from './datasets/MinjustOD01UO';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {}


const App = () => (
    <div>    
        <Admin
            dataProvider={hasuraDataProvider(hasuraUrl, headers)}
            authProvider={authProvider}
            menu={Menu}
            appLayout={Layout}
            locale="ua"
            // customReducers={{ theme: themeReducer }}
        >
            {/* <Resource name="" list={ListGuesser} /> */}
            {/* <Resource name="" {...} /> */}
            <Resource name="minjustod01uo" icon={UserIcon} list={Minjustod01UOList} />
        </Admin>
    </div>
);
export default App;