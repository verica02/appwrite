import React from "react";
import SignInAndSignUpPage from "./SignInAndSignUp";
import { getCurrentUser } from "./appwrite/appwrite.auth";
import Homepage from "./Homepage";
import { logoutUser } from "./appwrite/appwrite.auth";

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    getCurrentUser().then(
      (res) => {
        this.setState({ user: res["$id"] });
        console.log(res);
      },
      (err) => {
        console.log(err);
        this.setState({
          user: null,
        });
      }
    );
  }

  DeleteSession = ()=> {
    logoutUser().then(
      (res) => {
        this.setState({ user: null });
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        {this.state.user === null ? (
          <SignInAndSignUpPage></SignInAndSignUpPage>
        ) : (
          <Homepage logOut={this.DeleteSession} />
        )}
      </div>
    );
  }
}

export default App;
