import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import moment from 'moment'
import axios from './../../axios'

const baiduAPI =
  'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'

export default class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: '顺顺'
    })

    setInterval(() => {
      let sysTime = moment().format('YYYY-MM-DD HH:mm:ss')
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    axios
      .jsonp({
        url: baiduAPI
      })
      .then(response => {
        if (response.status === 'success') {
          let data = response.results[0].weather_data[0]
          console.log(data)
          this.setState({
            dayPictureUrl: data.dayPictureUrl,
            weather: data.weather
          })
        }
        // console.log(response)
      })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weater-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
