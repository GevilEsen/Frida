import React from 'react'
import classNames from 'classnames'
import {Button} from 'antd'
import style from './index.less'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.home}>
        <h2 className={style.title}>Hey, Frida.js!</h2>
      </div>
    )
  }
}

export default Home