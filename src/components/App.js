// src/components/App.js
import React from 'react';
import '../styles/App.css';
import Header from './Header'; 
import Form from './Form'; 
import Footer from './Footer';
import electronicsImage from '../images/electronics.jpg';
import decorationImage from '../images/decoration.jpg';

function App() {
    return (
    <main>       
    <Header />

{/* Carousel to be implemented
      <div id="productCarouselIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#productCarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/caroussel1.jpg" className="d-block w-100" alt="image 1" />
                </div>
            
                <div className="carousel-item">
                    <img src="./images/caroussel2.png" className="d-block w-100" alt="image 2" />
                </div>
            
                <div className="carousel-item">
                    <img src="./images/caroussel4.jpg" className="d-block w-100" alt="image 3" />
                </div>
            </div>

            <!-- Previous and Next Buttons -->
            <a className="carousel-control-prev" href="#productCarouselIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                <span className="button-text">Prev</span>
            </a>
            
            <a className="carousel-control-next" href="#productCarouselIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                <span className="button-text">Next</span>
            </a>
        </div>
 */}
            
        {/* <!-- Categories --> */}
        <div id="category-container" className="category-container">
            <h3>Shop by category</h3>
            <hr />
            <div className="category-grid">
                <div className="card">
                    <a href="#">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 classNambodyCe="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </a>
                    </div>
                </div>
                
                <div className="card">
                    <a href="#">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <a href="#">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </a>
                    <div className="card-body pb-0">
                        <a href="#">
                            <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <Form />  
        <Footer />
    </main>
    );
}

export default App;
