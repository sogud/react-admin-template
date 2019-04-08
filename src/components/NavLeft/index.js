import React, { Component } from 'react'
import { Menu } from 'antd'
import './index.less'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuList'
const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

export default class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)

    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Ms Admin</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}
