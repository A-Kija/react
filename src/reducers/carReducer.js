import { MAKE_BLACK, MAKE_BROWN, CHANGE_MAKER, SAVE_MAKER, INIT_CARS } from "../constants";

const carReducer = (state, action) => {



    let history = JSON.parse(localStorage.history);

    console.log('before', history)
    history.unshift(state);

    console.log('after', history)

    localStorage.setItem('history', JSON.stringify(history));


    switch (action.type) {
        case MAKE_BLACK:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, color: 'black' };
                } else {
                    return car;
                }
            });
        case MAKE_BROWN:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, color: 'brown' };
                } else {
                    return car;
                }
            });
        case CHANGE_MAKER:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, newMaker: action.payload.maker };
                } else {
                    return car;
                }
            });
        case SAVE_MAKER:
            return state.map(car => {
                if (car.id === action.payload.id) {
                    return {...car, maker: car.newMaker };
                } else {
                    return car;
                }
            });
        case INIT_CARS:
            return state.map(car => {
                return {...car, newMaker: action.payload.newMakerInit };
            });
        default:
            return state;
    }
}






export default carReducer;