import React from 'react';
import { Container } from 'react-bootstrap';

// Css Import
import './ProductPage.css';

// Component Import
import PageTitle from '../PageTitle';

// Media Import
import pro1 from '../../../img/pro4.jfif'

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {
  return(
    <>
    <PageTitle heading="Led Signs" />
    <section className="product-page-section section-padding">
    <Container>
        <div className="product-page-container clearfix">
            <div className="product-page-wrap">
                <p>A LED letter sign is a three-dimensional sign element. It is fabricated from stainless steel and acrylic, thus it will not rust. LED letters are eye-catching and the most preferred choice when it comes to exterior signs. These signs are usually used as fixtures on parts of a building. LED letter signs enhance the overall look of the sign itself and add a lighting effect on the surrounding building façade. You can choose from different types of LED letters like standard LED letter, open face LED letter, Halo effect LED letter and black/white LED letter. Each type has its unique characteristics.</p>
                <div className="product-gallery">
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                    <div className="product-gallery-item">
                        <img src={pro1} alt=" " />
                    </div>
                </div>
            </div>
        </div>
    </Container>
    </section>
    </>
   )
  }


export default ProductPage