import { useEffect, useContext, useState } from 'react';
import './Book.css';
import BooksList from './components/BooksList';
import Types from './contexts/Types';
import API from './shared/booksApi';




function App() { // <---- pagrindinis komponentas

    const [books, setBooks] = useState([]);
    const [types, setTypes] = useState([]);
    // const types = useContext(Types);

    useEffect(()=> {
        console.log('START');
        API.get(``)
        .then(response => {
            console.log(response.data)
            setBooks(response.data);

        })
        .catch(error => {})


    }, []);


    useEffect(()=> {
        API.get(`/types/`)
        .then(response => {
            console.log(response.data)
            setTypes(response.data);

        })
        .catch(error => {})


    }, []);



    return (
        <div className="App">
        <header className="App-header">
            <span>Books Store</span>
        </header>
        {/* <Types.Provider value={types}> */}
        <main>
            <BooksList types={types} books={books}></BooksList>
        </main>
        {/* </Types.Provider> */}
        <footer>

        </footer>
        </div>
    );
}

export default App;