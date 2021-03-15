import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import BrewCard from '../BrewCard/BrewCard'
import * as brewActions from '../../store/brews'


const STYLES = [
  'Choose A Style',
  'Pilsner',
  'Lager',
  'Pale Ale',
  'IPA',
  'Stout',
  'Wheat'
]

const SearchBrews = () => {

  
  const [style, setStyle] = useState(STYLES[0])
  const [filter, setFilter] = useState([])
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()
  
  const brewList = Object.values(useSelector(state => state.brew.allBrews))
  
  const getBrews = async () => {
    await dispatch(brewActions.getAllBrews())
    setLoaded(true)
  }
  
  useEffect(() => {
        getBrews()
    }, [dispatch])

    useEffect(() => {
      if(style !== STYLES[0]){
      setFilter(
        brewList.filter(brew => {
          return brew.style === style
        }, [brewList, style])
      )}
      
    }, [style])


  if (!loaded) return <span>Loading</span>;
  console.log(brewList)

    return (
        <>
        <div className='flex'>
          <p className='mx-auto text-5xl text-brown mt-8 font-black'>Brew Search</p>
        </div>
        <div className='flex'>
         <select
         className='w-2/3 mx-auto rounded-lg outline-none mt-8 p-4 border-2 border-brown-light text-xl font-black text-brown' 
          value={style}
          onChange={e => setStyle(e.target.value)}
        >
          {STYLES.map(style => (
            <option
              className='text-brown text-xl font-black'
              key={style}
            >
              {style}
            </option>
          ))}
        </select>
      </div>

        {/* {style !== 'Style' ? filter.map(brew => (
          <div>{brew.brew_name}</div>
        ))
        : */}

        {filter ? filter.map(brew=> (
           <BrewCard brew={brew} />
        ))
         :
        brewList.map(brew => (
          <BrewCard brew={brew} />
        ))
        }
        </>
    )
}

export default SearchBrews