import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //render whole Navlist menu to Admin page.
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}> {item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src="assets/logo-ant.svg" alt="asd"></img>
                    <h1>Yuhang`s BMS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}

                </Menu>
            </div>
        )

    }
}