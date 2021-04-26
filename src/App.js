import { useEffect, useContext, useState, useReducer } from 'react';
import './Book.css';
import { SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE } from "./constants";
import BooksList from './components/BooksList';
import Types from './contexts/Types';
import API from './shared/booksApi';

import booksReducer from './reducers/booksReducer';
import BooksTypeSelector from './components/BooksTypeSelector';




function App() { // <---- pagrindinis komponentas

    // const [books, setBooks] = useState([]);


    const [books, booksDispatch] = useReducer(booksReducer, []); // tai kas yra rodoma
    


    const [types, setTypes] = useState(useContext(Types)); // visu tipu sarasas

    const [typeSelectValue, setTypeSelectValue] = useState(0); // aktyvus filtras pagal tipa

    const [allBooks, setAllBooks] = useState([]); // visu knygu sarasas


    // books list
    useEffect(()=> {
        API.get(``)
        .then(response => {
            console.log(response.data)
            setAllBooks(response.data);
        })
        .catch(error => {})
    }, []);

    useEffect(()=> {
        booksDispatch({type:GET_BOOKS_FROM_SERVER, payload: allBooks});
    }, [allBooks]);



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
        booksDispatch({type:FILTER_BOOKS_BY_TYPE, payload:{value:parseInt(e.target.value), allBooks:allBooks}})
    }


    return (
        <div className="App">
        <Types.Provider value={types}>
            <header className="App-header">
                <span>Books Store</span>
                <div className="buttons-holder">
                    <BooksTypeSelector handleTypeSelect={handleTypeSelect} typeSelectValue={typeSelectValue}></BooksTypeSelector>
                    <button className="filter">Apply filter</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_UP})}>Sort by price UP</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_DOWN})}>Sort by price DOWN</button>
                </div>
            </header>
        
            <main>
                <BooksList books={books}></BooksList>
            </main>
        </Types.Provider>
        <footer>

        </footer>
        </div>
    );
}

export default App;