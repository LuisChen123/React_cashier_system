import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login'
import Payment from './pages/payment'
import Record from './pages/record';
import Setting from './pages/setting'
import Container from './pages/container'
import Auth from './pages/auth'
import store from './store'

export default class Irouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <HashRouter>
                    <Switch>
                    <Route path='/' exact  component={Login} />
                    <Container path='/payment'  component={Container}>
                   
                           <Auth path='/payment' exact component={Payment} />
                           <Auth path='/payment/Record'   component={Record} />
                           <Auth path='/payment/setting'   component={Setting} />
                           {/* <Route path='/payment' exact component={Payment} />
                           <Route path='/payment/Record'   component={Record} />
                           <Route path='/payment/setting'   component={Setting} /> */}
                                    
                    </Container>
                    </Switch>
                </HashRouter>
            </div>
            </Provider>
        )
    }
}







