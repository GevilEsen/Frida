import React from 'react'
import store from './store'

class Basic extends React.Component {

  render() {
    console.log(store.getState())
    store.dispatch({type: 'INCREMENT'})
    console.log(store.getState())
    return (
      <h2>This state is
      </h2>
    )
  }
}

export default Basic