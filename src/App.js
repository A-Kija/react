import { useEffect, useContext, useState } from 'react';
import './Book.css';
import BooksList from './components/BooksList';
import Types from './contexts/Types';
import API from './shared/booksApi';




function App() { // <---- pagrindinis komponentas

    const [books, setBooks] = useState([]);
    const [types, setTypes] = useState(useContext(Types));

    // books list
    useEffect(()=> {
        API.get(``)
        .then(response => {
            console.log(response.data)
            setBooks(response.data);
        })
        .catch(error => {})
    }, []);

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



    return (
        <div className="App">
        <header className="App-header">
            <span>Books Store</span>
        </header>
        <Types.Provider value={types}>
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