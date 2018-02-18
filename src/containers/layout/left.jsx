import React from 'react'
import Nav from './nav'
import style from './less/left.less'

class Left extends React.Component {
  render() {
    return (
      <div className={style.leftPanel}>
        <div className={style.logo}>
          <h2 className={style.text}>Frida-admin</h2>
          <Nav />
        </div>
      </div>
    )
  }
}

export default Left