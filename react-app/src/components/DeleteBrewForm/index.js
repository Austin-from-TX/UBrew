import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as brewActions from '../../store/brews'

export default function DeleteBrewForm({setShowDeleteModal, brew}){

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteRecipe = async e => {
        e.preventDefault()
        await dispatch(brewActions.removeBrew({id: brew.id}))
        history.push(`/dashboard`)
    }

    return(
        <>
        <div>
        <p>Do you really want to make the world a darker place by deleting this awesome brew?</p>
        <button onClick={e => setShowDeleteModal(false)}>Cancel</button>
        <button onClick={deleteRecipe}>Delete</button>
        </div>
        </>
    )
}