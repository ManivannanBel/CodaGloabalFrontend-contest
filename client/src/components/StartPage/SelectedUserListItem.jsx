import React from "react";
import style from "./SelectedUserListItem.module.css";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import TableCell from "@material-ui/core/TableCell";

/**
 * Component will render the selected user item from the list
 *
 * @param {object} props
 */
function SelectedUserListItem(props) {
  const { user } = props;

  return (
    <TableRow key={user.Name}>
      <TableCell style={{ padding: "3px", border: "none" }}>
        <div className={style.gridWrpr}>
          <Avatar alt={user.Name} src={user["Profile Image"]} />
          <div className={style.usrdtl}>
            <div>{user.Name}</div>
            <div className={style.betTxt}>{user.Bet}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className={style.priceTxt} style={{ border: "none" }}>
        {user.Price}
      </TableCell>
    </TableRow>
  );
}

export default SelectedUserListItem;
