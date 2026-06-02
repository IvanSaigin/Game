import { createStore } from 'redux';
import { reducer } from './Reduser';
export const store = createStore(reducer)