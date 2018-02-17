import React from 'react'
import {Button} from 'antd'
import { connect } from 'react-redux'

class Basic extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Button type="primary">increment</Button>
        <Button type="primary">decrement</Button>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state }
}

const mapDispatchToProps = {
  onClick: () => {
    return {
      type: 'INCREMENT'
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic)