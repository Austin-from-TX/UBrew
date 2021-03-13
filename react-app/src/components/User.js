import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as followActions from '../store/follows'
import BrewList from './BrewList'
import {Link} from 'react-router-dom'
import RotationList from './RotationList'


function User() {
  const [user, setUser] = useState({});
  


  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userFollows = useSelector(state => state.follows.userFollows)

  console.log('userFollows', userFollows)
 
  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
      await dispatch(followActions.getFollowerList({user_id: sessionUser.id}))
    })();
  }, [userId]);



  const addFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.newFollow({follower_id: sessionUser.id, followed_id: userId}))

  }
 
  const unFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.removeFollower({follower_id: sessionUser.id, following_id: userId}))

  }

  const followed = userFollows.filter(user => user.id == userId)
  
  if (!user) {
    return null;
  }
  if(!userFollows) return <div>Loading</div>

  // const followed = userFollows.filter(user => (
  //   user.id == userId
  // ))

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
        <Link to={`/rotations/${user.id}`}>
          <button>View {user.username}'s Rotation </button>
        </Link>
        {followed.length ?
        <button  onClick={unFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>UnFollow</button> 
        :
        <button  onClick={addFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Follow</button> 
        }

        {/* {followed.length ?
          <button> UnFollow </button> :
          <button> Follow </button>
    } */}

      </div>
      }
    </p>
  );
}
export default User;
