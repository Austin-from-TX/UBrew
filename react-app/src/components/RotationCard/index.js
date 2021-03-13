import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as rotationActions from '../../store/rotations'

const STATUS = [
    "Bottom's Up!",
    "Conditioning",
    'In Primary',
    'In Secondary',
    'On Deck', 
    'Will Brew Soon...'
]

export default function RotationCard({photo, 
                                    rotation_status, 
                                    rotation_id, 
                                    brew_name, 
                                    user_id, 
                                    creator, 
                                    brew_id, 
                                    creator_id,
                                    abv,
                                    ibu,
                                    srm
                                        }){

    
    const [status, setStatus] = useState(rotation_status)

    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const onEdit = (e) => {
        e.preventDefault()
        dispatch(rotationActions.updateStatus({id: rotation_id, user_id, status}))
   }
    
   const onDelete = (e) => {
        e.preventDefault()
        dispatch(rotationActions.removeRotation({user_id, rotation_id}))
   }

    return (
        <>
        <div className='flex w-2/3 mx-auto m-8 border-2 border-red rounded-xl overflow-hidden' >
            
            <div className='md:flex'>
                <div className='flex-shrink'>
                    <img className='h-full w-full object-cover md:w-48' src={photo} alt='beer_img' />
                </div>
                <div className='flex-1 flex-col p-10 space-y-6 text-left'>
                        <Link to={`/brews/${brew_id}`}><p className='font-black text-brown text-2xl'>{brew_name} </p></Link>
                        <Link to={`/users/${creator_id}`}><p className='font-black text-brown-light text-md'>Creator: {creator} </p></Link>
                    <div className='flex space-x-4'>
                        <p className="text-xs font-black text-brown-light">ABV: {abv}%</p>
                        <p className="text-xs font-black text-brown-light">IBU: {ibu}</p>
                        <p className="text-xs font-black text-brown-light">SRM: {srm}</p>
                    </div>
                    <p className='font-black text-red text-lg'>Status: {rotation_status} </p>
                    {/* <button className="transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm" role="menuitem"  style={{fontFamily: 'Bourbon Grotesque'}}>View Recipe</button> */}
                </div>
                <div  className='flex-col flex-1 p-2 m-4 space-y-6 self-center text-center'>
                {sessionUser.id == user_id && (
                <>
                    <label className='font-black text-brown-light'> Select Status</label>
                        <select
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            className='rounded-lg text-brown font-medium focus:ring-red'
                        >
                        {STATUS.map(stat => (
                            <option
                            className="text-brown font-medium"
                            key={stat}
                            >
                            {stat}
                            </option>
                        ))}
                        </select>
                </>
                )}
                </div>
                <div className='flex-col p-2 m-4 space-y-6 self-center text-center'>
                {sessionUser.id == user_id && (
                <>
                <div>
                    <button onClick={onEdit} className=" m-4 transition duration-500 ease-in-out bg-blue text-yellow hover:bg-brown hover:text-yellow-dark px-4 py-3 rounded-md text-sm"   style={{fontFamily: 'Bourbon Grotesque'}} >Set Status</button>
                    <button onClick={onDelete} className="m-4 transition duration-500 ease-in-out bg-red text-yellow hover:bg-red-light hover:text-yellow-dark px-4 py-3 rounded-md text-sm"  style={{fontFamily: 'Bourbon Grotesque'}}>Remove</button>
                </div>
            </>
            )}</div>
            </div>
        </div>
        </>
    )
}