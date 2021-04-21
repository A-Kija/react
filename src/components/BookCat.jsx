import { useContext } from "react";
import Types from "../contexts/Types";
import Loading from "./Loading";
const BookCat = ({type}) => {

    const types = useContext(Types);

    // console.log('types', types.filter(t => t.id === type));
    // let cat = 'LOADING';

    const getType = types.filter(t => t.id === type);
    // if (getType.length) {
    //     cat = getType[0].title;
    // }

    if (getType.length) {
        return (
            <div className="cat">{getType[0].title}</div>
        );
    }
    return (
        <Loading/>
    );

    

}


export default BookCat;