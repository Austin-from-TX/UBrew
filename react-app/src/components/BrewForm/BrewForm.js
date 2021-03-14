import React, {useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as brewActions from '../../store/brews'


const BrewForm = () => {

   
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const newBrew = useSelector(state => state.brew.newBrew)

    const [style, setStyle] = useState('')
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
        {newBrew && <Redirect to={`/brews/${newBrew.id}`} />}
         <div className="new-brew-form">
          <h1>Add A Brew Recipe</h1>
            {errors.length > 0 && errors.map(error => <div className="errors" key={error}>{error}</div>)}
            <form onSubmit={handleSubmit}>
            <div>
                <label>Brew Name</label>
                <input type="text" placeholder="Brew Name" value={brewName} onChange={e => setBrewName(e.target.value)} required/>
            </div>
            <div>
                <label>Style</label>
                <input type="text" placeholder="Beer Style" value={style} onChange={e => setStyle(e.target.value)} required/>
            </div>
            
            <div>
                <label>Original Gravity</label>
                <input
                type="number"
                step='any'
                placeholder="1.45"
                value={original_grav}
                onChange={e => setOriginalGrav(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Final Gravity</label>
                <input
                type="number"
                step='any'
                placeholder="1.00"
                value={final_grav}
                onChange={e => setFinalGrav(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Fermentation Temperature</label>
                <input type="number" placeholder="74" value={ferm_temp} onChange={e => setFermTemp(e.target.value)} required/>
            </div>
            <div>
                <label>Primary Fermentation</label>
                <input type="text" placeholder="2 Weeks" value={primary_len} onChange={e => setPrimaryLen(e.target.value)} required/>
            </div>
            <div>
                <label>Secondary Fermentation</label>
                <input type="text" placeholder="Secondary" value={secondary_len} onChange={e => setSecondaryLen(e.target.value)} />
            </div>
            <div>
                <label>ABV%</label>
                <input
                type="number"
                step="any"
                placeholder="5"
                value={abv}
                onChange={e => setAbv(e.target.value)}
                required
                />
            </div>
            <div>
                <label>IBU</label>
                <input
                type="number"
                placeholder="25"
                value={ibu}
                onChange={e => setIbu(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Color (in SRM)</label>
                <input
                type="number"
                placeholder="6"
                value={srm}
                onChange={e => setSrm(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea type="textarea" placeholder="Tell us how awesome your brew is! What flavour profiles does it have? " value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Grain Bill</label>
                <textarea type="textarea" placeholder="List Your Grain Bill Here" value={grain_bill} onChange={e => setGrainBill(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Hop List</label>
                <textarea type="textarea" placeholder="List Your Hops and Boil Times Here" value={hop_list} onChange={e => setHopList(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Yeast</label>
                <input type="text" placeholder="Yeast Strain" value={yeast} onChange={e => setYeast(e.target.value)} required></input>
            </div>
            <div>
                <label>Instructions</label>
                <textarea type="textarea" placeholder="Please share with us your expertise on how to brew this just right!" value={instructions} onChange={e => setInstructions(e.target.value)} required></textarea>
            </div>
            <div>
                <label className=" my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}}>Add A Photo
                <input style={{display: 'none'}} type="file" onChange={e => setPhoto(e.target.files[0])} />
                </label>
            </div>
            <div>
                <button className="my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}} type="submit">Share Your Brew!</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default BrewForm