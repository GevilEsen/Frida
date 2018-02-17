import React from 'react'
import Layout from '../layout'
import DevTool from '../devtool'
import style from './index.less'

class Root extends React.Component {

  render() {
    return (
      <div className={style.root}>
        <Layout />
        {this.props.children ? this.props.children : null}
        <DevTool/>
      </div>
    )
  }
}

export default Root