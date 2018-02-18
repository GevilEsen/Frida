import React from 'react'
import { Button } from 'antd'
import style from './less/home.less'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    this.props.onClick()
  }

  render() {
    const { home } = this.props

    return (
      <div className={style.home}>
        <div className={style.accountInfo}>
          account-info
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state }
}

const mapDispatchToProps = {
  onClick: () => {
    return {
      type: 'INCREMENT'
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)