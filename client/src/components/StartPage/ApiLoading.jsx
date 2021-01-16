import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import style from "./ApiLoading.module.css";

function ApiLoading() {
  return (
    <div className={style.wrpr}>
      <CircularProgress className={style.loaderWrpr} />
    </div>
  );
}

export default ApiLoading;
