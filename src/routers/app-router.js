import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/dashboard';
import AddPage from '../components/add-expense';
import EditPage from '../components/edit-expense';
import NotFoundPage from '../components/404';
import LoginPage from '../components/login';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddPage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;