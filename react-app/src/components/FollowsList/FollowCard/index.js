import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../../store/follows'
import { Link } from 'react-router-dom'

export default function FollowCard({follow}){

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const unfollow = (follower_id, following_id) => {
        console.log('unfollow from button', sessionUser.id)
        dispatch(followActions.removeFollower({follower_id: follow.id, following_id: sessionUser.id}))
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