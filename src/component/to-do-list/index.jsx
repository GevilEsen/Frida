import React from 'react'
import { Icon, List, Avatar } from 'antd'

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
];

class ToDo extends React.Component {
  render() {
    return (
      <div className={style.list}>
        <div className={style.head}>
          <Icon type="check-square-o" /><span style={{ marginLeft: "5px" }}>待办事项</span>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ToDo