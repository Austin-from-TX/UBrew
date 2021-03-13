import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import BrewCard from '../BrewCard/BrewCard'
import * as brewActions from "../../store/brews";

export default function BrewList(){

    const [loaded, setLoaded] = useState(false);
    
    const user = useParams()
    const userId = user.userId
  
    const dispatch = useDispatch()
    const brewList = Object.values(useSelector(state => state.brew.userBrews))

    const getBrews = async () => {
        await dispatch(brewActions.getBrewList(userId))
        setLoaded(true)
    }

    useEffect(() => {
        getBrews()
    }, [dispatch])

    if (!loaded) return <span>Loading</span>;

    

    return (
       <>
       <div>
        {brewList && brewList.map(brew => (
          
              <BrewCard brew={brew} />
            
          ))}
        </div>
        </>
    )
}