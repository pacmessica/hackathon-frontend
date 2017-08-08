import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { filter } from './filter';
import { cases } from './cases';

const rootReducer = combineReducers({
    filter,
    cases,
    routing
});

export default rootReducer;
