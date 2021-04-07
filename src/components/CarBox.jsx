// import {INCREASE, DECREASE} from '../constants';
    // (count, actionPlus1) => newCount

    // const counterReducer = (count, actionPlus1) => {
    //     return count + 1; // NIEKO NEMODIFIKUOJA, bet grazina modifikuota kopija
    // }

    // const counterReducer = (count, action) => {
    //     if (action.type === 'INC') {
    //         return count + 1;
    //     }
    //     if (action.type === 'DEC') {
    //         return count - 1;
    //     }
    //     return count; // <------- turi kazka grazinti, kas patampa nauju state
    // }

    // const action = {type: INCREASE, payload: 5}

    // const counterReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'INCREASE': return {...state, count: state.count + 1};
    //         case 'DECREASE': return {...state, count: state.count - 1};
    //         default: return state;
    //     }
    // }

    // const state = {count: 0};

    // const counterReducer = (state, action) => {
    //     switch (action.type) {
    //         case INCREASE: return {...state, count: state.count + action.payload};
    //         case DECREASE: return {...state, count: state.count - action.payload};
    //         default: return state;
    //     }
    // }

import initCars from '../shared/cars';
import { useReducer } from 'react';
import carReducer from '../reducers/carReducer';
import {MAKE_BLACK, MAKE_BROWN} from '../constants';

const CarBox = () => {


const [cars, dispatch] = useReducer(carReducer, initCars);


    return (
        <ul className="car-ul">
            {cars.map(car => (
                <li className="car-li" key={car.id} style={{background:car.color}}>
                    <h2>{car.maker}</h2>
                    <div className="buttons">
                        <button onClick={()=>dispatch({type:MAKE_BLACK, payload:{id:car.id}})}>Make Black</button>
                        <button onClick={()=>dispatch({type:MAKE_BROWN, payload:{id:car.id}})}>Make Brown</button>
                    </div>
                </li>
            ))
            }
        </ul>
    );
  }

export default CarBox;