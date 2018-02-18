import React from 'react'
import style from './less/foot.less'

class Foot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: ''
    }
  }

  componentDidMount() {
    const year = new Date().getFullYear()

    this.setState({year})
  }

  render() {
    const { year } = this.state

    return (
      <div className={style.foot}>
        Frida-admin ©{year} Created by kawhi with CodingWell
      </div>
    )
  }
}

export default Foot