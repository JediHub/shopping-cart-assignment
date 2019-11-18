import React from "react";
import { Link } from "react-router-dom";
import '../../styles/common.scss';
import '../../styles/Grid.scss';

function Header(props) {
  return (
    <div>
      <header>
        <div className="row">
          <div className="col span-1-of-3 xyz">
            <figure className="sabka-bazar-logo">
              <img src="/static/images/logo.png" alt="logo" />
            </figure>
          </div>
          <div className="col span-1-of-3 xyz navigate">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/plp"><li>Products</li></Link>
            </ul>
          </div>
          <div className="col span-1-of-3 xyz navigate2">
            <div className="row">
              <ul>
                <Link to="/login"><li>Sign in</li></Link>
                <Link to="/Register"><li>Register</li></Link>
              </ul>
            </div>
            <div className="row">
              <Link className="btn btn-cart" to="#">
                <i className="ion-ios-cart-outline icon-big"></i> 0 items
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;