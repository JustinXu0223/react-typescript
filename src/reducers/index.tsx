/**
 * @component reducers
 * @description 根reducers
 * @time 2018/1/9
 * @author jokerXu
 **/
import { combineReducers } from 'redux';
import { enthusiasm } from './demo';
import { routerReducer } from 'react-router-redux';

const rootReducer= combineReducers({
    demo: enthusiasm,
    routing: routerReducer,
});

export default rootReducer;