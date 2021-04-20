import { useContext } from "react";
import Types from "../contexts/Types";

const Book = ({book, types}) => {
    // const types = useContext(Types);

    console.log('types', types.filter(t => t.id === book.type));
    let type = 'LOADING';

    const getType = types.filter(t => t.id === book.type);
    if (getType.length) {
        type = getType[0].title;
    }

    return (
        <li>
            <div className="content">
                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
                <div className="img"><img src={book.img} /></div>
                <div className="price">{book.price} EUR</div>
                <div className="cat">{type}</div>
            </div>

        </li>
    )
}

export default Book;