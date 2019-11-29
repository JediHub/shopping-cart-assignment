import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer";
import "../../styles/common.scss";

function plp(props) {
  return (
    <div className="container">
      <Header />
      <section className="section-plp">
        <div className="row">
          <div className="col span-2-of-10 sidebar">
            <ul>
              <li>Fruits &amp; Vegitables</li>
              <li>Backery Cakes and Dairy</li>
              <li>Beverages</li>
              <li>Beauty and Hygiene</li>
              <li>Baby Care</li>
            </ul>
          </div>

          <div className="col span-8-of-10 products">
            <section className="section-products">
              <div className="row">
                <div className="col span-1-of-4 item">
                  <h3>Fresh Kiwi- Green, 3 pcs</h3>
                  <img
                    src="/static/images/products/fruit-n-veg/kiwi-green.jpg"
                    alt="Kiwi-green"
                  />
                  <p>
                    Kiwis are oval shaped with a brownish outer skin. the flesh
                    is bright green and juicy with tiny edible black seeds.
                  </p>

                  <div className="price-tag">
                    MRP Rs. 87 <Link to="/">Buy Now</Link>
                  </div>
                </div>

                <div className="col span-1-of-4 item">
                  <h3>Fresh Kiwi- Green, 3 pcs</h3>
                  <img
                    src="/static/images/products/fruit-n-veg/kiwi-green.jpg"
                    alt="Kiwi-green"
                  />
                  <p>
                    Kiwis are oval shaped with a brownish outer skin. the flesh
                    is bright green and juicy with tiny edible black seeds.
                  </p>

                  <div className="price-tag">
                    MRP Rs. 87 <Link to="/">Buy Now</Link>
                  </div>
                </div>

                <div className="col span-1-of-4 item">
                  <h3>Fresh Kiwi- Green, 3 pcs</h3>
                  <img
                    src="/static/images/products/fruit-n-veg/kiwi-green.jpg"
                    alt="Kiwi-green"
                  />
                  <p>
                    Kiwis are oval shaped with a brownish outer skin. the flesh
                    is bright green and juicy with tiny edible black seeds.
                  </p>

                  <div className="price-tag">
                    MRP Rs. 87 <Link to="/">Buy Now</Link>
                  </div>
                </div>

                <div className="col span-1-of-4 item">
                  <h3>Fresh Kiwi- Green, 3 pcs</h3>
                  <img
                    src="/static/images/products/fruit-n-veg/kiwi-green.jpg"
                    alt="Kiwi-green"
                  />
                  <p>
                    Kiwis are oval shaped with a brownish outer skin. the flesh
                    is bright green and juicy with tiny edible black seeds.
                  </p>

                  <div className="price-tag">
                    MRP Rs. 87 <Link to="/">Buy Now</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default plp;
