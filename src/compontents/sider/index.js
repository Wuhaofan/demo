import React, { Component } from 'react'
import { Layout } from 'antd'
import Menu from './Menu'
const { Sider } = Layout

class SiderComponent extends Component {
  render () {
    return (
      <Sider
          collapsed={false}
          collapsible
          style={{ overflowY: 'auto', overflowX: 'hidden', height: '100vh', position: 'fixed', left: 0 ,backgroundColor:'#fff'}}
          trigger={null}
          width={200}
      >
        <Menu/>
      </Sider>
    )
  }
}

export default SiderComponent
