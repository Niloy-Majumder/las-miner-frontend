import React from "react";
import Form from "./Form";

function Body(props) {
  return (
    <div className="wrapper">
      <div className={"form"}>
        <Form address={props.account} />
      </div>
    </div>
  );
}

export default Body;
