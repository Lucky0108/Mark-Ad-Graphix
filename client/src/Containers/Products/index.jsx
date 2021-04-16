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
import product12 from '../../img/pro12.jfif';
import product13 from '../../img/pro13.jfif';
import product14 from '../../img/pro14.jfif';


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
        <ProductCard name="Wayfinding Signs & Totems" img={product1} />
        <ProductCard name="Led Signs" img={product2} />
        <ProductCard name="Acp Signs" img={product3} />
        <ProductCard name="Metal Letters" img={product4} />
        <ProductCard name="Reception Signs" img={product5} />
        <ProductCard name="Corian Mandirs & Jobs" img={product6} />
        <ProductCard name="Frosted Films & Graphic Works" img={product7} />
        <ProductCard name="Name Plates" img={product8} />
        <ProductCard name="Floor Information & directories" img={product9} />
        <ProductCard name="Led Moving Message Signs" img={product10} />
        <ProductCard name="Misc Works & Safety Signs" img={product11} />
        <ProductCard name="Fire Signs" img={product12} />
        <ProductCard name="Sign Boards" img={product13} />
        <ProductCard name="Brand Fencing & Unipoles" img={product14} />
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