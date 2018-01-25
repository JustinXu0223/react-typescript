/**
 * @component store
 * @description Store配置
 * @time 2018/1/9
 * @author jokerXu
 */
import { createStore } from 'redux';
import rootReducer from '../reducers';
// 利用redux-logger打印日志
// import { createLogger } from 'redux-logger';
// 使用日志打印方法， collapsed让action折叠
// const logger = createLogger({collapsed: true});

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

const StoreConfig = () => {
  return createStore<any>(
    rootReducer,
    composeWithDevTools()
  );
};

export default StoreConfig;