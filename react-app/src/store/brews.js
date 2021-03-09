const NEW_BREW = "brews/add/NEW_BREW";
const GET_ONE_BREW = 'brews/GET_ONE_BREW'
const GET_USER_BREWS = 'brews/GET_USER_BREWS'
const GET_ALL_BREWS = 'brews/GET_ALL_BREWS'


const newBrew = (brew) => {
    return {
        type: NEW_BREW,
        payload: brew,
    }
}

const getOneBrew = brew => {
    return { 
        type: GET_ONE_BREW, 
        payload: brew
    }
}

const getUserBrews = brews => {
    return {type: GET_USER_BREWS, brews}
}

const getBrews = brews => {
    return { type: GET_ALL_BREWS, brews}
}


export const getBrew = brewId => async dispatch => {
    const res = await fetch(`/api/brews/get/${brewId}`)
    const data = await res.json()

    dispatch(getOneBrew(data))
    return data
}

export const getBrewList = userId => async dispatch => {
    const res = await fetch(`/api/users/${userId}/brews`)
    const data = await res.json()

    dispatch(getUserBrews(data))
    return data
}

export const getAllBrews = () => async dispatch => {
    const res = await fetch(`/api/brews/get`)
    const data = await res.json()

    dispatch(getBrews(data))
    return data
}

export const addBrew = (brewSubmit) => async (dispatch) => {
    const {
        user_id,
        style,
        brew_name,
        description,
        original_grav,
        final_grav,
        ferm_temp,
        primary_len,
        secondary_len,
        abv,
        ibu,
        srm,
        instructions,
        photo
        } = brewSubmit
    
    const res = await fetch('/api/brews/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id,
            style,
            brew_name,
            description,
            original_grav,
            final_grav,
            ferm_temp,
            primary_len,
            secondary_len,
            abv,
            ibu,
            srm,
            instructions
            })
    })
    let result = await res.json()


    const form = new FormData()
    form.append('photo', photo)
    form.append('user_id', result.user_id)
    form.append('brew_id', result.id)
    
    const photoRes = await fetch('/api/photos/', {
        method: "POST",
        body: form
    })

    let p_result = await photoRes.json()
    console.log(p_result.brew_id)
    if (res.ok && photoRes.ok){
            // result['photos'].push(p_result.url)
            dispatch(newBrew(result))
        }
    return p_result.brew_id
    }

const initialState = {newBrew: null, currentBrew: {}, allBrews: {}, userBrews: {}}


    const brewReducer = (state = initialState, action) => {
        let newState;
        const updateState = {...state}
        switch (action.type) {
            case NEW_BREW:
                newState = Object.assign({}, state)
                newState.newBrew = action.payload
                return newState
            case GET_ONE_BREW:
                newState = Object.assign({}, state)
                newState.currentBrew = action.payload
                return newState
            case GET_USER_BREWS:
                action.brews.forEach(brew => {
                    updateState.userBrews[brew.id] = brew
                })
                return updateState
            case GET_ALL_BREWS:
                action.brews.forEach(brew => {
                    updateState.allBrews[brew.id] = brew
                })
                return updateState
            default:
                return state
    
        }
    }
    
    export default brewReducer