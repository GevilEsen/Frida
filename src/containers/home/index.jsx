import React from 'react'
import { Button, Row, Col } from 'antd'
import { connect } from 'react-redux'

import AccountInfo from 'component/account-info'
import ToDo from 'component/to-do-list'
import ManagerList from 'component/manager-list'
import Map from 'component/map'

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
          <Col span={6}>
            <AccountInfo />
            <ToDo />
          </Col>
          <Col span={18}>
            <ManagerList />
            <Map />
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