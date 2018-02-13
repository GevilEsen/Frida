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
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}

export default Home