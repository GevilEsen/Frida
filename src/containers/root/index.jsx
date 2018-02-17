import React from 'react'
import Layout from '../layout'
import DevTool from '../devtool'

class Root extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {/* {this.props.children} */}
        <Layout>{this.props.children}</Layout>
        <DevTool/>
      </div>
    )
  }
}

export default Root