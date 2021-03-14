const NEW_FOLLOWER = 'follows/NEW_FOLLOWER'
const DELETE_FOLLOWER = 'follows/DELETE_FOLLOWER'
const FOLLOWED_LIST = 'follows/FOLLOWED_LIST'
const FOLLOWING_LIST = 'follows/FOLLOWING_LIST'

const addFollow = user => {
    return { type: NEW_FOLLOWER, user}
}
const deleteFollow = user => {
    return { type: DELETE_FOLLOWER, user}
}


const followerList = (followers) => {
    return { 
        type: FOLLOWED_LIST, 
        followers
    }
}
const followingList = (following) => {
    return { 
        type: FOLLOWING_LIST, 
        following
    }
}

export const removeFollower = ({follower_id, followed_id}) => async dispatch => {
    console.log('followerid from the thunk', followed_id)
    const res = await fetch(`api/follows/${followed_id}/delete`, {
        method: 'DELETE', 
        headers: {
            "Content-Type": 'application/json'
        }, 
        body: JSON.stringify({follower_id})
    })
    const data = await res.json()
    console.log(data)
    dispatch(deleteFollow(data))
    return data
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
    dispatch(addFollow(data))
    return data 
}


export const getFollowerList = ({user_id}) => async dispatch => {
    console.log('from the thunk', user_id)
    const res = await fetch(`/api/follows/${user_id}/get`)
    const data = await res.json()
    dispatch(followingList(data[0]))
    dispatch(followerList(data[1]))
    return data
}


const initialState = {userFollows: [], userFollowers: []}


const followReducer = (state = initialState, action) => {
    let newState;
    const updateState = {...state}
    switch(action.type) {
        case FOLLOWING_LIST:
                updateState.userFollows = action.following;
            return updateState
        case FOLLOWED_LIST:
                updateState.userFollowers = action.followers;
            return updateState
        case NEW_FOLLOWER: 
            updateState.userFollows = action.user
            return updateState
        case DELETE_FOLLOWER:
            updateState.userFollows = action.user
            return updateState
        default: 
            return state
    }
}

export default followReducer