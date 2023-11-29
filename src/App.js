// src/components/App.js/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header'; 
import Form from './components/Form'; 
import Footer from './components/Footer';
import electronicsImage from './images/electronics.jpg';
import decorationImage from './images/decoration.jpg';

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
                    <Link to="/decoration">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/decoration">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <Link to="/electronics">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/electronics">
                            <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </Link>
                    </div>
                </div>
                
                <div className="card">
                    <Link to="/decoration">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/decoration">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <Link to="/electronics">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/electronics">
                            <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </Link>
                    </div>
                </div>
                
                <div className="card">
                    <Link to="/decoration">
                        <img src={decorationImage} alt="decoration" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/decoration">
                            <h4 className="mb-0 product-link pb-3 secondary">Decoration</h4>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <Link to="/electronics">
                        <img src={electronicsImage} alt="electronics" className="product-img" />
                    </Link>
                    <div className="card-body pb-0">
                        <Link to="/electronics">
                            <h4 className="mb-0 product-link pb-3 secondary">Electronics</h4>
                        </Link>
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
