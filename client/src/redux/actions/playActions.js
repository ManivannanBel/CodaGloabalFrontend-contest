import { SELECT_USER, REMOVE_USER } from "./type";

export const selectUser = user => dispatch => {
  dispatch({
    type: SELECT_USER,
    payload: user
  });
};

export const removeUser = user => dispatch => {
  dispatch({
    type: REMOVE_USER,
    payload: user
  });
};
