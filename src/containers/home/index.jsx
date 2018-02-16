import React from 'react'
import { Button } from 'antd'
import style from './index.less'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  onClick() {
    console.log(this.props)
    this.props.onClick()
  }

  render() {
    const { home } = this.props

    return (
      <div className={style.home}>
        <h2 className={style.title}>Hey, Frida.js!{home}</h2>
        <Button type="primary" onClick={this
          .onClick
          .bind(this)}>按钮</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state.count }
}

const mapDispatchToProps = {
  onClick: () => {
    type: 'INCREMENT'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)