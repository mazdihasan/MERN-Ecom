import React from 'react'
import {Link} from 'react-router-dom';
export default function Footer() {
    return (
        <>
        <div className="fotter">
            <div className="container">
            <div className="col-md-6 contact">


            </div>
            <div className="col-md-6 ftr-left">
                <div className="ftr-list">
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="about.html">About</Link></li>
                        <li><Link to="blog.html">Blog</Link></li>
                        <li><Link to="products.html">Top Seller</Link></li>
                        <li><Link to="shop.html">New Models</Link></li>
                        <li><Link to="404.html">Combos</Link></li>
                        <li><Link to="products.html">Collection</Link></li>
                        <li><Link to="contact.html">Contact</Link></li>
                    </ul>
                </div>
                <div className="ftr-list2">
                    <ul>				 
                        <li><Link to="#">Combos</Link></li>
                        <li><Link to="#">Trendy</Link></li>
                        <li><Link to="#">Fashion</Link></li>
                        <li><Link to="#">College</Link></li>
                        <li><Link to="#">Party</Link></li>
                        <li><Link to="#">Dress</Link></li>
                        <li><Link to="#">Kurtas & kurtis</Link></li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <h4>FOLLOW US</h4>
                <div className="social-icons">
                <Link to="#"><span className="in"> </span></Link>
                <Link to="#"><span className="you"> </span></Link>
                <Link to="#"><span className="be"> </span></Link>
                <Link to="#"><span className="twt"> </span></Link>
                <Link to="#"><span className="fb"> </span></Link>
                </div>
            </div>	 
            <div className="clearfix"></div>
            </div>
        </div>            
        </>
    )
}
