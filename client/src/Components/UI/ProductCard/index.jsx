import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'

/**
* @author
* @function ProductCard
**/

const ProductCard = (props) => {
    return (
        <>
            <div className="product-card">
                <div className="product-card-image">
                    <Link to="/">
                        <img src={props.img} alt={props.name} />
                        <div className="product-btn">
                            View Product
                        </div>
                    </Link>
                </div>
                <div className="product-card-content">
                    <Link to="/">
                        {props.name}
                    </Link>
                </div>
            </div>
        </>
    )
}


export default ProductCard