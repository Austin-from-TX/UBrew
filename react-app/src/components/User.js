import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

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
      {user.brews && user.brews.map(brew => (
        <li>
          <strong><Link to={`/brews/${brew.id}`}>{brew.brew_name}</Link></strong>
        </li>
      ))}
    </ul>
  );
}
export default User;
