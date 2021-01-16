import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import style from "./ApiLoading.module.css";

/**
 * This component will display a loader while loading the API
 */
function ApiLoading() {
  return (
    <div className={style.wrpr}>
      <CircularProgress className={style.loaderWrpr} />
    </div>
  );
}

export default ApiLoading;
