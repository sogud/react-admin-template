import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class Header extends Component {
  componentWillMount() {
    this.setState({
      userName: '顺顺'
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span>2019-4-4</span>
            <span>晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
