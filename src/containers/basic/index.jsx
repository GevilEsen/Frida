import React from 'react'
import store from './store'
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

  increment() {
    console.log('increment')
    store.dispatch({type: 'INCREMENT'})
    console.log(store.getState())
    let count = this.state.count
    this.setState({
      count: count + 2
    })
  }

  decrement() {
    console.log('decrement')
    store.dispatch({type: 'DECREMENT'})
  }

  render() {
    const state = store.getState()
    const {count} = this.state
    console.log(state)
    return (
      <div>
        <h2>This state is {store.getState()}, {count}
      </h2>
        <Button type="primary" onClick={this.increment.bind(this)}>increment</Button>
        <Button type="primary" onClick={this.decrement.bind(this)}>decrement</Button>
      </div>
      
    )
  }
}

export default Basic