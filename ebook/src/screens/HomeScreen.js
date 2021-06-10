import React from 'react';
import "./HomeScreen.css";
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
  return (
    <div>
        <div className="home"> 
			<section class="banner-area" id="home">	
				<div class="container">
					<div class="row fullscreen d-flex align-items-center justify-content-start">
						<div class="banner-content col-lg-7">
							<h5 class="text-white text-uppercase">Author: Travor James</h5>
							<h1 class="text-uppercase">
								New Adventure				
							</h1>
							<p class="text-white pt-20 pb-20">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp <br/> or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
							</p>
							<a href="#" class="primary-btn text-uppercase">Buy Now for $9.99</a>
						</div>
						<div class="col-lg-5 text-center banner-right">
							<img class="img-fluid object" src="img/header-img.png" alt=""/>
						</div>												
					</div>
				</div>
			</section>
            
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
    </div>
  );
}