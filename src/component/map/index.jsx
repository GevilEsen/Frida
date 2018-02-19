import React from 'react'
import echarts from 'echarts'
import China from './china.json'
import { Icon, Row, Col, Table } from 'antd'

import style from './index.less'

console.log(echarts)

echarts.registerMap('China', China)

const dataSource = [
  {
    key: '1',
    city: '武汉',
    views: 32
  }, {
    key: '2',
    city: '杭州',
    views: 42
  }, {
    key: '3',
    city: '成都',
    views: 42
  }, {
    key: '4',
    city: '上海',
    views: 42
  }, {
    key: '5',
    city: '深圳',
    views: 42
  }
];

const columns = [
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city'
  }, {
    title: '流量(k)',
    dataIndex: 'views',
    key: 'views'
  }
]

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  // geo: {
  //   map: 'china',
  //   label: {
  //     emphasis: {
  //       show: false
  //     }
  //   },
  //   regions: [
  //     {
  //       name: '南海诸岛',
  //       value: 0,
  //       itemStyle: {
  //         normal: {
  //           opacity: 1,
  //           label: {
  //             show: true

  //           }
  //         }
  //       }
  //     }
  //   ],
  //   roam: true,
  //   itemStyle: {
  //     normal: {
  //       areaColor: '#323c48',
  //       borderColor: '#404a59'
  //     },
  //     emphasis: {
  //       areaColor: '#2a333d'
  //     }
  //   }
  // },
  series: [
    {
      name: '中国',
      type: 'map',
      mapType: 'china',
      map: 'China',
      selectedMode: 'multiple',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: [
        {
          name: '湖北',
          selected: true
        }
      ]
    }
  ]
}

class Map extends React.Component {

  constructor(props) {
    super(props)
    let id = ('_' + Math.random()).replace('.', '_');
    this.state = {
      mapId: 'map' + id
    }
  }

  initMap(id) {
    let myChart = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(id));
    }
    myChart.setOption(option)
  }

  componentDidMount() {
    this.initMap(this.state.mapId);
  }

  componentDidUpdate() {
    this.initMap(this.state.mapId);
  }

  render() {
    return (
      <div className={style.map}>
        <div className={style.head}>
          <Icon type="dot-chart" />
          <span style={{
            marginLeft: "5px"
          }}>今日服务调用地理分布</span>
        </div>
        <div className={style.info}>
          <Row>
            <Col span={8}>
              <Table
                className={style.table}
                dataSource={dataSource}
                columns={columns}
                pagination={false} />
            </Col>
            <Col span={16}>
              <div
                id={this.state.mapId}
                style={{
                  height: "260px"
                }}></div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Map