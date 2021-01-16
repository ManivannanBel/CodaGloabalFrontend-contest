import React from "react";
import style from "./WinningUserListItem.module.css";
import Avatar from "@material-ui/core/Avatar";
import GavelIcon from "@material-ui/icons/Gavel";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
/**
 * This component will render the winning user list Item
 *
 * @param {object} props
 */
function WinningUserListItem(props) {
  const { user, opposingNumber } = props;

  /**
   * Helper function to render the win or lose label
   */
  const renderWinOrLose = () => {
    if (opposingNumber == user.Bet) {
      return <div className={style.winLbl}>Win</div>;
    } else {
      return <div className={style.loseLbl}>Lose</div>;
    }
  };

  /**
   * Hepler function to render the price money based on their results,
   *
   */
  const renderPrice = () => {
    if (opposingNumber == user.Bet) {
      return (
        <div>
          <AttachMoneyIcon />
          <span style={{ verticalAlign: "top" }}>{`${parseInt(user.Price) *
            2}`}</span>
        </div>
      );
    } else {
      return (
        <div>
          <AttachMoneyIcon />
          <span style={{ verticalAlign: "top" }}>0</span>
        </div>
      );
    }
  };

  return (
    <div className={style.wrpr}>
      <div className={style.card}>
        {renderWinOrLose()}
        <Avatar
          className={style.avt}
          alt={user.Name}
          src={user["Profile Image"]}
        />
        <div
          className={style.dtlWrpr}
          style={{ paddingLeft: "5px", paddingRight: "5px" }}
        >
          <div>
            <div>{user.Name}</div>
            <div>
              <AttachMoneyIcon />
              <span style={{ verticalAlign: "top" }}>{user.Price}</span>
            </div>
            <div>
              <GavelIcon />
              <span style={{ verticalAlign: "top" }}>{user.Bet}</span>
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>Winnings</div>
            <div style={{ textAlign: "center" }}>{renderPrice()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinningUserListItem;
