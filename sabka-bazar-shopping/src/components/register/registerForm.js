import React, { Component } from 'react';
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

    this.handleSubmit = this.handleSubmit.bind(this);
   
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

  handleChange =(event) => {
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
        case 'confirmPassword': 
        errors.confirmPassword = 
        value.length === 0
            ? '' : !validPasswordRegex.test(value) ? 'Must have a number and alphabet' : '' ;
        break;
        
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.state.errors;

    let password = e.target.elements.password.value;
    let confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      errors.confirmPassword = 'password and confirm password does not match';

      this.setState({errors, [confirmPassword]: confirmPassword});
    } 

    console.log('Submit button called::::');
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    const { cartProducts } = this.props;
    return (
      <div className='container'>
      <Header cartProducts={cartProducts}/>
      <main className="section-form">
      <div className="row">
      <div className="col span-1-of-2 shopping-form">
        <h1>Signup</h1>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="row">
      <form onSubmit={this.handleSubmit} noValidate>
                <div className="col span-1-of-2">
                  <div className='row form-input'>
                  <label for="firstName">First Name</label>
                  <input type='text' name='firstName' size="50" placeholder="First Name" onChange={this.handleChange} aria-required="true" noValidate />
                  {errors.firstName && 
                <span className='error'>{errors.firstName}</span>}
                </div>
                 
                <div className='row form-input'>
                <label for="lastName">Last Name</label>
                <input type='text' name='lastName' size="50" placeholder="Last Name" onChange={this.handleChange} aria-required="true" noValidate />
                {errors.lastName && 
                <span className='error'>{errors.lastName}</span>}
                </div>
             
                <div className='row form-input-email'>
                <label for="email">Email</label>
                <input type='email' name='email' placeholder="Email" size="50" onChange={this.handleChange} aria-required="true" noValidate />
              {errors.email && 
                <span className='error'>{errors.email}</span>}
                </div>

                 <div className='row form-input'>
                 <label for="password">Password</label>
                 <input type='password' name='password' placeholder="Password" size="50" onChange={this.handleChange} aria-required="true" noValidate />
              {errors.password && 
                <span className='error'>{errors.password}</span>}
                  </div>

                  <div className='row form-input'>
                  <label for="confirmPassword">Confirm Password</label>
                  <input type='password'  name='confirmPassword' placeholder="Confirm Password" size="50" onChange={this.handleChange} aria-required="true" noValidate />
              {errors.confirmPassword && 
                <span className='error'>{errors.confirmPassword}</span>}
              </div>
             
              <div className="row form-input">
             <button type="submit" value="Submit" className="btn-login">Signup</button>
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

export default Register;