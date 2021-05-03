import { ADD_PRODUCT_FROM_SERVER, GET_NEWS_FROM_SERVER, SET_ACTIVE_PAGE, SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE, CHANGE_ITEMS_PER_PAGE } from "../constants";
const vintedReducer = (state, action) => {


    switch (action.type) {

        case GET_NEWS_FROM_SERVER:
            return {
                news: action.payload,
                products: state.products
            };

        case ADD_PRODUCT_FROM_SERVER:
            const products = [].concat(state.products);
            products.push(action.payload)
            return {
                news: state.news,
                products: products
            };

        default:
            return state;
    }
}

export default vintedReducer;