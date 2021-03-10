import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'


const UserProf = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    return (
        <>
          <h1>Hello {user.username} from Your User Page </h1>


          //Fire query to my followers 
        </>
    )
}

export default UserProf