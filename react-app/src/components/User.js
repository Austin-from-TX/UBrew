import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as followActions from '../store/follows'
import * as rotationActions from '../store/rotations'
import BrewList from './BrewList'
import {Link} from 'react-router-dom'
import CustomModal from '../components/CustomModal'
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
  const rotations = useSelector(state => state.rotation.rotations)


  const [showModal, setShowModal] = useState(false);
  const [follows, setFollows] = useState('');

 
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
  
  useEffect(()=> {
    dispatch(rotationActions.getRotations(userId))
  }, [dispatch])

  const addFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.newFollow({follower_id: sessionUser.id, followed_id: userId}))

  }
 
  const unFollow = async e => {
    e.preventDefault()
    await dispatch(followActions.removeFollower({follower_id: sessionUser.id, followed_id: userId}))

  }

  const clickHandler = (e, type) => {
    e.preventDefault()
    setFollows(type)
    setShowModal(true)
  }

  const followed = userFollows.filter(user => user.id == userId)
  
  if (!user) {
    return null;
  }
  if(!userFollows) return <div>Loading</div>
  if(!rotations) return <div>Loading</div>

  // const followed = userFollows.filter(user => (
  //   user.id == userId
  // ))

  return (

    <>
    
    <CustomModal showModal={showModal} >
      <FollowsList follows={follows === "followed" ? profFollows : profFollowing } setShowModal={setShowModal} /> 
    </CustomModal>
         
    <div className="grid grid-flow-col grid-cols-4 grid-rows-auto m-8 gap-1 border-brown flex-col">
      <div>
        <div className='flex items-center'>
          <p className='text-5xl text-brown-light font-black'> {user.username}</p>
          {sessionUser && sessionUser.id == userId ?       
          ( <div></div>)
            :  
            <div className='m-10'>
              {followed.length ?
              <button  onClick={unFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-xl text-lg" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>UnFollow</button> 
              :
              <button  onClick={addFollow} className="transition duration-500 ease-in-out text-yellow bg-blue hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-xl text-xl" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>Follow</button> 
              }
        </div>
      }
        </div>
        <p className='mb-8 font-black text-brown-light text-2xl'>({user.first_name} {user.last_name})</p>
        
        <p className='m-4 text-brown-light text-lg font-black'>{user.username} has <span>
          <button className="transition duration-500 ease-in-out bg-amber text-yellow hover:bg-brown hover:text-yellow-dark px-2 py-1 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}} onClick={(e) => clickHandler(e, "following")}>
              {profFollowing.length} followers
          </button></span>
        </p>
        <p className='m-4 text-brown-light text-lg font-black'> and is <span>
            <button className=" transition duration-500 ease-in-out bg-amber text-yellow hover:bg-brown hover:text-yellow-dark px-2 py-1 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}} onClick={(e) => clickHandler(e, "followed")}>
            following {profFollows.length} 
            </button></span> brewers 
        </p>
        
       
       
        <div>
          <p className='text-xl font-black mt-8 ml-14 mb-8 text-brown'>{user.username}'s Current Rotation</p>
          {sessionUser.id == userId && <button> Manage Rotation </button>}
          {rotations.map(rotation => (
            <div className='flex border-2 p-4 justify-around m-2 w-full rounded-xl border-brown'>
              <div>
                <img className='h-20 w-20 rounded-full' src={rotation.brew.photos[0].url}></img>
              </div>
              <Link to={`/brews/${rotation.brew_id}`}><p className='text-brown-light text-lg mt-4'>{rotation.brew.brew_name}</p></Link>
              <p className='text-brown-light text-lg font-black mt-4'>{rotation.status}</p>
            </div>
          ))}
        </div>

      </div>
      <div className='grid-flow-col col-start-2 col-end-5 justify-items-stretch'>
        <div className='flex'>
          <p className='mx-auto text-3xl text-brown-light font-black'>{user.username}'s Own Brews</p>
        </div>
        <BrewList />
      </div>
    </div>   
  </>
  );
}
export default User;
