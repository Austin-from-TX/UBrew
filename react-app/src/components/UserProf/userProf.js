import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../store/follows'


const UserProf = () => {

    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    
    const getFollowers = async () => {
      console.log('from the dispatch', user.id)
      await dispatch(followActions.getFollowerList({user_id: user.id}))
      setLoaded(true)
    }
    
    useEffect(() => {
      getFollowers()
    }, [dispatch])
    
    // const followList = useSelector(state => state.follow.userFollows)


    if (!loaded) return <span>Loading</span>;

    return (
        <>
          <h1>Hello {user.username} from Your User Page </h1>
          {/* <UserFeed /> 
          <ViewFollowers /> */}



          {/* //Fire query to my followers and diplay in order by updated_at*/}
        </>
    )
}

export default UserProf