import { createStore } from 'redux';
import basicReducer from '../reducers/basicReducer';


const basic = createStore(
    basicReducer
);




export default basic;