import React from 'react'
import { Form, Input, Steps } from 'antd'
const FormItem = Form.Item
const Step = Steps.Step
const style = './index.less'

const steps = [
  {
    step: 'step1',
    title: '步骤一',
    content: '步骤一'
  },
  {
    step: 'step2',
    title: '步骤二',
    content: '步骤二'
  },
  {
    step: 'step3',
    title: '步骤三',
    content: '步骤三'
  }
]

export default class FSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  // state = {
  //   current: 0,
  // }

  render() {
    const { current } = this.state

    return (
      <div className={style.hello}>
        <h1>Hello, Frida!</h1>
      </div>
    )
  }
}
