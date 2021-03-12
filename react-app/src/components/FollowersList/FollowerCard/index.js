import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../../store/follows'

export default function FollowerCard({follower}){

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    console.log('sessionUser', sessionUser.id)

    const unfollow = (follower_id, following_id) => {
        console.log('unfollow from button', sessionUser.id)
        dispatch(followActions.removeFollower({follower_id: follower.id, following_id: sessionUser.id}))
    }

    return(
        <>
        <div className='flex border rounded-lg m-4 p-4 justify-between'>
            <div className='flex space-x-2'>
                <p>{follower.username}</p>
                <p>({follower.first_name} {follower.last_name})</p>
            </div>
            <button onClick={unfollow} className=''>UnFollow</button>
        </div>  
        </>
    )
}