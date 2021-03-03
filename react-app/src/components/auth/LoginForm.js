import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '35px'}}>UBrew </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Home </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Brews </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Rotation </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Search </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Follow </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Submit </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Login </h1>
    <h1 style={{fontFamily: 'Bourbon Grotesque', fontSize: '20px'}}>Logout </h1>
    <h1 style={{fontFamily: 'Lato', fontSize: '26px'}}>Welcome to UBrew! The App That Keeps Your Brews On Track! </h1> 
    <h1 style={{fontFamily: 'Lato', fontSize: '20px'}}>Let's get Brewing! </h1>
    <p style={{fontFamily: 'Biryani', fontSize: '18px'}}>First get started by uploading some of your favorite Brew Recipe's!  Don't have any recipe's to uplaod just yet? <br></br> No problem!  Try searching for recipe's from other users.  You can add them to your Brewing Rotation list.<br></br> If you enjoy their recipe, be sure to let the Brewer know through the comments. Then give them a follow for <br></br>other great Brews they might come up with later! <br></br>
    Before long, you might just get some followers of your own! </p>
    
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}} htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label style={{fontFamily: 'URW Gothic', fontSize: 'large'}} htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
