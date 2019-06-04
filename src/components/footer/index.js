import React, { Fragment, PureComponent, Component } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionCreators } from './store';
import axios from 'axios'

class Footer extends Component {
    render() {
        // console.log(this.props.location.pathname)
        var pathname = this.props.location.pathname
        return (
            <Fragment>
                <div className="footerBox">
                    <NavLink to={'/payment'}>
                        <div className="subBox">
                            {
                                pathname === '/payment'
                                    ?
                                    <Fragment>
                                        <img src="assets/img_sk_0.png" alt="active" />
                                        <p className="activeColor">Recive</p>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <img src="assets/img_sk_1.png" alt="deactive" />
                                        <p className="deActiveColor">Recive</p>
                                    </Fragment>
                            }
                        </div>
                    </NavLink>
                    <NavLink to={'/payment/record'}>
                        <div className="subBox">
                            {
                                pathname === '/payment/record'
                                    ?
                                    <Fragment>
                                        <img src="assets/img_fk_0.png" alt="active" />
                                        <p className="activeColor">Records</p>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <img src="assets/img_fk_1.png" alt="deactive" />
                                        <p className="deActiveColor">Records</p>
                                    </Fragment>
                            }
                        </div></NavLink>
                    <NavLink to={'/payment/setting'}>
                        <div className="subBox">
                            {
                                pathname === '/payment/setting'
                                    ?
                                    <Fragment>
                                        <img src="assets/img_my_0.png" alt="active" />
                                        <p className="activeColor">Me</p>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <img src="assets/img_my_1.png" alt="deactive" />
                                        <p className="deActiveColor">Me</p>
                                    </Fragment>
                            }
                        </div>
                    </NavLink>
                </div>
            </Fragment>
        )
    }
}
const mapState = (state) => {
    return {

    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Footer)