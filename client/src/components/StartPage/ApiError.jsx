import React from "react";

function ApiError(props) {
  const { reloadApi } = props;
  return (
    <div>
      <h1>Some error accurred while loading API</h1>
      <button onClick={reloadApi}>Reload API</button>
    </div>
  );
}

export default ApiError;
