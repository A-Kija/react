import { ADD_TRAIN } from "../constants";
import { selectRedTrains } from '../selects';

const trainMiddleware = store => next => action => {

    if (action.type == ADD_TRAIN) {

        console.log('store', selectRedTrains(store));

        action.payload = { type: "Electro train", long: "355" }
    }

    return next(action);
}

export default trainMiddleware;