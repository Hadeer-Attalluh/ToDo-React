import { createStore } from 'redux';
import {reducer} from './Reducers/reducer';
const storeState = {
    todos: [
    
]
};

const store = createStore(reducer, storeState);

export default store;