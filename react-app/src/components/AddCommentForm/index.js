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
        <button onClick={()=> setShowModal(false)}>Close</button>
        <textarea
            type="textarea"
            value={comment}
            placeholder='Enter Your Comment Here'
            onChange={(e)=> setComment(e.target.value)}
            required
            ></textarea>
        <button onClick={onAdd}>Add Comment</button>   
        </>
    )
}
