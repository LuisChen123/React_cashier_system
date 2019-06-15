import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { Button } from 'antd';
import { connect } from 'react-redux';


class Setting extends PureComponent {
    state = {
        userName:'asdsdd',
        accountNumber:'213213543245234',
        name : 'info'
    }
    handleLogOut=()=>{
        sessionStorage.clear();
        this.props.history.replace('/');
    }
    
    render() {  
        return (
            <Fragment>
              <div className="settingWrap">
                    <div className="line">
                        <label className="leftBox">User Name:</label>
                        <label className="rightBox">{this.state.userName}</label>
                    </div>
                    <div className="line">
                        <label className="leftBox">Account Number:</label>
                        <label className="rightBox">{this.state.accountNumber}</label>
                    </div>
                    <div className="buttonWrap">
                    <Button className="logOutButton" type="primary" onClick={this.handleLogOut}>Log Out</Button>
                    </div>
                   
              </div>
            </Fragment>
        )
    }
}


const mapState =(state) =>{
    return{

    }
}

const mapDispatch =(dispatch) =>{
 return{
        
    }
}


export default connect(mapState, mapDispatch)(Setting)