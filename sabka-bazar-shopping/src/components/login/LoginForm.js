import React from "react";
import { Field, reduxForm } from "redux-form";
import { push } from "connected-react-router";
import { connect } from "react-redux";

export const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i;
export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = inputs => {
  const errors = {};
  if (!inputs.email) {
    errors.email = "Enter your Email";
  } else if (!emailRegExp.test(inputs.email)) {
    errors.username = "Invalid email address";
  }
  if (!inputs.password) {
    errors.password = "Enter your Password";
  } else if (inputs.password.length < 6) {
    errors.password = "Minimum length 6 characters";
  } else if (!passwordRegExp.test(inputs.password)) {
    errors.password = "Must have a number and alphabet only";
  }
  return errors;
};

const submit = (values, changePage) => {
  changePage("/");
};

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, changePage } = this.props;
    return (
      <form
        onSubmit={handleSubmit(values => {
          submit(values, changePage);
        })}
        noValidate
      >
        <Field name="email" component="input" type="text" placeholder="Email" />
        <Field
          name="password"
          component="input"
          type="text"
          placeholder="Password"
        />
        <button type="submit" label="submit">
          Submit
        </button>
      </form>
    );
  }
}

// LoginForm = reduxForm({
//   form: "Login",
//   validate
// })(LoginForm);

// const mapStateToProps = state => {
//   return {};
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     changePage: url => dispatch(push(url))
//   };
// };

export default LoginForm;
