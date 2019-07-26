import React from 'react';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Admin, Resource, ListGuesser, AuthContext } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';

// import hasuraDataProvider from 'ra-data-hasura';
import hasuraDataProvider from './service/dataProvider/hasura_dp';
import authProvider from './service/authProvider';

import { Layout } from './configuration/layout';
import Menu from './configuration/layout/Menu';
// import themeReducer from './app/themeReducer';


import { Minjustod01UOList, Minjustod01UOShow, }  from './datasets/MinjustOD01UO';



const hasuraUrl = 'https://graphql.ecoalition.org.ua';
const headers = {'content-type': 'application/json',}

const theme = createMuiTheme({
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 70, // The default value is 55
    },
});

const App = () => (
    <div>    
        <Admin>
            dataProvider={hasuraDataProvider(hasuraUrl, headers)}
            authProvider={authProvider}
            menu={Menu}
            appLayout={Layout}
            locale="ua"
            theme={theme}
            {/* customReducers={{ theme: themeReducer }}  */}
            {/* <Resource name="" list={ListGuesser} /> */}
            {/* <Resource name="" {...} /> */}
            <Resource name="minjustod01uo" list={Minjustod01UOList} show={Minjustod01UOShow} />
        </Admin>
    </div>
);
export default App;