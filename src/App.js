// import { useEffect, useContext, useState, useReducer } from 'react';

// import { UPDATE_BOOKS_FROM_SERVER, GET_NEWS_FROM_SERVER, CHANGE_ITEMS_PER_PAGE, SORT_PRICE_UP, SORT_PRICE_DOWN, GET_BOOKS_FROM_SERVER, FILTER_BOOKS_BY_TYPE, SET_ACTIVE_PAGE } from "./constants";
// import BooksList from './components/BooksList';
// import Types from './contexts/Types';
// import API from './shared/booksApi';
// import API2 from './shared/vintedApi';

// import booksReducer from './reducers/booksReducer';
// import BooksTypeSelector from './components/BooksTypeSelector';
// import BooksPager from './components/BookPager';



// import vintedReducer from './reducers/vintedReducer';
// import VintedList from './components/VintedList';
// import VintedProductPage from './components/VintedProductPage';
// import History from './components/History';


// import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom';
// import RouterHooks from './components/RouterHooks';

import basic from './store/basic';
import {addShip, addTrain} from './actions';


import './Book.css';
import BasicShip from './components/BasicShip';


function App() { // <---- pagrindinis komponentas

    const doAddShip = () => {
        console.log("AAA")
        basic.dispatch(addShip({ type: 'disel boat', long: '154' }));
    }

    return (
        <div className="App">

            <header className="App-header">
           
            SHIPS and TRAINS

            </header>


            <main>
                <BasicShip/>

                <button onClick={()=>doAddShip()}>ADD DER SHIP</button>
            </main>
                

            <footer>

            </footer>

        </div>
    );
}

export default App;