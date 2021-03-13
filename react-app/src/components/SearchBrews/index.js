import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import BrewCard from '../BrewCard/BrewCard'
import * as brewActions from '../../store/brews'


const STYLES = [
  'Styles',
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
         <SearchBar />
         <select
          value={style}
          onChange={e => setStyle(e.target.value)}
        >
          {STYLES.map(style => (
            <option
              key={style}
            >
              {style}
            </option>
          ))}
        </select>


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