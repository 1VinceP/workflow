import {createStore, applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'

export default createStore( /**REDUCERS**/, applymiddleware(reduxPromiseMiddleware))