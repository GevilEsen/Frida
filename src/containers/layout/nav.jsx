import React from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router'
import style from './less/nav.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

class Nav extends React.Component {
  render() {
    return (
        <Menu
          className={style.nav}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <MenuItem key="2">
            <Link to="/page2"><Icon type="windows" />页面1</Link>
          </MenuItem>
          <MenuItem key="3">
            <Link to="/page2"><Icon type="windows" />页面2</Link>
          </MenuItem>
          <SubMenu key="sub1" title={<span><Icon type="windows" /><span>页面3</span></span>}>
            <MenuItem key="4">
              <Link to="/page2"><Icon type="windows" />页面3-1</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
        )
      }
    }
    
export default Nav