import React,{Component} from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

<<<<<<< HEAD
class MenuComponent extends Component {
  render(){
    const pathname = this.props.location.pathname;
    let codekey = pathname.substr(pathname.lastIndexOf('/')+1,pathname.length)
    return (
      <Menu
          defaultSelectedKeys={[codekey]}
          style={{
            borderRight: 'none'
          }}
          mode="inline"
          theme="dark"
      >
        {
        new Array(20).fill(0).map((item,index) => {
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
=======
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
       [...Array(20).fill(0)].map((item,index) => {
            return (
                <Menu.Item key={index}>
                  <Link to={`/Form/${index+1}`}>
                    <span>{index+1}</span>
                  </Link>
                </Menu.Item>
            )
        })
      }
    </Menu>
  )
>>>>>>> 0d8725e91875c00b162642b7bbebe1a1ecdf0b28
}
export default withRouter(MenuComponent)