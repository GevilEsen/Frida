import React from 'react'
import { Button, Row, Col } from 'antd'
import { connect } from 'react-redux'

import AccountInfo from 'component/account-info'
import ToDo from 'component/to-do-list'

import style from './index.less'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { home } = this.props

    return (
      <div className={style.home}>
        <Row>
          <Col span={8}>
            <AccountInfo />
            <ToDo />
          </Col>
          <Col span={16}>
            <div className={style.mangerList}>
              manager-list
            </div>
            <div className={style.map}>
              map
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state }
}

const mapDispatchToProps = {
  onClick: () => {
    return { type: 'INCREMENT' }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)