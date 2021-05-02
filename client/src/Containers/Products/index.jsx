import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './Product.css'

// Media Import
import window1 from '../../img/products/window-1.jpg'
import window2 from '../../img/products/window-2.jpg'
import window3 from '../../img/products/window-3.jpg'
import window4 from '../../img/products/window-4.jpg'
import window5 from '../../img/products/window-5.jpg'
import window6 from '../../img/products/window-6.jpg'
import window7 from '../../img/products/window-7.jpg'

import led1 from '../../img/products/led-1.jpg'
import led2 from '../../img/products/led-2.jpg'
import led3 from '../../img/products/led-3.jpg'
import led4 from '../../img/products/led-4.jpg'
import led5 from '../../img/products/led-5.jpg'
import led6 from '../../img/products/led-6.jpg'
import led7 from '../../img/products/led-7.jpg'

import poster1 from '../../img/products/poster-1.jpg'
import poster2 from '../../img/products/poster-2.jpg'

import acp1 from '../../img/products/acp-1.jpg'
import acp2 from '../../img/products/acp-2.jpg'
import acp3 from '../../img/products/acp-3.jpg'
import acp4 from '../../img/products/acp-4.jpg'
import acp5 from '../../img/products/acp-5.jpg'
import acp6 from '../../img/products/acp-6.jpg'
import acp7 from '../../img/products/acp-7.jpg'
import acp8 from '../../img/products/acp-8.jpg'
import acp9 from '../../img/products/acp-9.jpg'
import acp10 from '../../img/products/acp-10.jpg'
import acp11 from '../../img/products/acp-11.jpg'
import acp12 from '../../img/products/acp-12.jpg'
import acp13 from '../../img/products/acp-13.jpg'
import acp14 from '../../img/products/acp-14.jpg'


// Component Import
import PageTitle from '../../Components/UI/PageTitle';
import ProductCard from '../../Components/UI/ProductCard';

/**
* @author
* @function Products
**/

const Products = (props) => {

  // Changing Product Images Display On Click Event Trigger
  const initialProduct = {
    pro1: false,
    pro2: false,
    pro3: false,
    pro4: false,
    pro5: false
  }

  const [{ pro1, pro2, pro3, pro4, pro5 }, setProduct] = useState(initialProduct);

  // Set Back To Original Values
  const clearState = () => {
    setProduct({ ...initialProduct })
  }

  return (
    <>
      <PageTitle heading="Portfolio" />
      <section className="products-section">
      <Container className="products-container section-padding">
        <div className="products-wrap clearfix">
          <div className="product-card-div" onClick={() => pro1 ? (() => clearState(), setProduct({ pro1: false})) : (() => clearState(), setProduct({ pro1: true})) }> <ProductCard name="Window Display" img={window1} /> </div>
          <div className="product-card-div" onClick={() => pro2 ? (() => clearState(), setProduct({ pro2: false})) : (() => clearState(), setProduct({ pro2: true})) }> <ProductCard name="LED Signs" img={led3} /> </div>
          <div className="product-card-div" onClick={() => pro3 ? (() => clearState(), setProduct({ pro3: false})) : (() => clearState(), setProduct({ pro3: true}))}> <ProductCard name="Banner Stand" img={acp3} /> </div>
        <div className="products-displays" style={ pro1 ? {display: "flex"} : {display: "none"}}>
          <img src={window1} alt="Window Display 1" />
          <img src={window2} alt="Window Display 2" />
          <img src={window3} alt="Window Display 3" />
          <img src={window4} alt="Window Display 4" />
          <img src={window5} alt="Window Display 5" />
          <img src={window6} alt="Window Display 6" />
          <img src={window7} alt="Window Display 7" />
        </div>
        <div className="products-displays" style={ pro2 ? {display: "flex"} : {display: "none"}}>
          <img src={led1} alt="Led Sign 1" />
          <img src={led2} alt="Led Sign 2" />
          <img src={led3} alt="Led Sign 3" />
          <img src={led4} alt="Led Sign 4" />
          <img src={led5} alt="Led Sign 5" />
          <img src={led6} alt="Led Sign 6" />
          <img src={led7} alt="Led Sign 7" />
        </div>
        <div className="products-displays" style={ pro3 ? {display: "flex"} : {display: "none"}}>
          <img src={acp10} alt="Banner Stand 1" />
          <img src={acp10} alt="Banner Stand 2" />
          <img src={acp10} alt="Banner Stand 3" />
        </div>
          <div className="product-card-div" onClick={() => pro4 ? (() => clearState(), setProduct({ pro4: false})) : (() => clearState(), setProduct({ pro4: true})) } > <ProductCard name="ACP Signage" img={acp12} /> </div>
          <div className="product-card-div" onClick={() => pro5 ? (() => clearState(), setProduct({ pro5: false})) : (() => clearState(), setProduct({ pro5: true})) } > <ProductCard name="Clip On Frame" img={poster1} /> </div>
        </div>
        <div className="products-displays" style={ pro4 ? {display: "flex"} : {display: "none"}}>
          <img src={acp1} alt="Acp Signage 1" />
          <img src={acp2} alt="Acp Signage 2" />
          <img src={acp3} alt="Acp Signage 3" />
          <img src={acp4} alt="Acp Signage 4" />
          <img src={acp5} alt="Acp Signage 5" />
          <img src={acp6} alt="Acp Signage 6" />
          <img src={acp7} alt="Acp Signage 7" />
          <img src={acp8} alt="Acp Signage 8" />
          <img src={acp9} alt="Acp Signage 9" />
          <img src={acp10} alt="Acp Signage 10" />
          <img src={acp11} alt="Acp Signage 11" />
          <img src={acp12} alt="Acp Signage 12" />
          <img src={acp13} alt="Acp Signage 13" />
          <img src={acp14} alt="Acp Signage 14" />
        </div>
        <div className="products-displays" style={ pro5 ? {display: "flex"} : {display: "none"}}>
          <img src={poster1} alt="Poster 1" />
          <img src={poster2} alt="Poster 2" />
        </div>
      </Container>
      <div className="contact-cta-div">
        <div className="text-center">
          <h2>Don’t worry, if you don’t see it, we can still do it! We love saying "YES" to clients.</h2>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
    </>
  )
}


export default Products