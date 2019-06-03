import React, { Component, Fragment } from 'react';
import { Icon, Button } from 'antd';
import './index.less'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    handleSwitchTypeChange = () => {
        if (this.state.isLogin) {
            console.log(1)
            this.setState({
                isLogin: false
            })
        } else {
            console.log(2)
            this.setState({
                isLogin: true
            })
        }

    }
    render() {
        return (
            <Fragment>
                <div className="LogoBox">
                    <img className="LogoImg" src="assets/logo.png" alt=""></img>
                </div>
                {
                    this.state.isLogin
                        ?
                        <div className="loginWrap">
                            <div className="userWrap">
                                <Icon type="smile" theme="twoTone" />
                                <input placeholder='userNameWarp' />
                            </div>
                            <div className="userWrap">
                                <Icon type="lock" theme="twoTone" />
                                <input type="password" placeholder='PassWord' />
                                <Icon type="eye" theme="twoTone" />
                                <Icon type="eye-invisible" theme="twoTone" />
                            </div>
                            <Button type="primary" block style={{ marginTop: 20 }}>LogIn</Button>
                            <p className="loginSwitcher" onClick={this.handleSwitchTypeChange}>log in with text code</p>
                        </div>
                        :
                        <div className="loginWrap">
                            <div className="userWrap">
                                <Icon type="mobile" theme="twoTone" />
                                <input placeholder='phone number' maxLength="11"></input>
                            </div>
                            <div className="userWrap">
                                <Icon type="message" theme="twoTone"/>
                                <input placeholder='phone number'></input>
                                <p>click to recive text code</p>
                            </div>
                        
                            <Button type="primary" block style={{ marginTop: 20 }}>LogIn</Button>
                            <p className="loginSwitcher" onClick={this.handleSwitchTypeChange}>log in with text code</p>
                        </div>
                }
            </Fragment>
        )
    }
}