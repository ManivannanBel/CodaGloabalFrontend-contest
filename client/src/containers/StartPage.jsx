import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsersList } from "../redux/actions/userActions";
import ApiLoading from "../components/StartPage/ApiLoading";
import ApiError from "../components/StartPage/ApiError";
import UsersList from "../components/StartPage/UsersList";
import SelectedUsersList from "../components/StartPage/SelectedUsersList";
import style from "./StartPage.module.css";

/**
 * Starting page of the app, displays the list of available users.
 * Player can select the users from the list and Click start ot play the game
 * @param {*} props
 */
function StartPage(props) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Get the users list from the API during page initial load
   */
  useEffect(() => {
    props.fetchUsersList();
  }, []);

  /**
   * update users state from the redux store
   */
  useEffect(() => {
    if (props.usersList) {
      setIsLoading(false);
      setUsers(props.usersList);
    }
  }, [props.usersList]);

  /**
   * update error state from the redux store
   */
  useEffect(() => {
    if (props.error) {
      setIsLoading(false);
      setError(props.error);
    }
  }, [props.error]);

  /**
   * to reload API incase of failure while loading
   */
  const reloadApi = () => {
    props.fetchUsersList();
  };

  /**
   * render helper to render the type of components according to the state recieved
   */
  const renderHelper = () => {
    if (isLoading) {
      return <ApiLoading />;
    } else if (error && error !== "") {
      return <ApiError reloadApi={reloadApi} />;
    } else {
      return (
        <div className={style.mnWrpr}>
          <SelectedUsersList />
          <UsersList users={users} />
        </div>
      );
    }
  };

  return <div>{renderHelper()}</div>;
}

StartPage.propTypes = {
  fetchUsersList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  usersList: state.userState.usersList,
  error: state.userState.error
});

export default connect(mapStateToProps, { fetchUsersList })(StartPage);
