// SideBar.js
import React, { Component, Fragment } from 'react'
class SideBar extends Component {
    constructor (props) {
        // ...
        this.generateSidebar = this.generateSidebar.bind(this)
    }
    render () {
        return ( // 渲染侧边栏
            <ul className="sidebar-wrapper">
                { map(this.generateSidebar, this.state.routes) }
            </ul>
        )
    }
    generateSidebar (item) { // 一级nav
        return <li className="sidebar-item" key={item.title}>
            <div className={ className({
                'sidebar-item-name': true,
                'on': item.active  /* 当前菜单展开/收起标识 */
            }) }>
                <span>
                    { item.title }
                </span>
            </div>
            <ul className="sidebar-sub">
                { this.generateSubMenu(item.routes) }
            </ul>
        </li>
    }
    generateSubMenu (routes) { // 子级nav
        return map(each => <li className="sidebar-sub-item" key={ each.name }>
            { each.component ? <a href={ each.path }>{ each.name }</a> : (
                <Fragment>
                    <div className={ className({
                        'sidebar-item-name': true,
                        'on': each.active // 当前菜单展开/收起标识
                    }) }>
                        { each.name }
                    </div>
                    <ul className="sidebar-sub">
                        { this.generateSubMenu(each.routes) }
                    </ul>
                </Fragment>
            ) }
        </li>, routes)
    }
}
