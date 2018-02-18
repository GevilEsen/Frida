import React from 'react'
import { Avatar } from 'antd'
import style from './less/head.less'
import AvatarImg from 'static/images/avatar.png'

class Head extends React.Component {
  render() {
    return (
      <div className={style.head}>
        <div className={style.account}>
          <Avatar src={AvatarImg} />
        </div>
      </div>
    )
  }
}

export default Head