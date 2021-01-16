import axios from "axios";
import { FETCH_USERS_LIST, FETCH_USER_LIST_ERROR } from "./type";

/**
 * Action to fetch user detail list from API
 */
export const fetchUsersList = () => async dispatch => {
  try {
    const result = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
    );
    console.log(result.data);
    dispatch({
      type: FETCH_USERS_LIST,
      payload: result.data
    });
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch({
        type: FETCH_USER_LIST_ERROR,
        payload: err.response
      });
    }
  }
};
