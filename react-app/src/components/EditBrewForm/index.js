import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as brewActions from '../../store/brews'


const EditBrewForm = ({setShowBrewModal, brew}) => {

   
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const newBrew = useSelector(state => state.brew.brew)

    const [style, setStyle] = useState(brew.style)
    const [brewName, setBrewName] = useState(brew.brewName)
    const [description, setDescription] = useState(brew.description)
    const [original_grav, setOriginalGrav] = useState(brew.original_grav)
    const [final_grav, setFinalGrav] = useState(brew.final_grav)
    const [ferm_temp, setFermTemp] = useState(brew,ferm_temp)
    const [primary_len, setPrimaryLen] = useState(brew.primary_len)
    const [secondary_len, setSecondaryLen] = useState(brew.secondary_len)
    const [abv, setAbv] = useState(brew.abv)
    const [ibu, setIbu] = useState(brew.ibu)
    const [srm, setSrm] = useState(brew.srm)
    const [grain_bill, setGrainBill] = useState(brew.grain_bill)
    const [hop_list, setHopList] = useState(brew.hop_list)
    const [instructions, setInstructions] = useState(brew.instructions)
    const [photo, setPhoto] = useState(brew.photo)
    const [errors, setErrors] = useState([])


    const handleSubmit = async e => {
        e.preventDefault()
        let errors = []
        const res = await dispatch(
            brewActions.makeEdit({
                brew_id: brew.id,
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
                instructions,
                photo
            })
        )
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
                <input type="text" placeholder="Zip Code" value={secondary_len} onChange={e => setSecondaryLen(e.target.value)} />
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
                <label>Instructions</label>
                <textarea type="textarea" placeholder="Please share with us your expertise on how to brew this just right!" value={instructions} onChange={e => setInstructions(e.target.value)} required></textarea>
            </div>
            <div>
                <label className=" my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}}>Change Photo
                <input style={{display: 'none'}} type="file" onChange={e => setPhoto(e.target.files[0])} />
                </label>
            </div>
            <div>
                <button onClick={e=> setShowBrewModal(false)} className="my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}} >Cancel</button>
            </div>
            <div>
                <button className="my-8 text-yellow bg-blue hover:bg-brown px-6 py-4 rounded-md text-xl" style={{fontFamily: 'Bourbon Grotesque'}} type="submit">Confirm Changes</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default EditBrewForm