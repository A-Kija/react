import { useEffect, useContext, useState, useReducer } from 'react';
import './Book.css';
import { CHANGE_ITEMS_PER_PAGE, SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE, SET_ACTIVE_PAGE } from "./constants";
import BooksList from './components/BooksList';
import Types from './contexts/Types';
import API from './shared/booksApi';

import booksReducer from './reducers/booksReducer';
import BooksTypeSelector from './components/BooksTypeSelector';
import BooksPager from './components/BookPager';




function App() { // <---- pagrindinis komponentas

    // const [books, setBooks] = useState([]);


    const [books, booksDispatch] = useReducer(booksReducer, {showBooks: [], allBooks: [], activePage: 1}); // tai kas yra rodoma
    
    const [types, setTypes] = useState(useContext(Types)); // visu tipu sarasas

    const [typeSelectValue, setTypeSelectValue] = useState(0); // aktyvus filtras pagal tipa

    const [itemsPerPage, setItemsPerPage] = useState(1); // viename puslapyje va tiek knygu

    // const [activePage, setActivePage] = useState(1);


    useEffect(()=> {
        API.get(``)
        .then(response => {
            console.log(response.data)
            booksDispatch({type:GET_BOOKS_FROM_SERVER, payload: {allBooks: response.data, itemsPerPage: itemsPerPage}});
        })
        .catch(error => {})

    }, [itemsPerPage]);



    // types list
    useEffect(()=> {
        const bookTypes = JSON.parse(localStorage.getItem('bookTypes'));

        console.log('bookTypes', bookTypes);
        if (!bookTypes) {
            API.get(`/types/`)
            .then(response => {
                setTypes(response.data);
                localStorage.setItem('bookTypes', JSON.stringify(response.data))
            })
            .catch(error => {})
        }
    }, []);

    const handleTypeSelect = e => {
        setTypeSelectValue(parseInt(e.target.value));
        booksDispatch({type:FILTER_BOOKS_BY_TYPE, payload:{value:parseInt(e.target.value)}})
    }

    
    const handlePageSelect = activePage => {
        console.log(activePage)
        booksDispatch({type:SET_ACTIVE_PAGE, payload:{activePage: activePage, itemsPerPage: itemsPerPage}})
    }


    useEffect(()=> {
        booksDispatch({type:CHANGE_ITEMS_PER_PAGE, payload: {itemsPerPage: itemsPerPage}});
    }, [itemsPerPage]);





    return (
        <div className="App">
        <Types.Provider value={types}>
            <header className="App-header">
                <span>Books Store</span>
                <div className="buttons-holder">
                    <BooksTypeSelector handleTypeSelect={handleTypeSelect} typeSelectValue={typeSelectValue}></BooksTypeSelector>
                    <button className="filter">Apply filter</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_UP, payload: {itemsPerPage: itemsPerPage}})}>Sort by price UP</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_DOWN, payload: {itemsPerPage: itemsPerPage}})}>Sort by price DOWN</button>
                </div>
            </header>
        
            <main>
                <BooksList books={books.showBooks}></BooksList>
                <BooksPager activePage={books.activePage} handlePageSelect={handlePageSelect} itemsPerPage={itemsPerPage} allItemsCount={books.allBooks.length}></BooksPager>
            </main>
        </Types.Provider>
        <footer>

        </footer>
        </div>
    );
}

export default App;