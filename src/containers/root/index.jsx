import React from 'react'
import DevTool from '../devtool'

class Root extends React.Component {
  componentDidMount() {
    console.log(123)
  }

  render() {
    return (
      <div>
        <h2>1233213131</h2>
        <DevTool />
      </div>
    )
  }
}

export default Root