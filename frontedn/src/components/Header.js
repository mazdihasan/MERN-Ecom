import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                <div className="main-header">
                    <div className="carting">
                        <ul><li><Link to="login.html"> LOGIN</Link></li></ul>
                        </div>
                    <div className="logo">
                        <h3><Link to="index.html">NEW FASHIONS</Link></h3>
                    </div>			  
                    <div className="box_1">				 
                        <Link to="cart.html"><h3>Cart: <span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)<img src="images/cart.png" alt=""/></h3></Link>
                        <p><Link to="" className="simpleCart_empty">empty cart</Link></p>
                    
                    </div>
                    
                    <div className="clearfix"></div>
                </div>
                    
                    {/*-- start header menu -- */}
            <ul className="megamenu skyblue">
                <li className="active grid"><Link className="color1" to="index.html">Home</Link></li>
                <li className="grid"><Link to="#">Women</Link>
                    <div className="megapanel">
                        <div className="row">
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>shop</h4>
                                    <ul>
                                        <li><Link to="products.html">new arrivals</Link></li>
                                        <li><Link to="products.html">men</Link></li>
                                        <li><Link to="products.html">women</Link></li>
                                        <li><Link to="products.html">accessories</Link></li>
                                        <li><Link to="products.html">kids</Link></li>
                                        <li><Link to="products.html">brands</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>help</h4>
                                    <ul>
                                        <li><Link to="products.html">trends</Link></li>
                                        <li><Link to="products.html">sale</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                        <li><Link to="products.html">accessories</Link></li>
                                        <li><Link to="products.html">kids</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>Products</h4>
                                    <ul>
                                        <li><Link to="products.html">trends</Link></li>
                                        <li><Link to="products.html">sale</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                        <li><Link to="products.html">accessories</Link></li>
                                        <li><Link to="products.html">kids</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                    </ul>	
                                </div>												
                            </div>						
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>my company</h4>
                                    <ul>
                                        <li><Link to="products.html">tremds</Link></li>
                                        <li><Link to="products.html">sale</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                        <li><Link to="products.html">accessories</Link></li>
                                        <li><Link to="products.html">kids</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>popular</h4>
                                    <ul>
                                        <li><Link to="products.html">new arrivals</Link></li>
                                        <li><Link to="products.html">men</Link></li>
                                        <li><Link to="products.html">women</Link></li>
                                        <li><Link to="products.html">accessories</Link></li>
                                        <li><Link to="products.html">kids</Link></li>
                                        <li><Link to="products.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col2"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                        </div>
                        </div>
                    </li>
                    <li><Link to="#">MEN</Link><div className="megapanel">
                        <div className="row">
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>shop</h4>
                                    <ul>
                                        <li><Link to="men.html">new arrivals</Link></li>
                                        <li><Link to="men.html">men</Link></li>
                                        <li><Link to="men.html">women</Link></li>
                                        <li><Link to="men.html">accessories</Link></li>
                                        <li><Link to="men.html">kids</Link></li>
                                        <li><Link to="men.html">brands</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>help</h4>
                                    <ul>
                                        <li><Link to="men.html">trends</Link></li>
                                        <li><Link to="men.html">sale</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                        <li><Link to="men.html">accessories</Link></li>
                                        <li><Link to="men.html">kids</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>Products</h4>
                                    <ul>
                                        <li><Link to="men.html">trends</Link></li>
                                        <li><Link to="men.html">sale</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                        <li><Link to="men.html">accessories</Link></li>
                                        <li><Link to="men.html">kids</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                    </ul>	
                                </div>												
                            </div>						
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>my company</h4>
                                    <ul>
                                        <li><Link to="men.html">trends</Link></li>
                                        <li><Link to="men.html">sale</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                        <li><Link to="men.html">accessories</Link></li>
                                        <li><Link to="men.html">kids</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>popular</h4>
                                    <ul>
                                        <li><Link to="men.html">new arrivals</Link></li>
                                        <li><Link to="men.html">men</Link></li>
                                        <li><Link to="men.html">women</Link></li>
                                        <li><Link to="men.html">accessories</Link></li>
                                        <li><Link to="men.html">kids</Link></li>
                                        <li><Link to="men.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col2"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                        </div>
                        </div>
                    </li>
                <li className="grid"><Link to="about.html">ABOUT US</Link></li>
                    <li className="grid"><Link to="blog.html">BLOG</Link></li>				
                    <li><Link to="#">SHOP ONLINE</Link>
                    <div className="megapanel">
                        <div className="row">
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>shop</h4>
                                    <ul>
                                        <li><Link to="shop.html">new arrivals</Link></li>
                                        <li><Link to="shop.html">men</Link></li>
                                        <li><Link to="shop.html">women</Link></li>
                                        <li><Link to="shop.html">accessories</Link></li>
                                        <li><Link to="shop.html">kids</Link></li>
                                        <li><Link to="shop.html">brands</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>help</h4>
                                    <ul>
                                        <li><Link to="shop.html">trends</Link></li>
                                        <li><Link to="shop.html">sale</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                        <li><Link to="shop.html">accessories</Link></li>
                                        <li><Link to="shop.html">kids</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                    </ul>	
                                </div>							
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>Products</h4>
                                    <ul>
                                        <li><Link to="shop.html">trends</Link></li>
                                        <li><Link to="shop.html">sale</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                        <li><Link to="shop.html">accessories</Link></li>
                                        <li><Link to="shop.html">kids</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                    </ul>	
                                </div>												
                            </div>						
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>my company</h4>
                                    <ul>
                                        <li><Link to="shop.html">trends</Link></li>
                                        <li><Link to="shop.html">sale</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                        <li><Link to="shop.html">accessories</Link></li>
                                        <li><Link to="shop.html">kids</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                            <div className="col1">
                                <div className="h_nav">
                                    <h4>popular</h4>
                                    <ul>
                                        <li><Link to="shop.html">new arrivals</Link></li>
                                        <li><Link to="shop.html">men</Link></li>
                                        <li><Link to="shop.html">women</Link></li>
                                        <li><Link to="shop.html">accessories</Link></li>
                                        <li><Link to="shop.html">kids</Link></li>
                                        <li><Link to="shop.html">style videos</Link></li>
                                    </ul>	
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col2"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                            <div className="col1"></div>
                        </div>
                        </div>
                    </li>			
                    
                    </ul> 			 
                    <div className="clearfix"></div>			   	
            </div>
                <div className="caption">
                <h1>FASHION AND CREATIVITY</h1>	 
                <p>Sed dapibus est a lorem dictum, id dignissim lacus fermentum. Nulla ut nibh in libero maximus pretium
                Nunc vulputate vel tellus ac elementum. Duis nec tincidunt dolor, ac dictum eros.</p>
                </div>
            </div>            
        </>
    )
}
