import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from "connected-react-router";
import catalogReducers from './catalog/catalogReducers';
import cartReducers from './cart/cartReducers';
import checkoutReducers from './checkout/checkoutReducers';

export default function configureStore(history, initialState) {
    const reducers = {
        ...catalogReducers,
        cartState: cartReducers(),
        checkoutState: checkoutReducers(),
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history),
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
