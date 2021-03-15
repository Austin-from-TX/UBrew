import React, {useEffect, useState} from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import * as followActions from '../../store/follows'
import * as rotationActions from '../../store/rotations'
import FollowsList from '../FollowsList'
import CustomModal from '../CustomModal'
import UserFeed from '../UserFeed'
import brew from '../photos/perfect-brew.jpg'


const UserProf = () => {

    const [loaded, setLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [follows, setFollows] = useState('');

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    // const followed = useSelector(state => state.follows.userFollows)
    // const followers = useSelector(state => state.follows.userFollowers)
    // const feed = useSelector(state => state.rotation.feed)

    const user_id = user.id
    
    const getState = async () => {
      await dispatch(followActions.getFollowerList({user_id}))
      await dispatch(rotationActions.getFeedRotation(user_id))
      
      setLoaded(true)
    }
  
   
    
    useEffect(() => {
      getState()
    }, [dispatch])
    
    const clickHandler = (e, type) => {
      e.preventDefault()
      setFollows(type)
      setShowModal(true)
    }

    if (!loaded) return <span>Loading</span>;
    if (user) return <Redirect to={`/users/${user.id}`} />
    return (
        <>  
          {/* <div className='absolute'>
          <h1>Hello {user.username} from Your User Page </h1>
          <button onClick={(e) => clickHandler(e, "followers")} >See Who Follows You</button>
          <div>
          <CustomModal showModal={showModal} >
            <FollowsList follows={follows === "followed" ? followed : followers } setShowModal={setShowModal} /> 
          </CustomModal>
          </div>
          <div>
         <button onClick={(e) => clickHandler(e, "followed")} 
        >See Who You're Following </button>
         </div>

          <Link to={`/brews/add/new`}>Add A Brew</Link>
        </div>
         <img className='object-cover' src={brew} alt='perfect-brew'></img> */}
        </>
    )
}

export default UserProf