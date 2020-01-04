import React, { useState, useEffect } from "react";
import Header from '../header/header';
import Footer from '../footer';
import Anchor from '../shared/Anchor/Anchor';
import Button from '../shared/Button/Button';
import "../../styles/plp.scss";
//import "../../styles/common.scss";
import "../../styles/Flex.scss";


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
                        <Button className="buyNow-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</Button>
                    </div>
                </div>
                <Button className="buyNow-mobile-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now @ Rs.{obj.price}</Button>
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
                    <Anchor to="#" className="showMenu" title={cid.replace(/-/g, ' ').toLowerCase()} onClick={showMenu} aria-label="Show Menu">
                    <span className="selectedFilter" >{cid.replace(/-/g, ' ').toUpperCase()}</span>
                    <img src="/static/images/arrow-down.svg" className="iconDown" alt="icon-down" />
                    </Anchor>
                        <ul className="myLinks" role="menu" style={{ display: displayProp }} onClick={showMenu}>
                            <li role="menuitem" className={cid === 'fruit-and-veg' ? 'active' : 'inactive'}><Anchor to={'/plp/fruit-and-veg'} title="Fruits &amp; Vegitables" aria-label="Fruits &amp; Vegetables menu item">Fruits &amp; Vegitables</Anchor></li>
                            <li role="menuitem" className={cid === 'bakery-cakes-dairy' ? 'active' : 'inactive'}><Anchor to={'/plp/bakery-cakes-dairy'} title="Bakery Cakes and dairy" aria-label="Bakery cakes and dairy menu item">Bakery Cakes and Dairy</Anchor></li>
                            <li role="menuitem" className={cid === 'beverages' ? 'active' : 'inactive'}><Anchor to={'/plp/beverages'} title="Beverages" aria-label="Beverages menu item">Beverages</Anchor></li>
                            <li role="menuitem" className={cid === 'beauty-hygiene' ? 'active' : 'inactive'}><Anchor to={'/plp/beauty-hygiene'} title="Beauty and Hygiene" aria-label="Beauty and Hygiene menu item">Beauty and Hygiene</Anchor></li>
                            <li role="menuitem" className={cid === 'baby' ? 'active' : 'inactive'}><Anchor to={'/plp/baby'} title="Baby Care" aria-label="Baby Care menu item">Baby Care</Anchor></li>
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