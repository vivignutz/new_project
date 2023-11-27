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
