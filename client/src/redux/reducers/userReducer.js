import { FETCH_USERS_LIST, FETCH_USER_LIST_ERROR } from "../actions/type";

const initialState = {
  usersList: [],
  error: ""
};

/**
 * Reducer to store data into the redux store
 * @param {object} state
 * @param {object} actions
 */
export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USERS_LIST:
      return {
        usersList: actions.payload
      };
    case FETCH_USER_LIST_ERROR:
      return {
        error: actions.payload
      };
    default:
      return {
        ...state
      };
  }
};
