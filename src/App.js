import { useEffect, useContext, useState, useReducer } from 'react';
import './Book.css';
import { UPDATE_BOOKS_FROM_SERVER, GET_NEWS_FROM_SERVER, CHANGE_ITEMS_PER_PAGE, SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE, SET_ACTIVE_PAGE } from "./constants";
import BooksList from './components/BooksList';
import Types from './contexts/Types';
import API from './shared/booksApi';
import API2 from './shared/vintedApi';

import booksReducer from './reducers/booksReducer';
import BooksTypeSelector from './components/BooksTypeSelector';
import BooksPager from './components/BookPager';



import vintedReducer from './reducers/vintedReducer';
import VintedList from './components/VintedList';
import VintedProductPage from './components/VintedProductPage';
import History from './components/History';


import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom';
import RouterHooks from './components/RouterHooks';




function App() { // <---- pagrindinis komponentas

    // const [books, setBooks] = useState([]);


    const [books, booksDispatch] = useReducer(booksReducer, {showBooks: [], allBooks: [], activePage: 1}); // tai kas yra rodoma
    
    const [types, setTypes] = useState(useContext(Types)); // visu tipu sarasas

    const [typeSelectValue, setTypeSelectValue] = useState(0); // aktyvus filtras pagal tipa

    const [itemsPerPage, setItemsPerPage] = useState(3); // viename puslapyje va tiek knygu

    // const [activePage, setActivePage] = useState(1);

    const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());


    useEffect(() => {
        API.post(``, {time: (Math.round(lastUpdateTime/1000)-10)})
        .then(response => {
            booksDispatch({type:UPDATE_BOOKS_FROM_SERVER, payload: {updatedBooks: response.data, itemsPerPage: itemsPerPage}});
            console.log(response.data)
            
        })
        .catch(error => {})
        console.log(lastUpdateTime)
    }, [lastUpdateTime]);


    useEffect(() => {
        const lastUpdateTimerId = setInterval(
            () => setLastUpdateTime(Date.now()),
            10000
        );
        return function cleanTimer() {
            clearInterval(lastUpdateTimerId)
        }
    }, []);


    // const [vinted, vintedDispatch] = useReducer(vintedReducer, {news: [], products: []});

    // useEffect(()=> {
    //     API2.get(`news/`)
    //     .then(response => {
    //         console.log(response.data)
    //         vintedDispatch({type:GET_NEWS_FROM_SERVER, payload: response.data});
    //     })
    //     .catch(error => {})

    // }, []);





    
    
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
        <Router>
        <Types.Provider value={types}>
            <header className="App-header">

                <Link to="/">
                <span>Home</span>
                </Link>

                <Link to="/books">
                <span>Books Store</span>
                </Link>
                <Link to="/show-vinted">
                <i>Show Vinted</i>
                </Link>
                <div className="buttons-holder">
                    <BooksTypeSelector handleTypeSelect={handleTypeSelect} typeSelectValue={typeSelectValue}></BooksTypeSelector>
                    <button className="filter">Apply filter</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_UP, payload: {itemsPerPage: itemsPerPage}})}>Sort by price UP</button>
                    <button className="sort" onClick={()=>booksDispatch({type:SORT_PRICE_DOWN, payload: {itemsPerPage: itemsPerPage}})}>Sort by price DOWN</button>
                
                </div>

            

            </header>

            <RouterHooks></RouterHooks>

            <Switch>

                <Route path="/books">
                    <main>
                        <BooksList books={books.showBooks}></BooksList>
                        <BooksPager activePage={books.activePage} handlePageSelect={handlePageSelect} itemsPerPage={itemsPerPage} allItemsCount={books.allBooks.length}></BooksPager>
                    </main>
                </Route>

       
                <Route path="/show-vinted">
                    {/* <main>
                        <VintedList vinted={vinted} vintedDispatch={vintedDispatch}></VintedList>
                    </main> */}
                </Route>

                <Route path="/show-product/:id">
                    {/* <main>
                        <VintedProductPage vinted={vinted}></VintedProductPage>
                    </main> */}
                </Route>

                <Route exact path="/">
                    Home sweet home
                </Route>

                <Route path="*">
                    404 PAGE NOT FOUND
                </Route>

            </Switch>

        <footer>

        </footer>
        </Types.Provider>
        </Router>
        </div>
    );
}

export default App;