import React, { Fragment, PureComponent } from 'react';
import './index.less'
import { connect } from 'react-redux';
import { Icon, Button ,message, } from 'antd';
import { actionCreators } from './store';
import axios from 'axios';

class Login extends PureComponent {
    state = {
        isContuningDownStart: false,
        CountinDownTime: 60,
        userName:'',
        passWord:'',
        phoneNumber:'',
        textCode:''
    }
    handleSendMessge = () => {
        console.log(this.state.CountinDownTime)
        this.setState({
            isContuningDownStart: true
        })
        var hi = setInterval(() => {
            this.setState({
                CountinDownTime: this.state.CountinDownTime - 1
            })
            if (this.state.CountinDownTime === 0) {
                clearInterval(hi)
                this.setState({
                    isContuningDownStart: false,
                    CountinDownTime: 60
                })
            }
        }, 1000);
    }
    handleUserInput=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
        console.log(event.target.value)
    }
    handlePostUserName=(isLogin,userName,passWord,phoneNumber,textCode)=>{
        console.log(isLogin,userName,passWord,phoneNumber,textCode)
        if(isLogin){
            if(userName !== '' && passWord !==""){
                axios.get('/api/userInfo.json').then(res=>{
                    if(res.data.success === true){
                        message.success('login success');
                       /*jump to next page */
                    }else{
                        message.error('Username or Password is wrong');
                    }
                })
            }else{
                message.error('Username or Password can`t be empty!');
            }
        }else{
            if(phoneNumber !== '' && textCode !==""){
                axios.get('/api/userInfo.json').then(res=>{
                    if(res.data.success === true){
                        message.success('login success');
                       /*jump to next page */

                    }else{
                        message.error('phoneNumber or textCode is wrong');
                    }
                })
            }else{
                message.error('Phonenumber or Text Code can`t be empty!');
            }
        }
    }
    render() {
        const { userName ,passWord,phoneNumber,textCode,isContuningDownStart,CountinDownTime } = this.state;
        const { handleShowPassWord,handleHidePassWord,handleTextTypeChange,isPassWordHide,isLogin,handleUserTypeChange } = this.props;
        return (
            <Fragment>
                <div className="LogoBox">
                    <img className="LogoImg" src="assets/logo.png" alt=""></img>
                </div>
                {
                    isLogin
                        ?
                        <div className="loginWrap">
                            <div className="userWrap">
                                <Icon type="smile" theme="twoTone" style={{ fontSize: '30px', verticalAlign: 'middle' }} />
                                <input placeholder='User Name' name="userName" maxLength="11" value = {userName} onChange={this.handleUserInput}/>
                            </div>
                            <div className="userWrap">
                                <Icon type="lock" theme="twoTone" style={{ fontSize: '30px', verticalAlign: 'middle' }} />
                                {
                                    isPassWordHide
                                        ?
                                        <Fragment>
                                            <input placeholder='PassWord' name="passWord" maxLength="20"  value = {passWord} onChange={this.handleUserInput}/>
                                            <Icon type="eye" theme="twoTone" style={{ fontSize: '20px', verticalAlign: 'middle' }} onClick={handleShowPassWord} />
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <input type="password" placeholder='PassWord' name="passWord"  maxLength="20" value = {passWord} onChange={this.handleUserInput}/>
                                            <Icon type="eye-invisible" theme="twoTone" style={{ fontSize: '20px', verticalAlign: 'middle' }}
                                                onClick={handleHidePassWord} />
                                        </Fragment>
                                }
                            </div>
                            <Button type="primary" block style={{ marginTop: 20 }} onClick={this.handlePostUserName.bind(this,isLogin,userName,passWord,phoneNumber,textCode)}>LogIn</Button>
                            <p className="loginSwitcher" onClick={handleTextTypeChange}>Login With Text Code</p>
                        </div>
                        :
                        <div className="loginWrap">
                            <div className="userWrap">
                                <Icon type="mobile" theme="twoTone" style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                                <input placeholder='phone number' name="phoneNumber" maxLength="11" value = {phoneNumber} onChange={this.handleUserInput}></input>
                            </div>
                            <div className="userWrap">
                                <Icon type="message" theme="twoTone" style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                                <input placeholder='text code' maxLength="5" name="textCode"  className="textCodeInput" value = {textCode} onChange={this.handleUserInput}></input>
                                {
                                    isContuningDownStart
                                        ?
                                        <p className="reciveTextCode">Wait {CountinDownTime}s to resend</p>
                                        :
                                        <p className="reciveTextCode" onClick={this.handleSendMessge}>Get Text Code</p>
                                }
                            </div>
                            <Button type="primary" block style={{ marginTop: 20 }} onClick={this.handlePostUserName.bind(this,isLogin,userName,passWord,phoneNumber,textCode)}>LogIn</Button>
                            <p className="loginSwitcher" onClick={handleUserTypeChange}>Login With User Name</p>
                        </div>
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.getIn(['login', 'isLogin']),
        isPassWordHide: state.getIn(['login', 'isPassWordHide']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTextTypeChange() {
            const action = actionCreators.textLogin()
            dispatch(action)
        },
        handleUserTypeChange() {
            const action = actionCreators.userLogin()
            dispatch(action)
        },
        handleShowPassWord() {
            const action = actionCreators.showPassWord()
            dispatch(action)
        },
        handleHidePassWord() {
            const action = actionCreators.hidePassWord()
            dispatch(action)
        },   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)