import React from 'react'
import Left from './left'
import Head from './head'
import Welcome from './welcome'
import Foot from './foot'
import style from './less/index.less'
import { Breadcrumb, Icon, Layout, Row, Col, Menu } from 'antd'
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout

class Root extends React.Component {

  render() {
    return (
      <div className={style.layout}>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Left />
          </Sider>
          <Layout>
            <Header className="header"><Head /></Header>
            {/* <Breadcrumb style={{ margin: '16px 0', padding: '0 20px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
            <Content style={{ padding: '10px 20px' }}>
              <div className={style.main}>
                {this.props.children ? this.props.children : <Welcome />}
              </div>
            </Content>
            <Footer style={{ padding: '0 20px' }}><Foot /></Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Root