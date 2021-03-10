

const NEW_ROTATION = 'rotations/NEW_ROTATION'
const USER_ROTATIONS = 'rotations/USER_ROTATIONS'
const UPDATE_ROTATION = 'rotations/UPDATE_ROTATION'
const DELETE_ROTATION = 'rotations/DELETE_ROTATION'

const newRotation = rotation => {
    return {type: NEW_ROTATION, rotation}
}

const userRotations = rotations => {
    console.log(rotations)
    return {type: USER_ROTATIONS, rotations}
}

const updateRotation = rotation => {
    return {type: UPDATE_ROTATION, rotation}
}

const deleteRotation = rotation => {
    return {type: DELETE_ROTATION, rotation}
}

export const addRotation = ({user_id, brew_id, status}) => async dispatch => {
    const res = await fetch(`/api/rotations/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id, brew_id, status })
    })
    const data = await res.json()

    dispatch(newRotation(data))
    return data
}

export const getRotations = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}/rotations`)
    const data = await res.json()
    dispatch(userRotations(data))
    return data
}

export const updateStatus = ({id, user_id, status}) => async dispatch => {
    const res = await fetch(`/api/rotations/${id}/edit`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, user_id, status})
    })
    const data = await res.json()
    console.log(data)
    dispatch(updateRotation(data))
    return data
}

export const removeRotation = ({user_id, rotation_id}) => async dispatch => {
    const res = await fetch(`/api/rotations/${rotation_id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, rotation_id }),
    });

    const data = await res.json();
  dispatch(deleteRotation(data));
};

const initialState = { userRotations: {}, rotations: [] }

const rotationsReducer = (state = initialState, action) => {
    // let newState  = {...state};
    const updateState = {...state}
    switch (action.type) {
        case NEW_ROTATION:
            updateState.userRotations = action.rotation
            return updateState
        case USER_ROTATIONS:
            updateState.rotations = [...action.rotations]
            return updateState;
        case UPDATE_ROTATION:
            updateState.rotations = [...action.rotation]
            return updateState;
        case DELETE_ROTATION:
            updateState.rotations = [...action.rotation]
            return updateState;
        default:
            return state
    }
}

export default rotationsReducer