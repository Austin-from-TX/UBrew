import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
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

const BrewForm = () => {

   
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const [style, setStyle] = useState(STYLES[0])
    const [brewName, setBrewName] = useState('')
    const [description, setDescription] = useState('')
    const [original_grav, setOriginalGrav] = useState('')
    const [final_grav, setFinalGrav] = useState('')
    const [ferm_temp, setFermTemp] = useState('')
    const [primary_len, setPrimaryLen] = useState('')
    const [secondary_len, setSecondaryLen] = useState('')
    const [abv, setAbv] = useState('')
    const [ibu, setIbu] = useState('')
    const [srm, setSrm] = useState('')
    const [grain_bill, setGrainBill] = useState('')
    const [hop_list, setHopList] = useState('')
    const [yeast, setYeast] = useState('')
    const [instructions, setInstructions] = useState('')
    const [photo, setPhoto] = useState('')
    const [errors, setErrors] = useState([])


    const handleSubmit = async e => {
        e.preventDefault()
        let errors = []
        const res = await dispatch(
            brewActions.addBrew({
                user_id: sessionUser.id,
                style,
                brew_name: brewName,
                description,
                original_grav,
                final_grav,
                ferm_temp,
                primary_len,
                secondary_len,
                abv,
                ibu,
                srm,
                grain_bill, 
                hop_list,
                yeast,
                instructions,
                photo
            })
        )
        history.push(`/brews/${res}`)
        }

    return (
        <>
        <div className='flex'>
         <div className="mx-auto w-1/2 mt-8">
          <div>
            <h1 className='text-4xl my-8 text-brown-light font-black'>Add A Brew </h1>
          </div>
            {errors.length > 0 && errors.map(error => <div className="errors" key={error}>{error}</div>)}
            <form className='flex-col space-y-4' onSubmit={handleSubmit}>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Brew Name</label>
                <input className='flex-none rounded-lg border-2 border-red' type="text" placeholder="Brew Name" value={brewName} onChange={e => setBrewName(e.target.value)} required/>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Style</label>
                <select
                className='w-1/3 rounded-lg border-2 text-lg border-red'
                value={style} 
                onChange={e => setStyle(e.target.value)} 
                required>
                     {STYLES.map(style => (
                        <option
                        className='text-brown-light text-lg'
                        key={style}
                        >
                        {style}
                        </option>
                    ))}
                </select> 
            </div>
            
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Original Gravity</label>
                <input
                className='flex-none rounded-lg border-2 border-red'
                type="number"
                step='any'
                placeholder="1.45"
                value={original_grav}
                onChange={e => setOriginalGrav(e.target.value)}
                required
                />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Final Gravity</label>
                <input
                className='flex-none rounded-lg border-2 border-red'
                type="number"
                step='any'
                placeholder="1.00"
                value={final_grav}
                onChange={e => setFinalGrav(e.target.value)}
                required
                />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Fermentation Temperature</label>
                <input className='flex-none rounded-lg border-2 border-red' type="number" placeholder="74" value={ferm_temp} onChange={e => setFermTemp(e.target.value)} required/>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Primary Fermentation</label>
                <input className='flex-none rounded-lg border-2 border-red' type="text" placeholder="2 Weeks" value={primary_len} onChange={e => setPrimaryLen(e.target.value)} required/>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Secondary Fermentation</label>
                <input className='flex-none rounded-lg border-2 border-red' type="text" placeholder="Secondary" value={secondary_len} onChange={e => setSecondaryLen(e.target.value)} />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>ABV%</label>
                <input
                className='flex-none rounded-lg border-2 border-red'
                type="number"
                step="any"
                placeholder="5"
                value={abv}
                onChange={e => setAbv(e.target.value)}
                required
                />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>IBU</label>
                <input
                className='flex-none rounded-lg border-2 border-red'
                type="number"
                placeholder="25"
                value={ibu}
                onChange={e => setIbu(e.target.value)}
                required
                />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Color (in SRM)</label>
                <input
                className='flex-none rounded-lg border-2 border-red'
                type="number"
                placeholder="6"
                value={srm}
                onChange={e => setSrm(e.target.value)}
                required
                />
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Description</label>
                <textarea className='flex-none rounded-lg border-2 border-red' type="textarea" placeholder="Tell us how awesome your brew is! " value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Grain Bill</label>
                <textarea className='flex-none rounded-lg border-2 border-red' type="textarea" placeholder="List Your Grain Bill Here" value={grain_bill} onChange={e => setGrainBill(e.target.value)} required></textarea>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Hop List</label>
                <textarea className='flex-none rounded-lg border-2 border-red' type="textarea" placeholder="List Your Hops and Boil Times Here" value={hop_list} onChange={e => setHopList(e.target.value)} required></textarea>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Yeast</label>
                <input className='flex-none rounded-lg border-2 border-red' type="text" placeholder="Yeast Strain" value={yeast} onChange={e => setYeast(e.target.value)} required></input>
            </div>
            <div className='flex justify-between'>
                <label className='self-center text-brown-light' style={{fontFamily: 'Bourbon Grotesque', fontSize: 'large'}}>Instructions</label>
                <textarea className='flex-none rounded-lg border-2 border-red' type="textarea" placeholder="Please share with us your expertise on how to brew this just right!" value={instructions} onChange={e => setInstructions(e.target.value)} required></textarea>
            </div>
            <div className='flex justify-between'>
                <label className=" my-8 text-yellow bg-amber hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}}>Add A Photo
                <input style={{display: 'none'}} type="file" onChange={e => setPhoto(e.target.files[0])} />
                </label>
                <button className="my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}} type="submit">Share Your Brew!</button>
            </div>
            <div className='flex justify-between'>
            </div>
            </form>
        </div>
        </div>
        </>
    )
}

export default BrewForm