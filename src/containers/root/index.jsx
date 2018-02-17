import React from 'react'
import Layout from '../layout'
import DevTool from '../devtool'

class Root extends React.Component {

  render() {
    return (
      <div>
        {this.props.children ? this.props.children : 456}
        <DevTool/>
      </div>
    )
  }
}

export default Root