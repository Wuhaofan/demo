import React,{ PureComponent} from 'react'
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import '../App.css';
import Sider from './sider'
import Form from './Form'
import style from '../index.module.less';
import Error401 from './error/401'
import Error404 from './error/404'
function Home() {
    return(
      <div>Home</div>
    )
  }
  
class Layout extends PureComponent {
  render() {
        return (
            <div>
            <header className='App-header'></header>
            <aside className={style.aside}>
              <Sider/>
            </aside>
            <section className={style.section}>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/Form/:index" component={Form}></Route>
                <Route path="/error/401" component={Error401}></Route>
                <Route path="/error/404'" component={Error404}></Route>
                <Redirect
                      from='/'
                      to='/error/404'
                  />
              </Switch>
            </section>
          </div>
        )
  }
}

export default Layout
