import React, {useEffect, useState} from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as brewActions from "../../store/brews";
import * as rotationActions from "../../store/rotations"

const BrewView = () => {

    const { brewId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [loaded, setLoaded] = useState(false);
    const [updateView, setUpdateView] = useState(false);
   
    const currentBrew = useSelector(state => state.brew.currentBrew)
    const sessionUser = useSelector(state => state.session.user)

    const getBrewInfo = async () => {
        await dispatch(brewActions.getBrew(brewId))
        setLoaded(true)
    }

    useEffect(() => {
        getBrewInfo()
    }, [updateView])

    const addToRot = async e => {
        e.preventDefault()
        await dispatch(
            rotationActions.addRotation({
                user_id: sessionUser.id,
                brew_id: brewId,
                status: "Will Brew Soon..."
            }))
        
         history.push(`/rotations/${sessionUser.id}`) 
    }

    const editRec = async e => {
        e.preventDefault()
        
    }

    if (!loaded) return <span>Loading</span>;
    
    return (
        <>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 border-4 border-brown flex-col">   
                <div className='m-4 p-2'>
                    <h1 className='text-5xl text-brown-light font-medium '>{currentBrew.brew_name}</h1>
                    <img className='w-80 h-85 mt-6 rounded-xl' src={currentBrew.photos[0].url} alt="brewImage" />
                </div>
                {sessionUser.id !== currentBrew.user_id ? (
                <div className='flex-col space-y-10 m-6'>
                    <p className='text-brown-light text-lg'><strong>Description: </strong>{currentBrew.description}</p>
                    <p className='text-red text-lg font-black'>Like the Sound of this Brew? </p>
                    <button onClick={addToRot} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}> Add To Rotation</button>
                </div>)
                    :(
                <div className='flex-col space-y-10 m-6'>
                    <p className='text-brown-light text-lg'>Want to make changes or remove your recipe?  Do so here: </p>
                    <button onClick={editRec} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}>Edit</button>
                    <button onClick={deleteRec} className=" m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}>Delete</button>
                </div>    
                )}
                <div className='m-8 p-12'>
                    <Link to={`/users/${currentBrew.user_id}`}><p className='font-black text-brown-light text-xl'>Creator: {currentBrew.users}</p></Link>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Style: </strong> {currentBrew.style}</p>
                    <p className='text-lg font-medium'> <strong className='text-brown-light'>Original Gravity: </strong>{currentBrew.original_grav}</p>
                    <p className='text-lg font-medium'> <strong className='text-brown-light'>Final Gravity: </strong>{currentBrew.final_grav}</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Temperature:</strong> {currentBrew.ferm_temp}°F</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Primary: </strong>{currentBrew.primary_len}</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Secondary:</strong> {currentBrew.secondary_len}</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>ABV: </strong>{currentBrew.abv}%</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Bitterness:</strong> {currentBrew.ibu} IBU</p>
                    <p className='text-lg font-medium'><strong className='text-brown-light'>Color:</strong> {currentBrew.srm} SRM</p>
                </div>
                <div className='-mt-4'>
                    <p className="text-2xl text-brown-light font-black">Instructions</p>
                    <article className='prose'>{currentBrew.instructions}</article>
                </div>
            </div>  

            {/* <Instructions instructions={currentBrew.instructions} /> */}
            
        </>
    )
}

export default BrewView