import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { StoreState } from '../entity';

const Store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

export default Store;