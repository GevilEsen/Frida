import React from 'react'
import Layout from '../layout'
import DevTool from '../devtool'

class Root extends React.Component {

  render() {
    return (
      <div>
        <Layout />
        {this.props.children ? this.props.children : null}
        <DevTool/>
      </div>
    )
  }
}

export default Root