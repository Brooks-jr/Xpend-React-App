import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/header';
import DashboardPage from '../components/dashboard';
import AddPage from '../components/add-expense';
import EditPage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/404';
import LoginPage from '../components/login';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/create" component={AddPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;