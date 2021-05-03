// import { v4 as uuidv4 } from 'uuid';
import VintedProduct from './VintedProduct';

const VintedList = ({vinted, vintedDispatch}) => {

    return (
        <ul className="books-list">
            {
                vinted.news.map((product) => <VintedProduct key={product.id} productId={product.id} vinted={vinted} vintedDispatch={vintedDispatch}></VintedProduct>)
            }
        </ul>
    );


}

export default VintedList;