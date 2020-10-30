import React from 'react'
import {Link} from 'react-router-dom';
function ProductCard({product}) {
    return (
        <div className="product-grid">
            <Link to="single.html">					  
            <div className="more-product-info"><span>NEW</span></div>						
            <div className="product-img b-link-stripe b-animate-go  thickbox">						   
                <img src={product.image} className="img-responsive" alt=""/>
                <div className="b-wrapper">
                <h4 className="b-animate b-from-left  b-delay03">							
                <button className="btns">ORDER NOW</button>
                </h4>
                </div>
            </div>
            </Link>						
            <div className="product-info simpleCart_shelfItem">
                <div className="product-info-cust">
                    <h4>{product.name}</h4>
                    <span className="item_price">${product.price}</span>
                    <input type="button" className="item_add" value="ADD"/>
                </div>													
                <div className="clearfix"> </div>
            </div>
        </div>
    )
}

export default ProductCard
