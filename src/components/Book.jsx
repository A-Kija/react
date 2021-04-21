import BookCat from "./BookCat";

const Book = ({book}) => {


    return (
        <li>
            <div className="content">
                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
                <div className="img"><img src={book.img} alt={book.title}/></div>
                <div className="price">{book.price} EUR</div>
                <BookCat type={book.type}></BookCat>
            </div>

        </li>
    )
}

export default Book;