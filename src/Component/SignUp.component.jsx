import React from "react";
import CustomButton from "../Utils/CustomButton";
import FormInput from "../Utils/FormInput";
import "./SignUp.styles.scss";
import { createUser } from "../appwrite/appwrite.auth";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const displayName = this.state.displayName;
    createUser(email, password, displayName).then(
      (res) => {
        console.log(res);
        alert(`Congratulations ${res['name']} You've successfully Signed In Login to continue!`)
        window.location.reload();
      },
      (err) => alert(err.message)
    );
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>Sign up</h2>
       
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
