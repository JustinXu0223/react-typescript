/**
 * @component routers
 * @description 路由配置
 * @time 2018/1/9
 * @author jokerXu
 **/
import * as React from 'react';
import { Router,Route, IndexRoute } from 'react-router';

import App from '../views/app';
import Hello from '../views/Hello';

export interface Props {
    history: any;
}

const RouterConfig = ({ history }: Props)=> {
    return (
        <Router history={history}>
            <Route path="/">
                <IndexRoute component={Hello} />
                <Route path="/demo">
                    <IndexRoute component={Hello} />
                </Route>
                <Route path="/app">
                    <IndexRoute component={App} />
                </Route>
            </Route>
        </Router>
    )
};

export default RouterConfig;
