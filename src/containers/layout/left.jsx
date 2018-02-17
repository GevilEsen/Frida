import React from 'react'
import style from './less/left.less'

console.log(style)

class Left extends React.Component {
  render() {
    return (
      <div className={style.leftPanel}>
        <h2>Left Component</h2>
      </div>
    )
  }
}

export default Left