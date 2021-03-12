import React, { useState} from 'react'
import {useDispatch} from 'react-redux'
import * as commentActions from '../../store/comments'

export default function EditForm({comment, setShowModal}){

    const [newComment, setComment] = useState(comment.comment)
    
    const dispatch = useDispatch()

    const onEdit = (e) => {
        e.preventDefault()
        dispatch(commentActions.editComment({id: comment.id, comment: newComment}))
        setShowModal(false)
   }
    
    return(
        <>
        <div>
            <button onClick={()=> setShowModal(false)}>Close</button>
            <textarea
                type="textarea"
                value={newComment}
                onChange={e => {setComment(e.target.value)}}
                required
                ></textarea>
            <button onClick={onEdit}>Edit Comment</button>   
        </div>
        </>
    )
}