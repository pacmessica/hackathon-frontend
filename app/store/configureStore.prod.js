import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware),
        applyMiddleware(thunk),
    );
}
