/**
 * @component index
 * @description 全局入口文件
 * @time 2018/1/9
 * @author jokerXu
 **/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
import { Provider } from 'react-redux';
import StoreConfig  from './store';
import { browserHistory } from 'react-router';
import RouterConfig from './routers';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.less';

const store= StoreConfig();
const history= syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig history={history} />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
