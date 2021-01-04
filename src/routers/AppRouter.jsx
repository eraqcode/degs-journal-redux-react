import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../components/auth/LoginPage'
import { SignUpPage } from '../components/auth/SignUpPage'
import { HomePage } from '../components/home/HomePage'
import { DashboardRouter } from './DashboardRouter'
export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={ HomePage }
                />
                <Route
                    path="/login"
                    exact
                    component={ LoginPage }
                />
                <Route
                    path="/signup"
                    exact
                    component={ SignUpPage }
                />
                <Route 
                    path="/dashboard"
                    component={ DashboardRouter }
                />
            </Switch>
        </Router>
    )
}
