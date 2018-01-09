import { EnthusiasmAction } from '../actions';
import { demo } from '../entity';
import * as Constants from '../constants/index';

const initState= {
	enthusiasmLevel: 1,
	languageName: 'World',
};
export function enthusiasm(state: demo= initState, action: EnthusiasmAction): demo {
    switch (action.type) {
        case Constants.INCREMENT_ENTHUSIASM:
            return {...state,
				enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case Constants.DECREMENT_ENTHUSIASM:
            return {...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
            };
    }
    return state;
}