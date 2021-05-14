import { ADD_SHIP } from "../constants";

const initState = { ships: [{ type: 'steam boat', long: '54' }] };

const shipsReducer = (state = initState, action) => {

    if (action.type === ADD_SHIP) {
        return Object.assign({},
            state, { ships: state.ships.concat(action.payload) }
        );
    }

    return state;
}


export default shipsReducer;