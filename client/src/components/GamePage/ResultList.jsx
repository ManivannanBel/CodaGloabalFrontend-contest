import React from "react";
import style from "./ResultList.module.css";
import WinningUserListItem from "./WinningUserListItem";

/**
 * This component will display the list of selected users with winning details
 *
 * @param {object} props
 */
function ResultList(props) {
  const { selectedUsers, opposingNumber } = props;

  /**
   * Helper function to render list of users
   */
  const renderList = () => {
    return (
      <div className={style.lstWrpr}>
        {selectedUsers.map(user => (
          <WinningUserListItem
            key={user.Name}
            user={user}
            opposingNumber={opposingNumber}
          />
        ))}
      </div>
    );
  };

  return <div>{renderList()}</div>;
}

export default ResultList;
