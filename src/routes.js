/**
 * 配置路由
 */
import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import asyncComponent from "./AsyncComponent";

export default () =>
  <Switch>
    <Route 
      path="/"
      exact
      component={asyncComponent(() => import(/* webpackChunkName: "home" */ "./compontents/Home"))} />
    <Route 
      path="/Form/:index"
      component={asyncComponent(() => import(/* webpackChunkName: "user" */ "./compontents/Form"))} />
   <Route 
      path="/error/401"
      component={asyncComponent(() => import(/* webpackChunkName: "user" */ "./compontents/error/401"))} />
      <Route 
      path="/error/404"
      component={asyncComponent(() => import(/* webpackChunkName: "user" */ "./compontents/error/404"))} />
      <Redirect
        from='/'
        to='/error/404'
       />
  </Switch>
;
