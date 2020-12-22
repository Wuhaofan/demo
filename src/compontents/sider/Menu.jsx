import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const MenuComponent = props => {
  return (
    <Menu
        style={{
          borderRight: 'none'
        }}
        mode="inline"
        theme="dark"
    >
      {
       [...Array(100).fill(0)].map((item,index) => {
            return (
                <Menu.Item key={index}>
                  <Link to={`/Form/${index}`}>
                    <span>{index}</span>
                  </Link>
                </Menu.Item>
            )
        })
      }
    </Menu>
  )
}
export default  withRouter(MenuComponent)