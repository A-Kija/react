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
import { useContext, useEffect, useReducer, useRef } from 'react';
import carReducer from '../reducers/carReducer';
import {MAKE_BLACK, MAKE_BROWN, CHANGE_MAKER, SAVE_MAKER, INIT_CARS, ROLL_BACK} from '../constants';
import ButtonCollor from '../contexts/ButtonColor';

const CarBox = () => {

const alreadyMounted = useRef(false);
const [cars, dispatch] = useReducer(carReducer, initCars);



const bttColor = useContext(ButtonCollor);



useEffect(()=>{
    dispatch({type:INIT_CARS, payload:{newMakerInit: 'Please enter'}})

    window.addEventListener('storage', () => {
        console.log('STORAGE EVENT',JSON.parse(window.localStorage.getItem('history')));
    });

    localStorage.setItem('count', 0);


    localStorage.setItem('history', JSON.stringify([]));
    // localStorage.setItem('person', 'Peter');
    // localStorage.removeItem('animal');

    // localStorage.animal = 'makaka';

    // delete localStorage.animal;

    // for (let key in localStorage) { // negerai taip gaunasi
    //     console.log(key);
    // }

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            console.log(key)
        }
    }


}, []);


useEffect(()=> {
    if (alreadyMounted.current) {// antras ir toliau
        let history = JSON.parse(localStorage.history);
        if (cars.history === 'new') {
            history.unshift(cars);
        }
        else if (cars.history === 'old') {
            history.shift();
        }
        
        localStorage.setItem('history', JSON.stringify(history));
    }
    else {// pirmas kartas
        alreadyMounted.current = true;
    }
}, [cars]);


    return (
        <>
        <ul className="car-ul">
            <li className="car-li" key={0} style={{background:'gray'}}>
            <div>History:</div>
            <div><button onClick={()=>dispatch({type:ROLL_BACK})}>Go Back</button></div>
            </li>
            {cars.data.map(car => (
                <li className="car-li" key={car.id} style={{background:car.color}}>
                    <h2>{car.maker}</h2>
                    <div className="buttons">
                        <button onClick={()=>dispatch({type:MAKE_BLACK, payload:{id:car.id}})}>Make Black</button>
                        <button onClick={()=>dispatch({type:MAKE_BROWN, payload:{id:car.id}})}>Make Brown</button>
                    </div>
                    <div className="buttons">
                        <input type="text" onChange={(e)=>dispatch({ type:CHANGE_MAKER, payload:{id:car.id, maker:e.target.value} })} value={car.newMaker || ''}/>
                        {/* <ButtonCollor.Consumer>
                        { value => (
                            <button style={{backgroundColor:value}} onClick={()=>dispatch({type:SAVE_MAKER, payload:{id:car.id}})}>Set Maker</button>
                        )}
                        </ButtonCollor.Consumer> */}

                        <button style={{backgroundColor:bttColor}} onClick={()=>dispatch({type:SAVE_MAKER, payload:{id:car.id}})}>Set Maker</button>

                    </div>
                </li>
            ))
            }
        </ul>
        </>
    );
  }

export default CarBox;