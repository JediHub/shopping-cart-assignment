import React from "react";
import { Link } from "react-router-dom";
import "./../header/header.scss";
import "../../styles/Grid.scss";
import 'font-awesome/css/font-awesome.min.css';

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
            <img src="/static/images/logo.png" alt="logo" />
            <div id="myLinks">
              <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/plp"><li>Products</li></Link>
              <Link to="/login"><li>Login</li></Link>
              <Link to="/register"><li>Register</li></Link>
              </ul>
            </div>

            <div className="col span-1-of-3">
              <a href="/#" class="icon" onClick={(e) => showMobileMenu(e)}>
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row web-app">
          <div className="col span-1-of-3">
            <figure className="logo">
              <img src="/static/images/logo.png" alt="logo" />
            </figure>
          </div>
          <div className="col span-1-of-3 header-nav">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/plp">
                <li>Products</li>
              </Link>
            </ul>
          </div>
          <div className="col span-1-of-3 top-nav">
            <div className="row">
              <ul>
                <Link to="/login">
                  <li>Sign in</li>
                </Link>
                <Link to="/Register">
                  <li>Register</li>
                </Link>
              </ul>
            </div>
            <div className="row">
              <Link className="btn btn-cart" to="#">
                <i className="fas fa-shopping-cart cart-icon"></i> 0 items
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
