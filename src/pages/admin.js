import React from 'react';
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavLeft from '../components/NavLeft';
import Home from './home';
import '../style/common.less';

export default class admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span={4}>
                    <NavLeft></NavLeft>
                </Col>
                <Col className="main" span={20}>
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}