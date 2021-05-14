import { ADD_SHIP, ADD_TRAIN } from "../constants";

const initState = { trains: [], ships: [{ type: 'steam boat', long: '54' }] };

const basicReducer = (state = initState, action) => {

    if (action.type === ADD_SHIP) {

        return Object.assign({},
            state, { ships: state.ships.concat(action.payload) }
        );

        // return {
        //     ships: state.ships.concat(action.payload),
        //     trains: state.trains
        // }


    } else if (action.type === ADD_TRAIN) {
        return Object.assign({},
            state, { trains: state.trains.concat(action.payload) }
        );

    }


    return state;
}

export default basicReducer;