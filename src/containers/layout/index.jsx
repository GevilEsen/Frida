import React from 'react'
import Left from './left'
import Head from './head'
import Foot from './foot'
import style from './index.less'

class Root extends React.Component {

  render() {
    return (
      <div>
        <Left />
        <Head />
        <Foot />
      </div>
    )
  }
}

export default Root