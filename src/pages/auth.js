import React, { Fragment, PureComponent } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'

class Auth extends PureComponent {
    render(){
        var info=localStorage.getItem('info');
        if(!info){
            return (<Redirect to="/"/>)
        }
        var {path,component,...rest} = this.props;
        return (
            <Route path={path}  {...rest} component={component}/>
        )
    }

}

export default withRouter(Auth);