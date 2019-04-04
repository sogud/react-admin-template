import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

import Home from './pages/hemo'
export default class admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header>Header</Header>
          <Row className="content">
            <Home />
            {/* {this.props.children} */}
          </Row>
          <Footer>Footer</Footer>
        </Col>
      </Row>
    )
  }
}
