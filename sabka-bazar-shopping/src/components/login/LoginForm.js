import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer";
import { Link } from "react-router-dom";
import "../../styles/common.scss";

const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const validPasswordRegex = RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email address is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 6
            ? "Password must be 6 characters long!"
            : !validPasswordRegex.test(value)
            ? "Must have a number and alphabet"
            : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <Header />
        <main className="section-form">
          <div className="row">
          <div className="col span-1-of-2 shopping-form">
              <h1>Login</h1>
              <p className="order-info">Get access to your orders wish list and recommendations </p>
            </div>
            <div className="row">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="col span-1-of-2">
                  <div className="row form-input-email">
                    <label for="email"> Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      size="50"
                      onChange={this.handleChange}
                      aria-required="true"
                      noValidate
                    />
                    </label>
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="row form-input">
                    <label for="password"> Password
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      size="50"
                      onChange={this.handleChange}
                      aria-required="true"
                      noValidate
                    />
                    </label>
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>

                  <div className="row form-input">
                  <Link to={'/'}><button type="submit" className="btn-login">Login</button></Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Login;

