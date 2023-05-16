import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";

function Query(props) {
  const [showhide, setShowhide] = useState("");
  const [web3, setWeb3] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  const getlandbyDaag = async () => {
    const contract = await new web3.eth.Contract(ABI, contractAddress);
    let land = contract.methods.getLandFromDaag().call();
    console.log(land);
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
              onChange={(e) => handleshowhide(e)}>
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
                placeholder="Enter Aadhar Number"></input>
            </div>
          )}

          {showhide === "2" && (
            <div className="form-group">
              <label className="query-label">Daag Number</label>
              <input
                type="number"
                name="daag"
                className="query-form-control"
                placeholder="Enter Daag Number"></input>
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
