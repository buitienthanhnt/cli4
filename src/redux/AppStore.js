import { createStore, combineReducers, applyMiddleware } from 'redux'; // npm install redux --save
import {Reducer , NumberReducer, PaperReducer} from './AppReducer';

const reduces = combineReducers({defRe: Reducer,  numberRe: NumberReducer, paperRe: PaperReducer });
const AppStore = createStore(reduces);
export default AppStore;