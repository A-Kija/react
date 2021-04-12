import { MAKE_BLACK, MAKE_BROWN, CHANGE_MAKER, SAVE_MAKER, INIT_CARS, ROLL_BACK } from "../constants";

const carReducer = (state, action) => {

    switch (action.type) {
        case MAKE_BLACK:
            return {
                history: 'new',
                data: state.data.map(car => {
                    if (car.id === action.payload.id) {
                        return {...car, color: 'black' };
                    } else {
                        return car;
                    }
                })
            }
        case MAKE_BROWN:
            return {
                history: 'new',
                data: state.data.map(car => {
                    if (car.id === action.payload.id) {
                        return {...car, color: 'brown' };
                    } else {
                        return car;
                    }
                })
            }
        case CHANGE_MAKER:
            return {
                history: 'new',
                data: state.data.map(car => {
                    if (car.id === action.payload.id) {
                        return {...car, newMaker: action.payload.maker };
                    } else {
                        return car;
                    }
                })
            }
        case SAVE_MAKER:
            return {
                history: 'new',
                data: state.data.map(car => {
                    if (car.id === action.payload.id) {
                        return {...car, maker: car.newMaker };
                    } else {
                        return car;
                    }
                })
            }

        case INIT_CARS:
            return {
                ...state,
                data: state.data.map(car => {
                    return {...car, newMaker: action.payload.newMakerInit };
                })
            }

        case ROLL_BACK:
            return {...JSON.parse(localStorage.getItem('history'))[0], history: 'old' }
            // return JSON.parse(localStorage.getItem('history'))[0];
        default:
            return state;
    }
}






export default carReducer;