import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/auth";
import { setUser } from "../../store/session"


const LoginForm = ({ authenticated, setAuthenticated, setShowLoginModal, setShowSignUpModal }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  const history = useHistory()



  const demoLogin = async (e) => {
    e.preventDefault();
    const demoUser = await login('bru@bru.com', 'password');
    if (!demoUser.errors) {
      dispatch(setUser(demoUser))
      setAuthenticated(true);
      history.push("/");
    } else {
      setErrors(demoUser.errors);
    }
  }
  
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {

      dispatch(setUser(user));
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

  const onClick = (e) => {
    setShowLoginModal(false)
  }

  const showSignUp = (e) => {
    setShowLoginModal(false)
    setShowSignUpModal(true)
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
   
    
    <form className='flex-col space-y-4' onSubmit={onLogin}>
      <button className="btn__x" onClick={onClick}>
          <i className="fas fa-times"></i>
      </button>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}} htmlFor="email">Email</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}} htmlFor="password">Password</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className='flex'>
        <p className='mx-auto text-amber text-md font-black'>Need an account? <span>
        <button onClick={showSignUp} className='text-red text-md font-black'> Sign Up Here</button></span></p>
      </div>
      <div className='flex justify-center space-x-8'>
        <button type="submit" className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-blue hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Login</button>
        <button onClick={demoLogin} className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-amber hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Demo</button>
      </div>
      
    </form>
   
    </>
  );
};

export default LoginForm;
