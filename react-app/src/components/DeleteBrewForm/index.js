import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as brewActions from '../../store/brews'

export default function DeleteBrewForm({setShowDeleteModal, brew}){

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteRecipe = async e => {
        e.preventDefault()
        setShowDeleteModal(false)
        await dispatch(brewActions.removeBrew({id: brew.id}))
        history.push(`/`)
    }

    return(
        <>
        <div className='flex-col space-y-4'>
            <div className='flex'>
                <p className='mx-auto text-4xl text-red-light font-black'>Hold Up!</p>
            </div>
            <p className='text-brown text-lg'>Do you really want to make the world a darker place by deleting this awesome brew?</p>
            <div className='flex justify-center space-x-12'>
                <button onClick={e => setShowDeleteModal(false)} className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-blue hover:bg-brown-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Cancel</button>
                <button onClick={deleteRecipe} className="transition duration-500 ease-in-out flex items-center justify-center px-4 py-2 text-md rounded-md text-yellow bg-red hover:bg-red-light hover:text-yellow-dark" style={{fontFamily: 'Bourbon Grotesque'}}>Delete</button>
            </div>
        </div>
        </>
    )
}