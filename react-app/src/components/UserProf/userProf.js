import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../store/follows'
import * as rotationActions from '../../store/rotations'
import FollowsList from '../FollowsList'
import CustomModal from '../CustomModal'
import UserFeed from '../UserFeed'


const UserProf = () => {

    const [loaded, setLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [follows, setFollows] = useState('');

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const followed = useSelector(state => state.follows.userFollows)
    const followers = useSelector(state => state.follows.userFollowers)
    const feed = useSelector(state => state.rotation.feed)
    
    const getState = async () => {
      await dispatch(followActions.getFollowerList({user_id: user.id}))
      await dispatch(rotationActions.getFeedRotation(user.id))
      
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

    return (
        <>  
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
         {/* <CustomModal showModal={showFollowersModal} >
          <FollowsList follows={followed} setShowModal={setShowFollowersModal} /> 
          </CustomModal> */}
         
          <UserFeed feed={feed}/>



          {/* //Fire query to my followers and diplay in order by updated_at*/}
        </>
    )
}

export default UserProf