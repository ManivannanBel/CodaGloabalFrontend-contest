import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import SelectedUserListItem from "./SelectedUserListItem";
import { Button } from "@material-ui/core";
import style from "./SelectedUsersList.module.css";
import { Link } from "react-router-dom";

/**
 * Component to render the selected users on the left side of the page
 * Here you will select the play button to start the game
 *
 * @param {object} props
 */
function SelectedUsersList(props) {
  const [selectedUsers, setSelectedUsers] = useState([]);

  /**
   * update the selected users state from the reedux store
   */
  useEffect(() => {
    if (props.selectedUsers) {
      setSelectedUsers(Object.values(props.selectedUsers));
    }
  }, [props.selectedUsers]);

  /**
   * helper to render selected users
   */
  const renderSelectedUsers = () => {
    return (
      <React.Fragment>
        <Table>
          <TableBody>
            {selectedUsers.map(user => (
              <SelectedUserListItem key={user.Name} user={user} />
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  };

  /**
   * Helper to conditionally render list or message if no users are selected
   */
  const renderConditions = () => {
    if (selectedUsers.length === 0) {
      return (
        <h4 style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          Select the users to plays
        </h4>
      );
    } else {
      return (
        <React.Fragment>
          <h4 style={{ paddingLeft: "10px" }}>Selected 9</h4>
          <TableContainer>{renderSelectedUsers()}</TableContainer>
          <div style={{ width: "100%" }}>
            {renderWarning()}
            {/* {selectedUsers.length > 0 && (
              
            )} */}
          </div>
        </React.Fragment>
      );
    }
  };

  /**
   * This helper function will display a warning message if the number of selected users are not equal to 9
   */
  const renderWarning = () => {
    if (selectedUsers.length !== 9) {
      return (
        <h5 style={{ color: "red", paddingLeft: "5px", paddingRight: "5px" }}>
          9 users should be selected to play
        </h5>
      );
    } else {
      return (
        <Link to="/game" style={{ textDecoration: "unset" }}>
          <Button className={style.startBtn}>Start</Button>
        </Link>
      );
    }
  };

  return (
    <div className={`${style.wrpr} ${style.resWrpr}`}>{renderConditions()}</div>
  );
}

SelectedUsersList.propTypes = {
  selectedUsers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedUsers: state.playState.selectedUsers
});

export default connect(mapStateToProps, {})(SelectedUsersList);
