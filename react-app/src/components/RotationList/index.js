import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import RotationCard from '../RotationCard'
import * as rotationActions from "../../store/rotations";

export default function RotationList(){

    const [loaded, setLoaded] = useState(false);
    
   
    const {userId} = useParams()
  
    const dispatch = useDispatch()
    const rotationList = useSelector(state => state.rotation.rotations)

    const userRotations = async () => {
        await dispatch(rotationActions.getRotations(userId))
        setLoaded(true)
    }

    useEffect(() => {
      userRotations()
    }, [dispatch])
    
    
    
    if (!loaded) return <span>Loading</span>;
    
      return (
        <div className='flex-col items-stretch w-6/8 border-8 border-brown '>
        {rotationList && rotationList.map(rotation => (
          
          <RotationCard 
                photo={rotation.brew.photos[0].url} 
                rotation_status={rotation.status} 
                rotation_id={rotation.id} 
                brew_name={rotation.brew.brew_name} 
                user_id={userId}
                creator={rotation.brew.users}
                brew_id={rotation.brew_id}
                creator_id={rotation.brew.user_id}
                abv={rotation.brew.abv}
                ibu={rotation.brew.ibu}
                srm={rotation.brew.srm}
                />
          
          ))}
        
        </div>
      )
    }

