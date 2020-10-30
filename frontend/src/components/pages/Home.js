import React from 'react'
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard';
import data from '../../data';
import Header from '../Header';
export default function Home() {
    const products = data.products;
    return (
        <>
            <Header cl="header">
				<div className="caption">
				<h1>FASHION AND CREATIVITY</h1>	 
				<p>Sed dapibus est a lorem dictum, id dignissim lacus fermentum. Nulla ut nibh in libero maximus pretium
				Nunc vulputate vel tellus ac elementum. Duis nec tincidunt dolor, ac dictum eros.</p>
				</div>
			</Header>
      <div className="categoires">
        <div className="container">
          <Link to="#"><div className="col-md-4 sections fashion-grid-a">
            <h4>Fashion</h4>
            <p>dignissim</p>			 					
          </div></Link>
          <Link to="#"><div className="col-md-4 sections fashion-grid-b">
            <h4>Beauty</h4>
            <p>fermentum</p>			 					
          </div></Link>
          <Link to="#"><div className="col-md-4 sections fashion-grid-c">
            <h4>Creativity</h4>
            <p>vulputate</p>				
          </div></Link>
        </div>
        </div>
        {/** End category */}
        <div className="features" id="features">
          <div className="container">
            <div className="tabs-box">
              <ul className="tabs-menu">
                <li><Link to="#tab1">Best seller</Link></li>
                <li><Link to="#tab2">Popular</Link></li>
                <li><Link to="#tab3">New Arrivals</Link></li>
              </ul>
              <div className="tab-grids">
                <div id="tab1" className="tab-grid1">
					{products.map(product =>
						<ProductCard key={product._id} product={product}/>
					)}
                </div>
                <div id="tab2" className="tab-grid2">
					{products.map(product =>
						<ProductCard key={product._id} product={product}/>
					)}                 
                </div>
                <div id="tab3" className="tab-grid3">
					{products.map(product =>
							<ProductCard key={product._id} product={product}/>
					)}                 
                </div>                                                                  
              </div>              
            </div>  
          </div>  
        </div>
        {/** End category */}             
        </>
    )
}
