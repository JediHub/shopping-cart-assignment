import React from "react";
import Header from '../header/header';
import Footer from '../footer';
import "../../styles/plp.scss";
import { Link } from 'react-router-dom';
import { chunk } from 'lodash';

function Plp(props) {
    const { products, cid, displayProp, showMenu } = props;
    let rows = [];

    return <div className="container">
    <Header/>
        <main className="section-plp" id="main">
            <div className="row">
                <div className="col span-2-of-10 sidebar">
                    <nav className="topnavside"> 
                    <Link onClick={showMenu} aria-label="Show Menu"><span className="selectedFilter" >{cid.replace(/-/g, ' ').toUpperCase()}</span><img src="/static/images/arrow-down.svg" className="iconDown" alt="icon-down" /></Link>
                        <ul className="myLinks" style={{ display: displayProp }}>
                            <li className={cid === 'fruit-and-veg' ? 'active' : ''}><Link to={'/plp/fruit-and-veg'}>Fruits & Vegitables</Link></li>
                            <li className={cid === 'bakery-cakes-dairy' ? 'active' : ''}><Link to={'/plp/bakery-cakes-dairy'}>Bakery Cakes and Dairy</Link></li>
                            <li className={cid === 'beverages' ? 'active' : ''}><Link to={'/plp/beverages'}>Beverages</Link></li>
                            <li className={cid === 'beauty-hygiene' ? 'active' : ''}><Link to={'/plp/beauty-hygiene'}>Beauty and Hygiene</Link></li>
                            <li className={cid === 'baby' ? 'active' : ''}><Link to={'/plp/baby'}>Baby Care</Link></li>
                        </ul></nav>
                </div>


                <div className="col span-8-of-10 products">
                    <section className="section-products">
                        {products && products.map((obj, i) => {
                            rows.push(<div key={obj.id} className="col span-1-of-4 item">
                                <h1>{obj.name}</h1>
                                <div className="item-content">
                                    <div className="item-inner-content">
                                        <img src={obj.imageURL} alt={obj.name} />
                                    </div>
                                    <div className="item-inner-content">
                                        <p>{obj.description}</p>
                                        <div className="price-tag">
                                            MRP Rs. {obj.price} <button aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                            return null;
                        })}

                        {(chunk(rows, 4).map(function (group, i) {
                            return <div key={i} className="row">{group}</div>
                        }))}

                    </section>
                </div>



            </div>
        </main>

    
        <Footer />
    </div >;
}

export default Plp;