import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import DashboardPage from '../components/dashboard';
import AddPage from '../components/add-expense';
import EditPage from '../components/edit-expense';
import HelpPage from '../components/help';
import NotFoundPage from '../components/404';
import LoginPage from '../components/login';

const AppRouter = () => (
    <BrowserRouter>
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
    </BrowserRouter>
);

export default AppRouter;