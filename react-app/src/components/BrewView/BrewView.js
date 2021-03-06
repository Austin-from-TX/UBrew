import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as brewActions from "../../store/brews";

const BrewView = () => {

    const { brewId } = useParams()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    const [updateView, setUpdateView] = useState(false);


    const currentBrew = useSelector(state => state.brew.currentBrew)

    const getBrewInfo = async () => {
        await dispatch(brewActions.getBrew(brewId))
        setLoaded(true)
    }

    useEffect(() => {
        getBrewInfo()
    }, [updateView])

    if (!loaded) return <span>Loading</span>;
    
    return (
        <>
            <h1>{currentBrew.brew_name}</h1>
            <img src={currentBrew.photos[0].url} alt="brewImage" />
        </>
    )
}

export default BrewView