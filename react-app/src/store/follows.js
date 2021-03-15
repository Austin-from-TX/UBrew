const NEW_FOLLOWER = 'follows/NEW_FOLLOWER'
const DELETE_FOLLOWER = 'follows/DELETE_FOLLOWER'
const FOLLOWED_LIST = 'follows/FOLLOWED_LIST'
const FOLLOWING_LIST = 'follows/FOLLOWING_LIST'
const PROF_FOLLOWS = 'follows/PROF_FOLLOWS'
const PROF_FOLLOWING = 'follows/PROF_FOLLOWING'

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
const profFollows = (follows) => {
    return { 
        type: PROF_FOLLOWS, 
        follows
    }
}
const profFollowing = (following) => {
    console.log('from the action', following)
    return { 
        type: PROF_FOLLOWING, 
        following
    }
}

export const removeFollower = ({follower_id, followed_id}) => async dispatch => {
    console.log('followedid from the thunk', followed_id)
    const res = await fetch(`/api/follows/${followed_id}/delete`, {
        method: 'DELETE', 
        headers: {
            "Content-Type": 'application/json'
        }, 
        body: JSON.stringify({follower_id})
    })
    const data = await res.json()
    console.log(data)
    dispatch(deleteFollow(data[0]))
    dispatch(profFollowing(data[1]))
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
    console.log(data)
    dispatch(addFollow(data[0]))
    dispatch(profFollowing(data[1]))
    return data 
}


export const getFollowerList = ({user_id}) => async dispatch => {
    
    const res = await fetch(`/api/follows/${user_id}/get`)
    const data = await res.json()
    dispatch(followingList(data[0]))
    dispatch(followerList(data[1]))
    return data
}

export const getProfFollows = ({user_id}) => async dispatch => {
    
    const res = await fetch(`/api/follows/${user_id}/get`)
    const data = await res.json()
    dispatch(profFollows(data[0]))
    dispatch(profFollowing(data[1]))
    return data
}


const initialState = {userFollows: [], userFollowers: [], profFollows: [], profFollowing: []}


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
        case PROF_FOLLOWS:
                updateState.profFollows = action.follows;
            return updateState
        case PROF_FOLLOWING:
                updateState.profFollowing = action.following;
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