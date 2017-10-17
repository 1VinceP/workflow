import {createStore, applyMiddleware} from 'redux';
import mainReducer from './redux/reducers/main-reducer'
import reduxPromiseMiddleware from 'redux-promise-middleware';
export default createStore( mainReducer, applyMiddleware(reduxPromiseMiddleware()))