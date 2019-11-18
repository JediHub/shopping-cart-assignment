import React from "react";
import apple from "./../../../static/images/products/fruit-n-veg/apple.jpg";
import lowestPrice from "./../../../static/images/products/lowest-price.png";

function Cart(props) {
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="shopping-cart-contents">
          <div className="shopping-cart-header">
            <p>My Cart(1 item)</p>
            <span>
              <i className="ion-ios-close-empty icon-close"></i>
            </span>
          </div>
          <div className="shopping-cart-items">
            <figure className="apple-logo">
              <img src={apple} alt="apple" />
            </figure>
            <p>Apple &mdash; Washington, Regular, 4 pcs</p>
            <span>
              <i className="ion-ios-minus-outline icon-minus"></i>
            </span>
            <span className="minus-1">1</span>
            <span className="plus-icon">
              <i className="ion-ios-plus-outline icon-plus"></i>
            </span>
            <span className="icon-close">
              <i className="ion-ios-close-empty icon-close"></i>
            </span>
            <span className="product-price">Rs. 187</span>
            <span className="total-product-price">Rs. 187</span>
          </div>

          <div className="lowest-price-gauranteed">
            <figure className="lowest-price-logo">
              <img src={lowestPrice} alt="lowest-price" />
            </figure>
            <span className="cheaper-anywhere">
              You won't find it cheaper anywhwere
            </span>
          </div>
          <div className="footer-checkout-bottom">
            <div className="footer-bottom">
              <p>Promo code can be applied on payment page</p>
            </div>
            <div className="footer-checkout">
              <span className="checkout-text">Proceed to Checkout</span>
              <div className="checkout-text-1">
                <span className="checkout-price">Rs. 187 </span>
                <i className="ion-ios-arrow-forward icon-forward"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
