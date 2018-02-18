import React from 'react'
import { Row, Col, Avatar } from 'antd'

import AvatarImg from 'static/images/avatar.png'
import style from './index.less'

class AccountInfo extends React.Component {
  render() {
    return (
      <div className={style.accountInfo}>
        <Row className={style.info}>
          <Col span={10}>
            <Avatar src={AvatarImg} className={style.avatar} />
          </Col>
          <Col span={14}>
            <h2 className={style.type}>Admin</h2>
            <p className={style.typeDescription}>Super Administrator</p>
          </Col>
        </Row>
        <Row className={style.lastLoginInfo}>
          <Col span={10}>
            <p>上次登陆时间：</p>
            <p>上次登陆地点：</p>
          </Col>
          <Col span={14}>
            <p>2018.01.22-13:22:40</p>
            <p>北京</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AccountInfo