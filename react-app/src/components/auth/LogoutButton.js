import React from "react";
import {useHistory} from 'react-router-dom'
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  
  const history = useHistory()
    
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };
  history.push('/')
  return <button onClick={onLogout} className="transition duration-500 ease-in-out text-yellow hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-md text-xl " style={{fontFamily: 'Bourbon Grotesque'}}>Logout</button>;
};

export default LogoutButton;
