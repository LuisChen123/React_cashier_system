import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import Login from './pages/login'
import Admin from './pages/admin.js'
import Buttons from './pages/ui/buttons.js'
import noMatch from './pages/noMatch';
import Modals from './pages/ui/modals'

export default class Irouter extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <App>
                        <Route path='/login' component={Login} />
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons} />
                                <Route path='/admin/ui/modals' component={Modals} />
                                <Route component={noMatch} />
                                </Switch>    
                            </Admin>
                        } />
                        <Route path='/order/detail' component={Login}/>
                    </App>
                </HashRouter>
            </div>
        )
    }
}







