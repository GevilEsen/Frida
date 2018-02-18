import React from 'react'
import style from './less/welcome.less'

class Welcome extends React.Component {
  render() {
    return (
      <div className={style.welcome}>
        Hey, Frida!
      </div>
    )
  }
}

export default Welcome