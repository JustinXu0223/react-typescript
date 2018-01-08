import { combineReducers } from 'redux';
import { enthusiasm } from './demo';
const rootReducer = combineReducers({
	demo: enthusiasm
});

export default rootReducer;