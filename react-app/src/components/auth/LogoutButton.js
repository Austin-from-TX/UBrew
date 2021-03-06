import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button onClick={onLogout} className="text-yellow hover:bg-brown hover:text-amber px-6 py-4 rounded-md text-xl " style={{fontFamily: 'Bourbon Grotesque'}}>Logout</button>;
};

export default LogoutButton;
