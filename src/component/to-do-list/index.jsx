import React from 'react'
import { Icon, List, Checkbox } from 'antd'

import style from './index.less'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class ToDo extends React.Component {
  render() {
    return (
      <div className={style.list}>
        <div className={style.head}>
          <Icon type="check-square-o" /><span style={{ marginLeft: "5px" }}>待办事项</span>
        </div>
        <List
          style={{padding: "20px 20px 0"}}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item className={style.listItem}>
              <List.Item.Meta
                avatar={<Checkbox />}
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ToDo