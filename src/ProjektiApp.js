import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {red, blue, green, yellow, lightBlue, amber, pink } from '@material-ui/core/colors/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import KyselyFetchApp from './KyselyFetchApp';



function ProjektiApp () {

    return ( 

        <div>

            <KyselyFetchApp></KyselyFetchApp>
        </div>
        
    )
}
export default ProjektiApp;