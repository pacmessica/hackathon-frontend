import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { filter } from './filter';
import { cases } from './cases';
import { report } from './report';

const rootReducer = combineReducers({
    filter,
    cases,
    report,
    routing
});

export default rootReducer;
