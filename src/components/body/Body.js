import React from "react";
import Form from "./Form";

function Body(props) {
  return (
    <div className="form-wrapper">
      <Form address={props.account} />
    </div>
  );
}

export default Body;
