import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './Product.css'

// Media Import
import product1 from '../../img/download.jfif';
import product2 from '../../img/pro2.jfif';
import product3 from '../../img/pro3.jfif';
import product4 from '../../img/pro4.jfif';
import product5 from '../../img/pro5.jfif';
import product6 from '../../img/pro6.jfif';
import product7 from '../../img/pro7.jfif';
import product8 from '../../img/pro8.jfif';
import product9 from '../../img/pro9.jfif';
import product10 from '../../img/pro10.jfif';
import product11 from '../../img/pro11.jfif';


// Component Import
import PageTitle from '../../Components/UI/PageTitle';
import ProductCard from '../../Components/UI/ProductCard';

/**
* @author
* @function Products
**/

const Products = (props) => {
  return (
    <>
      <PageTitle heading="Portfolio" />
      <section className="products-section">
      <Container className="products-container section-padding">
        <div className="products-wrap clearfix">
        <ProductCard name="Banner Stand" img={product1} />
        <ProductCard name="Canopies" img={product2} />
        <ProductCard name="Acp Sign Boards" img={product3} />
        <ProductCard name="Uni-pole Hoarding" img={product4} />
        <ProductCard name="Wooden Cabinets " img={product5} />
        <ProductCard name="Acrylic slim light Display" img={product6} />
        <ProductCard name="Fabrication for Exhibitions" img={product7} />
        <ProductCard name="Glow-sign Boards" img={product8} />
        <ProductCard name="Neon Sign" img={product9} />
        <ProductCard name="Water Dispensers" img={product10} />
        <ProductCard name="Hording Sign Board" img={product11} />
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