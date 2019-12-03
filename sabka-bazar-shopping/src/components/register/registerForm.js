import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "../header/header";
import Footer from "../footer";
import '../../styles/register.scss'
import './../../styles/Grid.scss';

const validEmailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const validPasswordRegex = RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName': 
        errors.firstName = 
          value && value.length < 5
            ? 'First Name must be 5 characters long!'
            : '';
        break;
        case 'lastName': 
        errors.lastName = 
          value && value.length < 5
            ? 'Last Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email address is not valid!';
        break;
      case 'password': 
        errors.password = 
        value.length < 6 
            ? 'Password must be 6 characters long!' : !validPasswordRegex.test(value) ? 'Must have a number and alphabet' : '' ;
        break;
    
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  //Need to work on this
  // onChange = (event) => {   
  //   event.preventDefault();
  //   let errors = this.state.errors;
    
  //   if (event.target.password.value !== event.target.confirmPassword.value){
  //     this.setState({errors,confirmPassword: 'password and confirm password did not match' });
  //   }
    
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='container'>
      <Header />
      <section className="section-form">
      <div className="row">
      <div className="col span-1-of-2 shopping-form">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="row">
      <form onSubmit={this.handleSubmit} noValidate>
                <div className="col span-1-of-2">
                  <div className='row form-input'>
                  <input type='text' name='firstName' size="50" placeholder="First Name" onChange={this.handleChange} aria-required="true" aria-describedby="firstName-error" noValidate />
                  {errors.firstName && 
                <span className='error'>{errors.firstName}</span>}
                </div>
                 
                <div className='row form-input'>
              <input type='text' name='lastName' size="50" placeholder="Last Name" onChange={this.handleChange} aria-required="true" aria-describedby="lastName-error" noValidate />
                {errors.lastName && 
                <span className='error'>{errors.lastName}</span>}
                </div>
             
                <div className='row form-input-email'>
              <input type='email' name='email' placeholder="Email" size="50" onChange={this.handleChange} aria-required="true" aria-describedby="email-error" noValidate />
              {errors.email && 
                <span className='error'>{errors.email}</span>}
                </div>

                 <div className='row form-input'>
              <input type='password' name='password' placeholder="Password" size="50" onChange={this.handleChange} aria-required="true" aria-describedby="password-error" noValidate />
              {errors.password && 
                <span className='error'>{errors.password}</span>}
                  </div>

                  <div className='row form-input'>
              <input type='password' name='confirmPassword' placeholder="Confirm Password" size="50" onChange={this.onChange} aria-required="true" aria-describedby="confirmPassword-error" noValidate />
              {errors.confirmPassword && 
                <span className='error'>{errors.confirmPassword}</span>}
              </div>
             
              <div className="row form-input">
             <Link to={'/'}><button type="submit" className="btn-login">Signup</button></Link>
             </div>
           </div>
          </form>
          </div>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Register;