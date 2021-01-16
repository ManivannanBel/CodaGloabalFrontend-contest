import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import style from "./GamePage.module.css";
import ResultList from "../../components/GamePage/ResultList";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
/**
 * This component displays the game page where the winners will be displayed
 *
 */
function GamePage(props) {
  const [selectedUsers, setSelectedUsers] = useState([]);

  /**
   * The random number act as opposing number
   */
  const [opposingNumber, setOpposingNumber] = useState(null);

  //   useEffect(() => {
  //     if (opposingNumber) {
  //     }
  //   }, [opposingNumber]);

  /**
   * update selectUsers state from the store and generate the opposing number
   *
   */
  useEffect(() => {
    if (props.selectedUsers) {
      setSelectedUsers(Object.values(props.selectedUsers));

      setOpposingNumber(Math.floor(Math.random() * (9 - 1) + 1));
    }
  }, [props.selectedUsers]);

  return (
    <div>
      <div className={style.oppNumWrpr}>
        <h1 className={style.oppNum}>{opposingNumber}</h1>
      </div>
      <ResultList
        selectedUsers={selectedUsers}
        opposingNumber={opposingNumber}
      />
      <Link
        style={{
          marginLeft: "15px",
          textDecoration: "unset"
        }}
        to="/"
      >
        <Button
          style={{
            color: "white",
            background: "black",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          Back
        </Button>
      </Link>
    </div>
  );
}

GamePage.propTypes = {
  selectedUsers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedUsers: state.playState.selectedUsers
});

export default connect(mapStateToProps, {})(GamePage);
