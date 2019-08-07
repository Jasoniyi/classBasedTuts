import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// adds default message,if its forgotten to be put in the parent
Spinner.defaultProps = {
  message: "..loading"
};

export default Spinner;
