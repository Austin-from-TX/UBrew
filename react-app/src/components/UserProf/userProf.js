import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from ''


const UserProf = () => {

    const dispatch = useDispatch()

    useEffect() = > {
        dispatch(sessionActions.getUserById(id))
    }

    return (
        <>
          <h1>{}</h1>
        </>
    )
}