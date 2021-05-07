import {useParams} from 'react-router-dom';

const VintedProductPage = ({vinted}) => {


    const {id} = useParams();

    const product = vinted.products.find(p => p.id === parseInt(id));

    

    return (
        <div className="full-product">
            <h2>{product.title}</h2>
            {
                product.img.map(src => <img key={src} src={src}/>)
            }
            <div className="product-desc">
                {product.desc}
            </div>
        </div>
    );


}

export default VintedProductPage;