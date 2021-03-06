import React, {useEffect, useState} from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as brewActions from "../../store/brews";
import CustomModal from "../CustomModal"
import EditBrewForm from '../EditBrewForm'
import DeleteBrewForm from '../DeleteBrewForm'
import AddCommentForm from '../AddCommentForm'
import * as rotationActions from "../../store/rotations"
import * as commentActions from "../../store/comments"
import CommentList from '../CommentsList';

const BrewView = () => {

    const { brewId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [loaded, setLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [showBrewModal, setShowBrewModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
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

 
        const clickHandler = e => {
            console.log('Delete Button Clicked')
            setShowDeleteModal(true)
        }

    if (!loaded) return <span>Loading</span>;
    
    return (
        <>
            <CustomModal showModal={showModal}>
                <AddCommentForm setShowModal={setShowModal} brew={currentBrew}/>
            </CustomModal>
            <CustomModal showModal={showBrewModal}>
                <EditBrewForm setShowBrewModal={setShowBrewModal} brew={currentBrew}/>
            </CustomModal>
            <CustomModal showModal={showDeleteModal}>
                <DeleteBrewForm setShowDeleteModal={setShowDeleteModal} brew={currentBrew}/>
            </CustomModal>
            <div className="grid grid-flow-col grid-cols-3 grid-rows-auto my-12 mx-16 gap-12 border-brown flex-col">   
                <div className='m-4 p-2'>
                    <h1 className='text-5xl text-brown-light font-medium '>{currentBrew.brew_name}</h1>
                    <Link to={`/users/${currentBrew.user_id}`}><p className='font-black text-brown-light text-xl mt-4'>Created By: {currentBrew.users}</p></Link>
                    <img className='w-96 h-102 mt-6 rounded-xl' src={currentBrew.photos[0].url} alt="brewImage" />
                    <p className='mt-8 text-brown-light text-lg'><strong>Description: </strong>{currentBrew.description}</p>
                    <div>
                    {sessionUser.id !== currentBrew.user_id ? (
                        <div className='flex-col space-y-10 m-6'>
                            <p className='text-red text-lg font-black'>Like the Sound of this Brew? </p>
                            <button onClick={addToRot} className="justify-self-center transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}> Add To Rotation</button>
                        </div>)
                            :(
                        <div className='flex m-6 space-x-20'>
                            <button onClick={e => setShowBrewModal(true)} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}>Edit</button>
                            <button onClick={clickHandler} className=" m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}}>Delete</button>
                        </div>    
                    )}
                    </div>
                </div>
                <div className='m-8 p-12 space-y-8'>
                    <div>
                        <p className='text-2xl font-medium pb-4'><strong className='text-brown-light font-black'>Stats: </strong></p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Style: </strong> {currentBrew.style}</p>
                        <p className='text-lg font-medium text-brown'> <strong className='text-brown-light'>Original Gravity: </strong>{currentBrew.original_grav}</p>
                        <p className='text-lg font-medium text-brown'> <strong className='text-brown-light'>Final Gravity: </strong>{currentBrew.final_grav}</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Ferm Temp:</strong> {currentBrew.ferm_temp}°F</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Primary: </strong>{currentBrew.primary_len}</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Secondary:</strong> {currentBrew.secondary_len}</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>ABV: </strong>{currentBrew.abv}%</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Bitterness:</strong> {currentBrew.ibu} IBU</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Color:</strong> {currentBrew.srm} SRM</p>
                    </div>
                    <div className='space-y-2'>
                        <p className="text-2xl text-brown-light font-black pb-4">Ingredients:</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Grain Bill: </strong>{currentBrew.grain_bill}</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Hops List: </strong>{currentBrew.hop_list}</p>
                        <p className='text-lg font-medium text-brown'><strong className='text-brown-light'>Yeast: </strong>{currentBrew.yeast}</p>
                    </div>
                    <div className=''>
                        <p className="text-2xl text-brown-light font-black pb-4">Instructions</p>
                        <article className='text-lg font-medium text-brown'>{currentBrew.instructions}</article>
                    </div>
                </div>
                <div className='flex-col items-stretch w-6/8 p-8 border-l-4 border-brown'>
                    <p className='text-3xl text-brown-light font-medium' >Comments</p>
                    < CommentList brew={currentBrew} />
                    <button onClick={() => setShowModal(true)} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-3 py-2 rounded-md text-xs"   style={{fontFamily: 'Bourbon Grotesque'}}>Add Comment </button>
                </div>
            </div>  
            {/* <Instructions instructions={currentBrew.instructions} /> */}
            
        </>
    )
}

export default BrewView