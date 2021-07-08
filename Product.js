import React from 'react'
import './Product.css'

function Product({ id,title,rating,price,image,price_sale}){
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
               
            </div>
            <img src={image} alt=""/>
                <p className="product__price_sale">
                <strong>{price_sale}</strong>
                </p>
                <p className="product__price">
            <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating) 
                        .fill()
                        .map((_) => (<p>*</p>))
                    }
                </div>
            <button> Giỏ Hàng</button>
        </div>
    )
}

export default Product