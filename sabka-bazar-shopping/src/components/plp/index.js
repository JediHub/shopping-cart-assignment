import React, { useState, useEffect } from "react";
import Header from '../header/header';
import Footer from '../footer';
import "../../styles/plp.scss";
import { Link } from 'react-router-dom';
import { chunk } from 'lodash';


function Plp(props) {
    const { products, categories, cartProducts } = props;
    const [displayProp, setDisplayProp] = useState('');

    let cid = props.match.params.cid;


    function showMenu() {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
    }

    useEffect(() => {
        props.requestProductsData({ cid: cid, categories: categories });
    }, [cid]);

    function buyNow(product) {
        props.requestaddToCart(product);
    }
    let rows = [];
    return <div className="container">
    <Header cartProducts={cartProducts}/>
        <main className="section-plp" id="main">
            <div className="row">
                
                <div className="col span-2-of-10 sidebar">
                <aside>
                    <nav className="topnavside"> 
                    <Link onClick={showMenu} aria-label="Show Menu"><span className="selectedFilter" >{cid.replace(/-/g, ' ').toUpperCase()}</span><img src="/static/images/arrow-down.svg" className="iconDown" alt="icon-down" /></Link>
                        <ul className="myLinks" role="menu" style={{ display: displayProp }}>
                            <li role="menuitem" className={cid === 'fruit-and-veg' ? 'active' : 'inactive'}><Link to={'/plp/fruit-and-veg'} title="Fruits &amp; Vegitables" aria-label="Fruits &amp; Vegetables menu item">Fruits &amp; Vegitables</Link></li>
                            <li role="menuitem" className={cid === 'bakery-cakes-dairy' ? 'active' : 'inactive'}><Link to={'/plp/bakery-cakes-dairy'} title="Bakery Cakes and dairy" aria-label="Bakery cakes and dairy menu item">Bakery Cakes and Dairy</Link></li>
                            <li role="menuitem" className={cid === 'beverages' ? 'active' : 'inactive'}><Link to={'/plp/beverages'} title="Beverages" aria-label="Beverages menu item">Beverages</Link></li>
                            <li role="menuitem" className={cid === 'beauty-hygiene' ? 'active' : 'inactive'}><Link to={'/plp/beauty-hygiene'} title="Beauty and Hygiene" aria-label="Beauty and Hygiene menu item">Beauty and Hygiene</Link></li>
                            <li role="menuitem" className={cid === 'baby' ? 'active' : 'inactive'}><Link to={'/plp/baby'} title="Baby Care" aria-label="Baby Care menu item">Baby Care</Link></li>
                        </ul>
                    </nav>
                </aside>
                </div>

                <div className="col span-8-of-10 products">
                    <main className="section-products">
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
                                            MRP Rs. {obj.price} <button onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                            return null;
                        })}

                        {(chunk(rows, 4).map(function (group, i) {
                            return <div key={i} className="row">{group}</div>
                        }))}

                    </main>
                </div>



            </div>
        </main>

    
        <Footer />
    </div >;
}

export default Plp;