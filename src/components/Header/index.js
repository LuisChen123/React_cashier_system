import React from 'react'
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils'
import axios from '../../axios/index'

export default class Header extends React.Component {
    componentWillMount(){
        this.setState({
            userName:'Yuhang'
        })
        setInterval(()=>{
          let sysTime =  Util.formateDate(new Date().getTime());
          this.setState({
              sysTime
          })
        },1000);
        this.getWeatherAPI();
    }
    getWeatherAPI(){
        let city = "beijing";
        axios.handleJsonP({  
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+city+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        }).then((res)=>{
             if(res.status === 'success'){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather,
                    nightPictureUrl:data.nightPictureUrl
                })
             }
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>Welcome,{this.state.userName}</span>
                        <a href="#">Log Out</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        Home
                    </Col>
                    <Col span={20} className="weather">
                    <span className="date">{this.state.sysTime}</span>
                    <span className="weather-image">
                    <img src={this.state.dayPictureUrl} alt=""/> 
                    </span>
                    <span className="weather-detial">
                    {this.state.weather}
                    </span>
                    </Col>
                </Row>
            </div>
        )

    }
}