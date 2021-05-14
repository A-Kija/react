export const selectShips = state => state.ships;

export const selectTrains = state => state.trains;

export const selectRedTrains = store => store.getState().trainsReducer.trains;