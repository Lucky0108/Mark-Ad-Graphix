import React from 'react'
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
                        <img src={props.img} alt={props.name} />
                </div>
                <div className="product-card-content">
                        {props.name}
                </div>
            </div>
        </>
    )
}


export default ProductCard