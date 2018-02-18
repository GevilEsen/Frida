import React from 'react'
import style from './less/head.less'
import Avatar from 'static/images/avatar.jpeg'

class Head extends React.Component {
  render() {
    return (
      <div className={style.head}>
        <div className={style.account}>
          <img src={Avatar} />
        </div>
      </div>
    )
  }
}

export default Head