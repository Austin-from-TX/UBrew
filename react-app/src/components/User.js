import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as followActions from '../store/follows'
import BrewList from './BrewList'
import {Link} from 'react-router-dom'
import RotationList from './RotationList'
import FollowsList from "./FollowsList";


function User() {
  const [user, setUser] = useState({});
  


  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userFollows = useSelector(state => state.follows.userFollows)
  const profFollows = useSelector(state => state.follows.profFollows)
  const profFollowing = useSelector(state => state.follows.profFollowing)

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


  useEffect(()=> {
    dispatch(followActions.getProfFollows({user_id: userId}))
  }, [dispatch])

  const addFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.newFollow({follower_id: sessionUser.id, followed_id: userId}))

  }
 
  const unFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.removeFollower({follower_id: sessionUser.id, followed_id: userId}))

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
    <div className="grid grid-flow-col grid-cols-4 grid-rows-auto m-8 gap-1 border-brown flex-col">
      <div>
        <p><strong>Username</strong> {user.username}</p>
        <p><strong>Email</strong> {user.email}</p>
        {sessionUser && sessionUser.id == userId ?       
      ( <div></div>)
        :  
        <div>
          {followed.length ?
          <button  onClick={unFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>UnFollow</button> 
          :
          <button  onClick={addFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-6 py-4 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Follow</button> 
          }
          <Link to={`/rotations/${user.id}`}>
            <button>View {user.username}'s Rotation </button>
          </Link>
        </div>
      }
      {!profFollowing.length && 
        <p>{user.username} has {profFollowing.length} followers </p>
      }
      </div>
      <div className='col-start-2 col-end-5'>
        <strong>Brew List</strong>
        <BrewList />
      </div>
    </div>   
     
  );
}
export default User;
