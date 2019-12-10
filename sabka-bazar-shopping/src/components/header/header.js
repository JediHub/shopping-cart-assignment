import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss';
import "../../styles/Grid.scss";
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
  const [display, setDisplay] = useState('none');

  function showMobileMenu(e) {
    e.preventDefault();
    if (display === "block") {
      setDisplay('none');
  } else {
      setDisplay('block');
  }
  }

  return (
   
      <header>
        <div className="topnav">
          <div className="row mobile-logo">
            <Link to={'/'}><img src="/static/images/logo.png" alt="logo" /></Link>
              <ul className="myLinks" style={{ display: display}}>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/plp/all">Products</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            
            <div className="col span-1-of-3">
              <a href="/#" className="icon" onClick={e => showMobileMenu(e)}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row web-app">
          <div className="col span-1-of-3 logo">
            <Link to="/" title="Sabka Bazar">
              <img src="/static/images/logo.png" alt="sabka-bazar-logo" />
            </Link>
          </div>
          <nav role="navigation" aria-label="header navigation" className="col span-1-of-3 header-nav">
            <ul role="menu">
              <li role="menuitem">
                <Link to="/" aria-label="Home Menu Item" title="Home">Home</Link>
              </li>
              <li role="menuitem">
                <Link to="/plp/all" aria-label="Products Menu Item" title="Products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className="col span-1-of-3 top-nav" >
          <nav aria-label="top navigation" className="row">
            <ul role="menu">
              <li role="menuitem">
                <Link to="/login" aria-label="Sign In Menu Item" title="Sign In">Sign in</Link>
              </li>
              <li role="menuitem">
                <Link to="/Register" aria-label="Sign Up Menu Item" title="Sign Up">Register</Link>
              </li>
            </ul>
            </nav>
            <div className="btn btn-cart">
              <Link to={"#"} title="Cart">
              <img src="/static/images/cart.svg" alt="cart-logo" /> 0 items
              </Link>
            </div>
            </div>
           
        </div>
      </header>
   
  );
}

export default Header;
