import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer/rootReducer";
import createSagaMiddleware from 'redux-saga'
import {thunk} from 'redux-thunk';
import rootSaga from "../saga/rootSaga";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);
export default store;