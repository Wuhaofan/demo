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
<<<<<<< HEAD
          style={{ overflowY: 'auto', overflowX: 'hidden', height:  "calc(100vh - 100px)", position: 'fixed', left: 0 ,backgroundColor:'#fff'}}
=======
          style={{ overflowY: 'auto', overflowX: 'hidden', height: 'calc(100vh - 100px)', position: 'fixed', left: 0 ,backgroundColor:'#fff'}}
>>>>>>> 0d8725e91875c00b162642b7bbebe1a1ecdf0b28
          trigger={null}
          width={200}
      >
        <Menu/>
      </Sider>
    )
  }
}

export default SiderComponent
