import React, { useState, useEffect } from "react";
import style from "./UsersList.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectUser, removeUser } from "../../redux/actions/playActions";

/**
 * Component displays the list of users fetched from the API
 * Check boxes are available to add or remove the users to play the game
 *
 * @param {object} props
 */
function UsersList(props) {
  /**
   * recieve users list as props
   */
  const { users } = props;

  const [selectedUsers, setSelectedUsers] = useState({});

  /**
   * update the selectedUsers state from redux store
   */
  useEffect(() => {
    if (props.selectedUsers) {
      setSelectedUsers(props.selectedUsers);
    }
  }, [props.selectedUsers]);

  /**
   * This method helps us to add a new user to selected users in store or remove an existing user from the store
   *
   * @param {object} user
   */
  const selectUser = user => {
    if (selectedUsers[user.Name]) {
      //If already the user is present, remove it
      props.removeUser(user);
    } else {
      //Only 9 users should be selected
      if (Object.keys(selectedUsers).length < 9) {
        props.selectUser(user);
      } else {
        alert("9 users are already selected");
      }
    }
  };

  /**
   * Helper to render the table
   */
  const renderTable = () => {
    return (
      <React.Fragment>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SELECT</TableCell>
              <TableCell>AVATAR</TableCell>
              <TableCell>PLAYER NAME</TableCell>
              {/* <TableCell>LEVEL</TableCell> */}
              <TableCell>BET</TableCell>
              {/* <TableCell>WINS</TableCell> */}
              {/* <TableCell>LOST</TableCell> */}
              <TableCell>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.Name}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedUsers[user.Name] ? true : false}
                    onChange={() => selectUser(user)}
                  />
                </TableCell>
                <TableCell>
                  <Avatar alt={user.Name} src={user["Profile Image"]} />
                </TableCell>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{user.Bet}</TableCell>
                <TableCell>{user.Price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  };

  return (
    <div>
      <h3>Select playing 9</h3>
      <TableContainer>{renderTable()}</TableContainer>
    </div>
  );
}

UsersList.propTypes = {
  selectedUsers: PropTypes.object.isRequired,
  selectUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedUsers: state.playState.selectedUsers
});

export default connect(mapStateToProps, { selectUser, removeUser })(UsersList);
