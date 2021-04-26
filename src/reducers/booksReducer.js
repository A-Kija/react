import { SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE } from "../constants";
const booksReducer = (state, action) => {

    switch (action.type) {
        case SORT_PRICE_UP:
            return [].concat(state).sort((a, b) => a.price > b.price ? 1 : -1);
        case SORT_PRICE_DOWN:
            return [].concat(state).sort((a, b) => a.price < b.price ? 1 : -1);
        case GET_BOOKS_FROM_SERVER:
            return action.payload;
        case FILTER_BOOKS_BY_TYPE:
            if (0 === action.payload.value) return action.payload.allBooks;
            return action.payload.allBooks.filter(b => b.type === action.payload.value)
        default:
            return state;
    }
}

export default booksReducer;