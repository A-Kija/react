import {INCREASE, DECREASE} from '../constants';
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

    const action = {type: INCREASE, payload: 5}

    // const counterReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'INCREASE': return {...state, count: state.count + 1};
    //         case 'DECREASE': return {...state, count: state.count - 1};
    //         default: return state;
    //     }
    // }

    const state = {count: 0};

    const counterReducer = (state, action) => {
        switch (action.type) {
            case INCREASE: return {...state, count: state.count + action.payload};
            case DECREASE: return {...state, count: state.count - action.payload};
            default: return state;
        }
    }



const CarBox = ({boxStyle}) => {
    return (
      <span style={boxStyle}>
        111
      </span>
    );
  }

export default CarBox;