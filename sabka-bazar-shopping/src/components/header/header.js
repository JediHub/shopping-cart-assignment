import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss';
//import "./../../styles/common.scss";
import "../../styles/Flex.scss";
import Model from "../model";
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
    const { cartProducts } = props;
    const [display, setDisplay] = useState('none');
    const [show, setModel] = useState(false);
   

    let showModal = () => {
        setModel(true);
    };

    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
    };

  function showMobileMenu(e) {
    if (display === "block") {
      setDisplay('none');
  } else {
      setDisplay('block');
  }
  }

  return (
    <div>
      <header>
         <div className="topnav">
                <div className="row">
                    <div className="col sm-7-of-10">
                        <Link to={'/'}><img src={'/static/images/logo.png'} alt="logo" /></Link>
                        <ul className="myLinks" style={{ display: display }}>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/plp/all'}>Products</Link></li>
                            <li><Link to={'/login'}>Sign In</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </ul>
                    </div>

                    <div className="col sm-3-of-10">
                        <div className="col sm-2-of-3">
                            <i onClick={showModal} className="m-btn-cart">  <img src={'/static/images/cart.svg'} alt="cart logo" /><span>({cartProducts ? cartProducts.length : 0})</span></i>
                        </div>
                        <div className="col sm-1-of-3 m-btn-cart">
                            <i onClick={() => showMobileMenu()} className="fa fa-bars"></i>
                        </div>

                    </div>
                </div>
            </div>

        <div className="flexContainer web-app">
          <div className="flexItem flexContainer flexCenter itemCenter logo">
            
              <img src="/static/images/logo.png" alt="sabka-bazar-logo" />
           
          </div>
          <nav role="navigation" aria-label="header navigation" className="flexItem  header-nav">
            <ul role="menu">
              <li role="menuitem">
                <Link to="/" aria-label="Home Menu Item" title="Home">Home</Link>
              </li>
              <li role="menuitem">
                <Link to="/plp/all" aria-label="Products Menu Item" title="Products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className="flexItem" >
          <nav aria-label="top navigation" className="top-nav">
            <ul role="menu" className="flexContainer flexCenter">
              <li role="menuitem">
                <Link to="/login" aria-label="Sign In Menu Item" title="Sign In">Sign in</Link>
              </li>
              <li role="menuitem">
                <Link to="/Register" aria-label="Sign Up Menu Item" title="Sign Up">Register</Link>
              </li>
            </ul>
            </nav>
            <div className="flexContainer flexCenter flexEnd">
              <button className="btn-cart" aria-label={`${cartProducts ? cartProducts.length : 0} item cart`} onClick={showModal}><img src="/static/images/cart.svg" alt="cart-logo" /><span>{cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length > 1 ? 'items' : 'item'}</span></button>
            </div>
            </div>
           
        </div>
      </header>

      <Model show={show} handleClose={hideModal} />
  </div>
  );
}

export default Header;
