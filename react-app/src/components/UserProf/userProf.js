import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../store/follows'
import FollowsList from '../FollowsList'
import FollowersList from '../FollowersList'
import CustomModal from '../CustomModal'
import UserFeed from '../UserFeed'


const UserProf = () => {

    const [loaded, setLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const followed = useSelector(state => state.follows.userFollows)
    const followers = useSelector(state => state.follows.userFollowers)

    
    const getFollowers = async () => {
      await dispatch(followActions.getFollowerList({user_id: user.id}))
      setLoaded(true)
    }
    
    useEffect(() => {
      getFollowers()
    }, [dispatch])
    
    // console.log('followers', followers)
    // console.log('followed', followed)

    if (!loaded) return <span>Loading</span>;

    return (
        <>
          <h1>Hello {user.username} from Your User Page </h1>
          {/* <button onClick={e => setShowModal(true)} >See Who Follows You</button>
          <div>
          <CustomModal showModal={showModal} >
            <FollowersList followers={followers} setShowModal={setShowModal} /> 
          </CustomModal>
          </div> */}
          <div>
         <button onClick={e => setShowModal(true)} >See Who You're Following </button>
         <CustomModal showModal={showModal} >
          <FollowsList follows={followed} setShowModal={setShowModal} /> 
          </CustomModal>
          </div>
          <UserFeed />



          {/* //Fire query to my followers and diplay in order by updated_at*/}
        </>
    )
}

export default UserProf