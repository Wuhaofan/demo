import React,{ PureComponent} from 'react'
import '../App.css';
import Sider from './sider'
import style from '../index.module.less';
import Routes from "../routes";
class Layout extends PureComponent {
  render() {
        return (
            <div>
            <header className='App-header'>header</header>
            <aside className={style.aside}>
                <Sider/>
            </aside>
            <section className={style.section}>
                <Routes />
            </section>
          </div>
        )
  }
}

export default Layout
