/**
 * @component routers
 * @description 路由配置
 * @time 2018/1/9
 * @author jokerXu
 */
import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../views/app';
import Hello from '../views/Hello';
import Error from '../views/Error';
import Home from '../views/Home';

export interface Props {
  history: any;
}

const RouterConfig = ({history}: Props) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/demo" component={Hello} />
      </Route>

      <Route path="/404" component={Error}/>
      <Route path="*" component={Error}/>
    </Router>
  );
};

export default RouterConfig;
