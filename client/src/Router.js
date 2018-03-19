import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import W1 from './components/W1';
import W2 from './components/W2';
import Wiz3 from './components/Wiz3';
import W4 from './components/W4';
import W5 from './components/W5';


export default(
    <HashRouter>
        <div>
            <Switch>
                <Route component={Login} exact path = '/'/>
                <Route component={Dashboard} path = '/dashboard' />
                <Route component={W1} path = '/w1' />
                <Route component={W2} path = '/w2' />
                <Route component={Wiz3} path = '/w3' />
                <Route component={W4} path = '/w4' />
                <Route component={W5} path = '/w5' />

            </Switch>           
        </div>
    </HashRouter>
)