import React from 'react'

function ProductCard() {
    return (
        <div className="product-grid">
            <a href="single.html">					  
            <div className="more-product-info"><span>NEW</span></div>						
            <div className="product-img b-link-stripe b-animate-go  thickbox">						   
                <img src="images/bs1.jpg" className="img-responsive" alt=""/>
                <div className="b-wrapper">
                <h4 className="b-animate b-from-left  b-delay03">							
                <button className="btns">ORDER NOW</button>
                </h4>
                </div>
            </div>
            </a>						
            <div className="product-info simpleCart_shelfItem">
                <div className="product-info-cust">
                    <h4>BELLE B&amp;W</h4>
                    <span className="item_price">$187.95</span>
                    <input type="text" className="item_quantity" value="1"/>
                    <input type="button" className="item_add" value="ADD"/>
                </div>													
                <div className="clearfix"> </div>
            </div>
        </div>
    )
}

export default ProductCard
