import React from "react";
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
// import * as brewActions from '../../store/brews'


const SearchBar = () => {

    // const brewList = useSelector(state => state.brews.brews)
    // const [keyWord, setSetKeyWord] = useState('')
    // const [filtered, setFiltered] = useState([])

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(brewActions.getAllBrews())
    // }, [dispatch])

    // useEffect(() => {
    //     setFiltered(
    //         brewList.filter(brew => {
    //             return brew.style.toLowerCase().includes(keyWord.toLowerCase()) 
    //         })
    //     )
    // }, [keyWord, brewList])

    return (
        <>
            <div className="border-4 border-red rounded-xl flex m-4 max-w-6xl self-center">
                <input className='flex-grow focus:outline-none rounded-md' type="text" placeholder="Find Your Next Brew"></input>
                       
            </div>  
        </>
    )
}

export default SearchBar;
