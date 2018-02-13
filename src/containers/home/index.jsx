import React from 'react'
import classNames from 'classnames'
import {Button} from 'antd'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Hey, Frida!</h2>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}

export default Home