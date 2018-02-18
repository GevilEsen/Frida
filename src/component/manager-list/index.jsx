import React from 'react'
import { Row, Col, Icon } from 'antd'

import style from './index.less'

const list = [
  {
    id: 1,
    icon: (<Icon type="user-add" />),
    color: 'rgb(45, 140, 240)',
    count: 496,
    title: "最近新增用户数"
  },
  {
    id: 2,
    icon: (<Icon type="eye-o" />),
    color: 'rgb(100, 213, 114)',
    count: 496,
    title: "最近新增用户数"
  },
  {
    id: 3,
    icon: (<Icon type="cloud-upload-o" />),
    color: 'rgb(255, 213, 114)',
    count: 496,
    title: "最近新增用户数"
  },
  {
    id: 4,
    icon: (<Icon type="retweet" />),
    color: 'rgb(242, 94, 67)',
    count: 496,
    title: "最近新增用户数"
  }
]

class ManagerLsit extends React.Component {
  render() {
    return (
      <div className={style.list}>
        <Row>
          {
            list.map(item => (
              <Col span={6} key={item.id} className={style.listCol}>
                <Row className={style.listItem}>
                  <Col span={7}>
                    <div className={style.listIcon} style={{background: `${item.color}`}}>
                      {item.icon}
                    </div>
                  </Col>
                  <Col span={17}>
                    <div className={style.listMore}>
                      <h1 style={{color: `${item.color}`}}>{item.count}</h1>
                      <p>{item.title}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}

export default ManagerLsit