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
        <div className='flex w-2/3 self-center m-8 border-2 border-red rounded-lg' >
            <p>{comment.comment}</p>
            <p>{comment.username}</p>
            <p>{comment.created_at}</p>            
            {sessionUser.id === comment.user_id && 
            <div>
                <div className='flex-col flex-1 p-2 m-4 space-y-6 self-center text-center'>
                    <button onClick={()=> setShowModal(true)} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}} >Edit Comment</button>
                </div>
                <div className="m-8 self-center">
                    <button onClick={onDelete} className="m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-4 py-3 rounded-md text-sm"  style={{fontFamily: 'Bourbon Grotesque'}}>Remove</button>
                </div>
            </div>
            }
            
        </div>
        </>
    )
}