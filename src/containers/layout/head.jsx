import React from 'react'
import { Avatar, Icon } from 'antd'
import style from './less/head.less'
import AvatarImg from 'static/images/avatar.png'

class Head extends React.Component {
  render() {
    return (
      <div className={style.head}>
        <div className={style.account}>
          <Icon
            type="bell"
            style={{
              color: '#222',
              fontSize: '20px',
              marginRight: '10px',
              verticalAlign: 'middle'
            }} />
          <Avatar src={AvatarImg} />
        </div>
      </div>
    )
  }
}

export default Head