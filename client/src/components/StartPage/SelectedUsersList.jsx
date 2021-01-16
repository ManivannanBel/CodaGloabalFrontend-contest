import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

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
              <TableRow key={user.Name}>
                <TableCell>
                  <Avatar alt={user.Name} src={user["Profile Image"]} />
                  <TableCell>{user.Name}</TableCell>
                  <TableCell>{user.Bet}</TableCell>
                </TableCell>
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
      <h4>Selected 9</h4>
      <TableContainer>{renderSelectedUsers()}</TableContainer>
    </div>
  );
}

SelectedUsersList.propTypes = {
  selectedUsers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedUsers: state.playState.selectedUsers
});

export default connect(mapStateToProps, {})(SelectedUsersList);
