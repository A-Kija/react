import { UPDATE_BOOKS_FROM_SERVER, SET_ACTIVE_PAGE, SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE, CHANGE_ITEMS_PER_PAGE } from "../constants";
const booksReducer = (state, action) => {
    let sorted;
    switch (action.type) {
        case SORT_PRICE_UP:

            sorted = state.allBooks.sort((a, b) => a.price > b.price ? 1 : -1);
            return {
                showBooks: [].concat(sorted).slice(
                    (state.activePage - 1) * action.payload.itemsPerPage,
                    state.activePage * action.payload.itemsPerPage
                ),
                allBooks: sorted,
                activePage: state.activePage
            }

        case SORT_PRICE_DOWN:
            sorted = state.allBooks.sort((a, b) => a.price < b.price ? 1 : -1);
            return {
                showBooks: [].concat(sorted).slice(
                    (state.activePage - 1) * action.payload.itemsPerPage,
                    state.activePage * action.payload.itemsPerPage
                ),
                allBooks: sorted,
                activePage: state.activePage
            }

        case GET_BOOKS_FROM_SERVER:
            return {
                showBooks: action.payload.allBooks.slice(0, action.payload.itemsPerPage),
                allBooks: action.payload.allBooks,
                activePage: 1
            };


        case UPDATE_BOOKS_FROM_SERVER:

            const updated = state.allBooks.concat(action.payload.updatedBooks);





            console.log(updated);

            return state;





            // case FILTER_BOOKS_BY_TYPE:
            //     if (0 === action.payload.value) return action.payload.allBooks;
            //     return action.payload.allBooks.filter(b => b.type === action.payload.value)

        case CHANGE_ITEMS_PER_PAGE: // tik tada kai keiciasi items per page reiksme
            return {
                showBooks: [].concat(state.allBooks).slice(
                    0,
                    action.payload.itemsPerPage
                ),
                allBooks: state.allBooks,
                activePage: 1
            }

        case SET_ACTIVE_PAGE:
            return {
                showBooks: [].concat(state.allBooks).slice(
                    (action.payload.activePage - 1) * action.payload.itemsPerPage,
                    action.payload.activePage * action.payload.itemsPerPage
                ),
                allBooks: state.allBooks,
                activePage: action.payload.activePage
            }





        default:
            return state;
    }
}

export default booksReducer;