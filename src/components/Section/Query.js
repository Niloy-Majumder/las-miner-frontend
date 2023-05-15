import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Query() {
  const [showhide, setShowhide] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  return (
    <div className="query-main">
      <div className="query-form">
        <div className="query-form-wrapper">
          <div className="form-group">
            <label className="query-label">Select Searching Method</label>
            <select
              name="usertype"
              className="query-form-control"
              onChange={(e) => handleshowhide(e)}
            >
              <option value="">--Searching Methods--</option>
              <option value="1">Aadhar Number</option>
              <option value="2">Daag Number</option>
            </select>
          </div>

          {showhide === "1" && (
            <div className="form-group">
              <label className="query-label">Aadhar Number</label>
              <input
                type="number"
                name="aadhar"
                className="query-form-control"
                placeholder="Enter Aadhar Number"
              ></input>
            </div>
          )}

          {showhide === "2" && (
            <div className="form-group">
              <label className="query-label">Daag Number</label>
              <input
                type="number"
                name="daag"
                className="query-form-control"
                placeholder="Enter Daag Number"
              ></input>
            </div>
          )}
          <button name="button" className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Query;
