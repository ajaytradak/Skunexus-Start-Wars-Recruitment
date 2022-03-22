import { createLogger } from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";
import { combinedReducers } from "../reducers";
import { Environments } from "../constants/Environments";
const inDevelopment = process.env.NODE_ENV === Environments.development;

const composeEnhancers = inDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 10 })
    : compose;


export const CreateStore = () => {
    const logger = createLogger({
        collapsed: true
    });

    let store;

    if (inDevelopment) {
        store = createStore(combinedReducers, composeEnhancers(applyMiddleware(logger)));
    } else {
        store = createStore(combinedReducers);
    }

    return store;
};
