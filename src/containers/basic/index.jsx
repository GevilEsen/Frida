import React from 'react'
import {Button} from 'antd';

class Basic extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {count} = this.state
    console.log(state)
    return (
      <div>
        <h2>This state is {count}
      </h2>
        <Button type="primary">increment</Button>
        <Button type="primary">decrement</Button>
      </div>
      
    )
  }
}

export default Basic