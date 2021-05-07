import API2 from '../shared/vintedApi';
import {ADD_PRODUCT_FROM_SERVER} from '../constants';
import {useEffect} from 'react';
import Loading from './Loading';
import {Link, useHistory} from 'react-router-dom';


const VintedProduct = ({productId, vintedDispatch, vinted}) => {


    useEffect(()=> {
        API2.get(`products/` + productId)
        .then(response => {
            vintedDispatch({type:ADD_PRODUCT_FROM_SERVER, payload: response.data});
        })
        .catch(error => {})

    }, [productId]);


    if (vinted.products.filter(p => p.id === productId).length) {
        const product = vinted.products.filter(p => p.id === productId)[0]
        return (
            <li>
                <Link to={`show-product/${productId}`}>
                <div className="content">
                    <div className="title">{product.title}</div>
                    {/* <div className="author">{book.author}</div> */}
                    <div className="img"><img src={product.img[product.main_img]} alt={product.title}/></div>
                    {/* <div className="price">{book.price} EUR</div> */}
                </div>
                </Link>
            </li>
        )
    }
    else {
    return (
        <li>
            <div className="content">
            <Loading/>
            </div>
        </li>
    )
    }
}

export default VintedProduct;