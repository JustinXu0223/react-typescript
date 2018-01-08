import { EnthusiasmAction } from '../actions';
import { demo } from '../entity';
import * as Constants from '../constants/index';
import initState from '../store/initState';
/*const initState= {
	enthusiasmLevel: 0,
	languageName: 'World',
}*/
export function enthusiasm(state: demo= initState.demo, action: EnthusiasmAction): demo {
	debugger;
    switch (action.type) {
        case Constants.INCREMENT_ENTHUSIASM:
            return {...state,
				enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case Constants.DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
    }
    return state;
}