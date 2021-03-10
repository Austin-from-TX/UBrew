const GET_COMMENTS = "comments/GET_COMMENTS";
const NEW_COMMENT = "comments/NEW_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";

const get_comments= comments => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

const new_comment = comments => {
  return {
    type: NEW_COMMENT,
    payload: comments,
  };
};

const delete_comment = comment => {
  return {
    type: DELETE_COMMENT,
    payload: comment,
  };
};

const update_comment = comment => {
  return {
    type: UPDATE_COMMENT,
    payload: comment,
  };
};

export const getComments = brew_id => async dispatch => {
  const res = await fetch(`/api/comments/${brew_id}`);
  const data = await res.json();

  dispatch(get_comments(data));
};

export const addComment = ({ brew_id, user_id, comment }) => async dispatch => {
  const res = await fetch(`/api/comments/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      brew_id,
      user_id
    }),
  });

  const data = await res.json();
  dispatch(new_comment(data));
};

export const deleteComment = ({id}) => async dispatch => {
  const res = await fetch(`/api/comments/${id}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();
  dispatch(delete_comment(data));
};

export const editComment = ({id, comment}) => async dispatch => {
  // console.log(id)
  const res = await fetch(`/api/comments/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, comment }),
  });

  const data = await res.json();
  dispatch(update_comment(data));
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    case NEW_COMMENT:
      return action.payload;
    case DELETE_COMMENT:
      return action.payload;
    case UPDATE_COMMENT:
      return action.payload;
    default:
      return state;
  }
};

export default commentsReducer;