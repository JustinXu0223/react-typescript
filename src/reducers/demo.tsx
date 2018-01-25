/**
 * @component reducers
 * @description demo高阶函数
 * @time 2018/1/9
 * @author jokerXu
 */
import { All } from '../actions/demo';
import { Demo } from '../entity';
import * as Constants from '../constants/demo';

const initState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export function enthusiasm(state: Demo = initState, action: All): Demo {
  switch (action.type) {
    case Constants.INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
      };
    case Constants.DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    default:
      return state;
  }
}