import React from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss';
import "../../styles/Grid.scss";
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
  function showMobileMenu(e) {
    e.preventDefault();
    console.log("myFunction called:::");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>
      <header>
        <div class="topnav">
          <div class="row mobile-logo">
            <Link to={'/'}><img src="/static/images/logo.png" alt="logo" /></Link>
            <div id="myLinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/plp">Products</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>

            <div className="col span-1-of-3">
              <a href="/#" class="icon" onClick={e => showMobileMenu(e)}>
                <i class="fa fa-bars"></i>
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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plp">Products</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="top navigation" className="col span-1-of-3 top-nav">
            <ul>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
            </nav>
            <div className="btn btn-cart">
              <Link to={"#"} title="cart">
              <img src="/static/images/cart.svg" alt="cart-logo" /> 0 items
              </Link>
            </div>
           
        </div>
      </header>
    </div>
  );
}

export default Header;
