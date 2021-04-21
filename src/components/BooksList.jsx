import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BooksList = ({books}) => {


    return (
        <ul className="books-list">
            {
                books.map((book) => <Book key={uuidv4()} book={book}></Book>)
            }
        </ul>
    );


}

export default BooksList;