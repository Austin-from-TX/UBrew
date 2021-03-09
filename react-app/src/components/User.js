import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BrewList from './BrewList'
import RotationList from './RotationList'


function User() {
  const [user, setUser] = useState({});
  const [follow, setFollow] = useState(false)

  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  // console.log('session', sessionUserId)
  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);



  if (!user) {
    return null;
  }

  return (
    <>
    
    <ul>
      
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>Brew List</strong>
      </li>
      <BrewList />
      
      <li>
        <strong>{user.username}'s Rotation:</strong>
      </li>
      <RotationList user={user}/>
    </ul>
    {sessionUser && sessionUser.id === userId ? 
      
      ( <div></div>)
        :  
    ( <button className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Follow</button> )}
    </>
  );
}
export default User;
