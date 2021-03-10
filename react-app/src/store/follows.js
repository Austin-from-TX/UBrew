const NEW_FOLLOWER = 'follows/NEW_FOLLOWER'
const IS_FOLLOWED = 'follows/IS_FOLLOWED'
const FOLLOWED_LIST = 'follows/FOLLOWED_LIST'

const addFollow = user => {
    console.log('addFollow', user)
    return { type: NEW_FOLLOWER, user}
}

const isFollowed = user => {
    console.log('isFollowed', user)
    return { type: IS_FOLLOWED, user}
}

const followerList = users => {
    return { type: FOLLOWED_LIST, users}
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

export const findFollower = ({user_id}) => async dispatch => {
    const res = await fetch(`/api/follows/${user_id}`)
    const data = await res.json()
    dispatch(isFollowed(data))
    return data 
}

export const getFollowerList = ({user_id}) => async dispatch => {
    console.log('from the thunk', user_id)
    const res = await fetch(`/api/follows/${user_id}/get`)
    const data = await res.json()
    dispatch(followerList(data))
    return data
}


const initialState = {user: {}, userFollows: {}, userFollowers: {}}


const followReducer = (state = initialState, action) => {
    let newState;
    const updateState = {...state}
    switch(action.type) {
        case FOLLOWED_LIST:
            action.users.forEach(user => {
                updateState.userFollows[user.id] = user;
            });
            return updateState
        case NEW_FOLLOWER: 
            updateState.userFollows =action.user
            return updateState
        case IS_FOLLOWED: 
            updateState.userFollows =action.user
            return updateState
        default: 
            return state
    }
}

export default followReducer