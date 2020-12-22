import React,{ PureComponent} from 'react'
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Layout from './compontents/Layout'
class App extends PureComponent{
  render(){
  return (
    <Router>
    <Switch>
      <Route
          component={Layout}
          path='/'
      />
    </Switch>
  </Router>
  );
  }
}
export default App