import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'


const Dashboard = () => {

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
          <h1>Hello {sessionUser.username} from Your Dashboard </h1>
        </>
    )
}

export default Dashboard