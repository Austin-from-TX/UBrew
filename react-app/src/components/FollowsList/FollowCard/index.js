import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../../store/follows'
import { Link } from 'react-router-dom'

export default function FollowCard({follow, setShowModal}){


    return(
        <>
        <div className='border-2 border-red md:flex-shrink-0 rounded-lg m-4 p-4'>
            <div className='flex justify-between '>
                <div>
                    <p className='text-brown text-lg font-black'>{follow.username}</p>
                </div>
               
                <div>
                    <Link to={`/users/${follow.id}`}>
                        <button onClick={e => setShowModal(false)} className="text-yellow bg-blue hover:bg-brown px-3 py-2 rounded-md text-xs" style={{fontFamily: 'Bourbon Grotesque'}}>View</button>
                    </Link>
                </div>
            </div>
        </div>  
        </>
    )
}