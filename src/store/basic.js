import { createStore, combineReducers, applyMiddleware } from 'redux';
// import basicReducer from '../reducers/basicReducer';

import trainsReducer from '../reducers/trainsReducer';
import shipsReducer from '../reducers/shipsReducer';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import trainMiddleware from '../middlewares/trainMiddleware';


const basicReducer = combineReducers({
    trainsReducer,
    shipsReducer
})



const basic = createStore(
    basicReducer,
    applyMiddleware(
        loggerMiddleware,
        trainMiddleware


    )
);




export default basic;