import React, { useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as commentActions from '../../store/comments'

export default function AddCommentForm({setShowModal, brew}){

    const sessionUser = useSelector(state => state.session.user)
    
    const [comment, setComment] = useState('')
    
    const dispatch = useDispatch()

    const onAdd = (e) => {
        e.preventDefault()
        dispatch(commentActions.addComment({brew_id: brew.id, user_id: sessionUser.id, comment}))
        setShowModal(false)
   }
    
    return(
        <>
            <div>
                <button className="btn__x" onClick={()=> setShowModal(false)}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        <div className='w-11/12'>
            <div className=''>
            <div>
                <textarea
                    className=' w-full border-2 border-red rounded-xl p-4 m-4'
                    type="textarea"
                    value={comment}
                    placeholder='Enter Your Comment Here'
                    onChange={(e)=> setComment(e.target.value)}
                    required>
                </textarea>
            </div>
            <div className='flex'>
                <button onClick={onAdd} className="mx-4 transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-blue hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Add Comment</button>   
            </div>
            </div>
        </div>
        </>
    )
}
