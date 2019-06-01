import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login'

export default class Irouter extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                        <Route path='/' component={Login} />
                        <Route path='/admin' render={() =>
                                <Switch>
                                </Switch>    
                         
                        } />
        
                </HashRouter>
            </div>
        )
    }
}







