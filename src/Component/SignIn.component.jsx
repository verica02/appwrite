import React from "react";

import CustomButton from "../Utils/CustomButton";
import FormInput from "../Utils/FormInput";
import { loginUser, signInWithGoogle} from "../appwrite/appwrite.auth";

import './SignIn.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    loginUser(email, password).then(
      (res) =>{
          console.log(res);
          window.location.reload();
      },
      (err) =>alert(err)
    );
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Sign in</h2>
        

        <form className = " form" onSubmit={this.handleSubmit}>
          <FormInput className="form-input"
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput className="form-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            
            <CustomButton className = "button1" type="submit">Sign In </CustomButton>
            
            
            <CustomButton className = "button2" onClick={signInWithGoogle} isGoogleSignIn>
              {""}
              Sign in with google {""}
            </CustomButton>
            

            
          </div>
        </form> 
        
      
      </div>
    );
  }
}

export default SignIn;
