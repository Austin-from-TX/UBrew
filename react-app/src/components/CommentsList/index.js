import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import CommentCard from '../CommentCard'
import * as commentActions from "../../store/comments";

export default function CommentList({brew}){

    const [loaded, setLoaded] = useState(false);
    // console.log(brew)
    const brew_id = brew.id
   
  
    const dispatch = useDispatch()
    const commentList = useSelector(state => state.comments)

    const userComments = async () => {
        await dispatch(commentActions.getComments(brew_id))
        setLoaded(true)
    }

    useEffect(() => {
      userComments()
    }, [dispatch])
    
    
    
    if (!loaded) return <span>Loading</span>;
    
      return (
        <div >
        {commentList.length ? commentList.map(comment => (
          
          <CommentCard comment={comment} />
          
          ))
        :
        <p className='m-7'>Be the first to comment on this brew!</p>}
        
        </div>
      )
    }

