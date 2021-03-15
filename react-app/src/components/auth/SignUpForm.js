import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { useDispatch } from "react-redux";
import { login } from "../../services/auth";
import { setUser } from "../../store/session"

const SignUpForm = ({authenticated, setAuthenticated, setShowLoginModal, setShowSignUpModal}) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(first_name, last_name, username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

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

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const onClick = (e) => {
    setShowSignUpModal(false)
  }

  const showLogin = (e) => {
    setShowSignUpModal(false)
    setShowLoginModal(true)
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className='flex-col space-y-4' onSubmit={onSignUp}>
      <button className="btn__x" onClick={onClick}>
          <i className="fas fa-times"></i>
      </button>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>First Name</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="text"
          name="first_name"
          onChange={updateFirstName}
          value={first_name}
        ></input>
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Last Name</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="text"
          name="last_name"
          onChange={updateLastName}
          value={last_name}
        ></input>
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>User Name</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Email</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Password</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='flex justify-between'>
        <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Repeat Password</label>
        <input
          className='flex-none rounded-lg border-2 border-red'
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='flex'>
        <p className='mx-auto text-amber text-md font-black'>Already have an account? <span>
        <button onClick={showLogin} className='text-red text-md font-black'> Login Here</button></span></p>
      </div>
      <div className='flex justify-center space-x-8'>
      <button type="submit" className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-blue hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Sign Up</button>
      <button onClick={demoLogin} className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-amber hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Demo</button>
      </div>
    </form>
  );
};

export default SignUpForm;
