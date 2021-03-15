import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import CustomModal from '../CustomModal'
import EditCommentForm from '../EditCommentForm'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import * as commentActions from '../../store/comments'


export default function CommentCard({comment}){

    const sessionUser = useSelector(state => state.session.user)

    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

     
   const onDelete = (e) => {
        e.preventDefault()
        dispatch(commentActions.deleteComment({id: comment.id}))
   }

    return (
        <>
        <CustomModal showModal={showModal}> 
            <EditCommentForm comment={comment} setShowModal={setShowModal}/>
        </CustomModal>
        <div className='flex-col w-full self-center m-4 border-2 border-red p-4 pb-1 rounded-lg box-border bg-gray shadow-xl' >
            <div className='space-y-4'>
                <p className='text-lg font-medium text-brown-light'>{comment.comment}</p>
                <p className='text-sm text-brown-light'>{<Link to={`/users/${comment.user_id}`}>{comment.username}</Link>}</p>
                <p className='text-xs text-brown-light'>{comment.created_at}</p>  
            </div>
            <div>        
            {sessionUser.id === comment.user_id && 
            <div className='flex'>
                <div>
                    <button onClick={()=> setShowModal(true)} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-2 py-1 rounded-md text-xs"   style={{fontFamily: 'Bourbon Grotesque'}} >Edit Comment</button>
                </div>
                <div>
                    <button onClick={onDelete} className="m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-2 py-1 rounded-md text-xs"  style={{fontFamily: 'Bourbon Grotesque'}}>Remove</button>
                </div>
            </div>
            }
            </div>  
            
        </div>
        </>
    )
}