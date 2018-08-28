import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/dashboard';
import AddPage from '../components/add-expense';
import EditPage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/404';
import LoginPage from '../components/login';
import PrivateRoute from './private-route';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddPage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;