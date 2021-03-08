import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as brewActions from "../../store/brews";
// import Instructions from ../Instructions;

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
            <img className='w-80 h-85' src={currentBrew.photos[0].url} alt="brewImage" />
            <p>Creator: <Link to={`/users/${currentBrew.user_id}`}>{currentBrew.users}</Link></p>
            <p>Style: {currentBrew.style}</p>
            <p>Description: {currentBrew.description}</p>
            <p>Original Gravity: {currentBrew.original_grav}</p>
            <p>Final Gravity: {currentBrew.final_grav}</p>
            <p>Primary: {currentBrew.primary_len}</p>
            <p>Secondary: {currentBrew.secondary_len}</p>
            <p>ABV: {currentBrew.abv}%</p>
            <p>Bitterness: {currentBrew.ibu} IBU</p>
            <p>Color: {currentBrew.srm} SRM</p>
            <p>Temperature: {currentBrew.ferm_temp}°F</p>
            <div>Instructions: {currentBrew.instructions}</div>


            {/* <Instructions instructions={currentBrew.instructions} /> */}
            
        </>
    )
}

export default BrewView