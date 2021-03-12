import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as followActions from '../store/follows'
import BrewList from './BrewList'
import RotationList from './RotationList'


function User() {
  const [user, setUser] = useState({});
  const [follows, setFollows] = useState()


  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userFollows = useSelector(state => state.follows.userFollows)

 
  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      dispatch(followActions.getFollowerList({user_id: sessionUser.id}))
      setUser(user);
    })();
  }, [userId]);

  if (userFollows.includes(user)){
    setFollows(true)
  }

  const addFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.newFollow({follower_id: sessionUser.id, followed_id: userId}))

  }

  // if(!followUser) return <div>Loading</div>

  if (!user) {
    return null;
  }

  return (
    <p>
    
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
      
      
      
    </ul>
    {sessionUser && sessionUser.id == userId ? 
      
      ( <div></div>)
        :  
        <div>
        <p>See what {user.username} has got brewing </p>
        <button>View {user.username}'s Rotation </button>
        {follows ? 
        <button  onClick={addFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>UnFollow</button> 
        :
        <button  onClick={addFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Follow</button> 
        }
      </div>
      }
    </p>
  );
}
export default User;
