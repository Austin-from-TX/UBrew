const NEW_FOLLOWER = 'follows/NEW_FOLLOWER'

const addFollow = users => {
    return { type: NEW_FOLLOWER, users}
}

export const newFollow = ({follower_id, followed_id}) => async dispatch => {
    const res = await fetch(`/api/follows/${followed_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({follower_id, followed_id})
    })
    const data = await res.json()
    dispatch(newFollow(data))
    return data 
}


const initialState = {userFollows: {}, userFollowers: {}}


const followReducer = (state = initialState, action) => {
    let newState;
    const updateState = {...state}
    switch(action.type) {
        default: 
            return state
    }
}

export default followReducer