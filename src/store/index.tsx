import { createStore } from 'redux';
import rootReducer  from '../reducers';
import { StoreState } from '../entity';
// 利用redux-logger打印日志
// import { createLogger } from 'redux-logger';

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

// 使用日志打印方法， collapsed让action折叠，看着舒服。
// const logger = createLogger({collapsed: true});

const store= createStore<StoreState>(
		rootReducer,
		composeWithDevTools()
	);

export default store;