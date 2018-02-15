import React from 'react'
import DevTool from '../devtool'

class Root extends React.Component {
  componentDidMount() {
    console.log(123)
  }

  render() {
    return (
      <div>
        <DevTool />
      </div>
    )
  }
}

export default Root