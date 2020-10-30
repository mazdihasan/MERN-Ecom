import React from 'react';
import ProductCard from './ProductCard';
function App() {
  return (
    <div className="app">
      {/*-- Header */}
      <div className="header">
	      <div className="container">
	     <div className="main-header">
			  <div className="carting">
				 <ul><li><a href="login.html"> LOGIN</a></li></ul>
				 </div>
			 <div className="logo">
				 <h3><a href="index.html">NEW FASHIONS</a></h3>
			  </div>			  
			 <div className="box_1">				 
				 <a href="cart.html"><h3>Cart: <span className="simpleCart_total"></span> (<span id="simpleCart_quantity" className="simpleCart_quantity"></span> items)<img src="images/cart.png" alt=""/></h3></a>
				 <p><a href="" className="simpleCart_empty">empty cart</a></p>
			 
			 </div>
			 
			 <div className="clearfix"></div>
		 </div>
				
				{/*-- start header menu -- */}
		<ul className="megamenu skyblue">
			<li className="active grid"><a className="color1" href="index.html">Home</a></li>
			<li className="grid"><a href="#">Women</a>
				<div className="megapanel">
					<div className="row">
						<div className="col1">
							<div className="h_nav">
								<h4>shop</h4>
								<ul>
									<li><a href="products.html">new arrivals</a></li>
									<li><a href="products.html">men</a></li>
									<li><a href="products.html">women</a></li>
									<li><a href="products.html">accessories</a></li>
									<li><a href="products.html">kids</a></li>
									<li><a href="products.html">brands</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>help</h4>
								<ul>
									<li><a href="products.html">trends</a></li>
									<li><a href="products.html">sale</a></li>
									<li><a href="products.html">style videos</a></li>
									<li><a href="products.html">accessories</a></li>
									<li><a href="products.html">kids</a></li>
									<li><a href="products.html">style videos</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>Products</h4>
								<ul>
									<li><a href="products.html">trends</a></li>
									<li><a href="products.html">sale</a></li>
									<li><a href="products.html">style videos</a></li>
									<li><a href="products.html">accessories</a></li>
									<li><a href="products.html">kids</a></li>
									<li><a href="products.html">style videos</a></li>
								</ul>	
							</div>												
						</div>						
						<div className="col1">
							<div className="h_nav">
								<h4>my company</h4>
								<ul>
									<li><a href="products.html">tremds</a></li>
									<li><a href="products.html">sale</a></li>
									<li><a href="products.html">style videos</a></li>
									<li><a href="products.html">accessories</a></li>
									<li><a href="products.html">kids</a></li>
									<li><a href="products.html">style videos</a></li>
								</ul>	
							</div>
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>popular</h4>
								<ul>
									<li><a href="products.html">new arrivals</a></li>
									<li><a href="products.html">men</a></li>
									<li><a href="products.html">women</a></li>
									<li><a href="products.html">accessories</a></li>
									<li><a href="products.html">kids</a></li>
									<li><a href="products.html">style videos</a></li>
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
				<li><a href="#">MEN</a><div className="megapanel">
					<div className="row">
						<div className="col1">
							<div className="h_nav">
								<h4>shop</h4>
								<ul>
									<li><a href="men.html">new arrivals</a></li>
									<li><a href="men.html">men</a></li>
									<li><a href="men.html">women</a></li>
									<li><a href="men.html">accessories</a></li>
									<li><a href="men.html">kids</a></li>
									<li><a href="men.html">brands</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>help</h4>
								<ul>
									<li><a href="men.html">trends</a></li>
									<li><a href="men.html">sale</a></li>
									<li><a href="men.html">style videos</a></li>
									<li><a href="men.html">accessories</a></li>
									<li><a href="men.html">kids</a></li>
									<li><a href="men.html">style videos</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>Products</h4>
								<ul>
									<li><a href="men.html">trends</a></li>
									<li><a href="men.html">sale</a></li>
									<li><a href="men.html">style videos</a></li>
									<li><a href="men.html">accessories</a></li>
									<li><a href="men.html">kids</a></li>
									<li><a href="men.html">style videos</a></li>
								</ul>	
							</div>												
						</div>						
						<div className="col1">
							<div className="h_nav">
								<h4>my company</h4>
								<ul>
									<li><a href="men.html">trends</a></li>
									<li><a href="men.html">sale</a></li>
									<li><a href="men.html">style videos</a></li>
									<li><a href="men.html">accessories</a></li>
									<li><a href="men.html">kids</a></li>
									<li><a href="men.html">style videos</a></li>
								</ul>	
							</div>
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>popular</h4>
								<ul>
									<li><a href="men.html">new arrivals</a></li>
									<li><a href="men.html">men</a></li>
									<li><a href="men.html">women</a></li>
									<li><a href="men.html">accessories</a></li>
									<li><a href="men.html">kids</a></li>
									<li><a href="men.html">style videos</a></li>
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
			<li className="grid"><a href="about.html">ABOUT US</a></li>
			 <li className="grid"><a href="blog.html">BLOG</a></li>				
				<li><a href="#">SHOP ONLINE</a>
				<div className="megapanel">
					<div className="row">
						<div className="col1">
							<div className="h_nav">
								<h4>shop</h4>
								<ul>
									<li><a href="shop.html">new arrivals</a></li>
									<li><a href="shop.html">men</a></li>
									<li><a href="shop.html">women</a></li>
									<li><a href="shop.html">accessories</a></li>
									<li><a href="shop.html">kids</a></li>
									<li><a href="shop.html">brands</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>help</h4>
								<ul>
									<li><a href="shop.html">trends</a></li>
									<li><a href="shop.html">sale</a></li>
									<li><a href="shop.html">style videos</a></li>
									<li><a href="shop.html">accessories</a></li>
									<li><a href="shop.html">kids</a></li>
									<li><a href="shop.html">style videos</a></li>
								</ul>	
							</div>							
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>Products</h4>
								<ul>
									<li><a href="shop.html">trends</a></li>
									<li><a href="shop.html">sale</a></li>
									<li><a href="shop.html">style videos</a></li>
									<li><a href="shop.html">accessories</a></li>
									<li><a href="shop.html">kids</a></li>
									<li><a href="shop.html">style videos</a></li>
								</ul>	
							</div>												
						</div>						
						<div className="col1">
							<div className="h_nav">
								<h4>my company</h4>
								<ul>
									<li><a href="shop.html">trends</a></li>
									<li><a href="shop.html">sale</a></li>
									<li><a href="shop.html">style videos</a></li>
									<li><a href="shop.html">accessories</a></li>
									<li><a href="shop.html">kids</a></li>
									<li><a href="shop.html">style videos</a></li>
								</ul>	
							</div>
						</div>
						<div className="col1">
							<div className="h_nav">
								<h4>popular</h4>
								<ul>
									<li><a href="shop.html">new arrivals</a></li>
									<li><a href="shop.html">men</a></li>
									<li><a href="shop.html">women</a></li>
									<li><a href="shop.html">accessories</a></li>
									<li><a href="shop.html">kids</a></li>
									<li><a href="shop.html">style videos</a></li>
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
      {/*-- End Header */}
      <div className="categoires">
        <div className="container">
          <a href="#"><div className="col-md-4 sections fashion-grid-a">
            <h4>Fashion</h4>
            <p>dignissim</p>			 					
          </div></a>
          <a href="#"><div className="col-md-4 sections fashion-grid-b">
            <h4>Beauty</h4>
            <p>fermentum</p>			 					
          </div></a>
          <a href="#"><div className="col-md-4 sections fashion-grid-c">
            <h4>Creativity</h4>
            <p>vulputate</p>				
          </div></a>
        </div>
        </div>
        {/** End category */}
        <div className="features" id="features">
          <div className="container">
            <div className="tabs-box">
              <ul class="tabs-menu">
                <li><a href="#tab1">Best seller</a></li>
                <li><a href="#tab2">Popular</a></li>
                <li><a href="#tab3">New Arrivals</a></li>
              </ul>
              <div className="tab-grids">
                <div id="tab1" class="tab-grid1">
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                </div>
                <div id="tab2" class="tab-grid2">
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>                  
                </div>
                <div id="tab3" class="tab-grid3">
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>                  
                </div>                                                                  
              </div>              
            </div>  
          </div>  
        </div>
        {/** End category */} 
        <div className="fotter">
	 <div className="container">
	 <div className="col-md-6 contact">


	 </div>
	 <div className="col-md-6 ftr-left">
		 <div className="ftr-list">
			 <ul>
				 <li><a href="#">Home</a></li>
				 <li><a href="about.html">About</a></li>
				 <li><a href="blog.html">Blog</a></li>
				 <li><a href="products.html">Top Seller</a></li>
				 <li><a href="shop.html">New Models</a></li>
				 <li><a href="404.html">Combos</a></li>
				 <li><a href="products.html">Collection</a></li>
				 <li><a href="contact.html">Contact</a></li>
			 </ul>
		 </div>
		 <div className="ftr-list2">
			 <ul>				 
				 <li><a href="#">Combos</a></li>
				 <li><a href="#">Trendy</a></li>
				 <li><a href="#">Fashion</a></li>
				 <li><a href="#">College</a></li>
				 <li><a href="#">Party</a></li>
				 <li><a href="#">Dress</a></li>
				 <li><a href="#">Kurtas & kurtis</a></li>
			 </ul>
		 </div>
		 <div className="clearfix"></div>
		 <h4>FOLLOW US</h4>
		 <div className="social-icons">
		 <a href="#"><span class="in"> </span></a>
		 <a href="#"><span class="you"> </span></a>
		 <a href="#"><span class="be"> </span></a>
		 <a href="#"><span class="twt"> </span></a>
		 <a href="#"><span class="fb"> </span></a>
		 </div>
	 </div>	 
	 <div className="clearfix"></div>
	 </div>
</div>                      
    </div>
  );
}

export default App;
