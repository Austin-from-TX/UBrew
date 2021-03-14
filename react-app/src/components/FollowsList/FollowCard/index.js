import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../../store/follows'
import { Link } from 'react-router-dom'

export default function FollowCard({follow}){

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const unfollow = (follower_id, following_id) => {
        console.log('unfollow from button', follow.id)
        dispatch(followActions.removeFollower({follower_id: sessionUser.id, followed_id: follow.id}))
    }

    return(
        <>
        <div className='flex  border md:flex-shrink-0 rounded-lg m-4 p-4 justify-between'>
           <Link to={`/users/${follow.id}`}>
            <div className='flex space-x-2'>
                <p>{follow.username}</p>
                <p>({follow.first_name} {follow.last_name})</p>
            </div>
            </Link>
           <div>
            <button onClick={unfollow} className=''>UnFollow</button>
            </div>
        </div>  
        </>
    )
}