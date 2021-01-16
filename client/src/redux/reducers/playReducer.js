import { SELECT_USER, REMOVE_USER } from "../actions/type";

const initialState = {
  selectedUsers: {}
};

/**
 * Reducer to store data into the redux store
 * @param {object} state
 * @param {object} actions
 */
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SELECT_USER:
      return {
        ...state,
        selectedUsers: addUser(state.selectedUsers, actions.payload)
      };
    case REMOVE_USER:
      return {
        ...state,
        selectedUsers: removeUser(state.selectedUsers, actions.payload)
      };
    default:
      return {
        ...state
      };
  }
};

/**
 * Helper to add user to selected users
 *
 * @param {object} selectedUsers
 * @param {object} newUser
 */
const addUser = (selectedUsers, newUser) => {
  selectedUsers[newUser.Name] = newUser;
  return { ...selectedUsers };
};

/**
 * Helper to remove user to selected users
 *
 * @param {object} selectedUsers
 * @param {object} newUser
 */
const removeUser = (selectedUsers, newUser) => {
  delete selectedUsers[newUser.Name];
  return { ...selectedUsers };
};
