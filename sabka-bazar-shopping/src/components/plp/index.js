import React, { useState, useEffect } from "react";
import Header from '../header/header';
import Footer from '../footer';
import "../../styles/plp.scss";
//import "../../styles/common.scss";
import "../../styles/Flex.scss";
import { Link } from 'react-router-dom';


function Plp(props) {
    const { products, categories, cartProducts } = props;
    const [displayProp, setDisplayProp] = useState('');

    let cid = props.match.params.cid;


    function showMenu() {
        if (window.innerWidth < 768) {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
     }
    }

    useEffect(() => {
        props.requestProductsData({ cid: cid, categories: categories });
    }, [cid]);

    function buyNow(product) {
        props.requestaddToCart(product);
    }

    let rows = products && products.length ? 
    (
        products && products.map((obj, i) => {
            return (
            <div key={obj.id} className="item">
                <h1>List of products based on categories</h1>
                <h2>{obj.name}</h2>
                <div className="flexContainer flexColumnDirection flexRowDirection item-wrapper">
                    <div className="item-inner-content">
                        <img src={obj.imageURL} alt={obj.name} />
                    </div>
                    <div className="item-inner-content">
                        <p>{obj.description}</p>
                        <span className="price-tag"> MRP Rs. {obj.price}</span>
                        <button className="buyNow-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</button>
                    </div>
                </div>
                <button className="buyNow-mobile-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now @ Rs.{obj.price}</button>
            </div>
            )
        }) 
    ):
        (
            <p className="no-items">Try again after some time.</p>
        )

    return <div className="container">
    <Header cartProducts={cartProducts}/>
        <main className="section-plp" id="main">
        <div className="flexContainer">
                
            <aside className="sidebar">   
                    <nav className="topnavside"> 
                    <Link to={'#'} className="showMenu" onClick={showMenu} aria-label="Show Menu"><span className="selectedFilter" >{cid.replace(/-/g, ' ').toUpperCase()}</span><img src="/static/images/arrow-down.svg" className="iconDown" alt="icon-down" /></Link>
                        <ul className="myLinks" role="menu" style={{ display: displayProp }} onClick={showMenu}>
                            <li role="menuitem" className={cid === 'fruit-and-veg' ? 'active' : 'inactive'}><Link to={'/plp/fruit-and-veg'} title="Fruits &amp; Vegitables" aria-label="Fruits &amp; Vegetables menu item">Fruits &amp; Vegitables</Link></li>
                            <li role="menuitem" className={cid === 'bakery-cakes-dairy' ? 'active' : 'inactive'}><Link to={'/plp/bakery-cakes-dairy'} title="Bakery Cakes and dairy" aria-label="Bakery cakes and dairy menu item">Bakery Cakes and Dairy</Link></li>
                            <li role="menuitem" className={cid === 'beverages' ? 'active' : 'inactive'}><Link to={'/plp/beverages'} title="Beverages" aria-label="Beverages menu item">Beverages</Link></li>
                            <li role="menuitem" className={cid === 'beauty-hygiene' ? 'active' : 'inactive'}><Link to={'/plp/beauty-hygiene'} title="Beauty and Hygiene" aria-label="Beauty and Hygiene menu item">Beauty and Hygiene</Link></li>
                            <li role="menuitem" className={cid === 'baby' ? 'active' : 'inactive'}><Link to={'/plp/baby'} title="Baby Care" aria-label="Baby Care menu item">Baby Care</Link></li>
                        </ul>
                    </nav>
              
            </aside>

            <div className="flexContainer flexRow products">
            {rows}
            </div>

        </div>
        </main>

    
        <Footer />
    </div >;
}

export default Plp;