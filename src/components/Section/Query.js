import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";
import UserData from "../Section/Userdata";
import "../../styles/sectionStyle/query.css";

function Query({ account, fetchAccount }) {
  const [showhide, setShowhide] = useState("");
  const [web3, setWeb3] = useState("");
  const [daag, setDaag] = useState(0);
  const [aadhar, setAadhar] = useState(0);
  const [users, setUsers] = useState({});

  const getAccount = async () => {
    if (account === "") {
      await fetchAccount();
    }
  };

  useEffect(() => {
    getAccount();
    setWeb3(new Web3(window.ethereum));
  }, []);

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  const handledaagchange = (event) => {
    const getdaag = event.target.value;
    setDaag(getdaag);
  };

  const handleaadharchange = (event) => {
    const getadhar = event.target.value;
    setAadhar(getadhar);
  };

  async function getlandbyDaag() {
    const contract = await new web3.eth.Contract(ABI, contractAddress);
    let land = await contract.methods.getLandFromDaag(daag).call();
    if (land[1] !== "0") {
      setUsers(land);
      // console.log(land);
    } else {
      console.log("No land Registered");
    }
  }
  async function getlandbyAadhar() {
    const contract = await new web3.eth.Contract(ABI, contractAddress);
    let getdaag = await contract.methods.getDaagFromAadhar(aadhar).call();
    let land = await contract.methods.getLandFromDaag(getdaag).call();
    if (land[1] !== "0") {
      console.log(land);
      setUsers(land);
    } else {
      console.log("No land Registered");
    }
  }

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
                placeholder="Enter Aadhar Number"
                onChange={handleaadharchange}></input>
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
                onChange={handledaagchange}></input>
            </div>
          )}

          <button
            name="button"
            className="query-btn"
            onClick={showhide === "2" ? getlandbyDaag : getlandbyAadhar}>
            Submit
          </button>
        </div>

        <h1>Present Owner</h1>
        <table>
          <thead>
            <tr>
              <th>Aadhar Number</th>
              <th>Daag Number</th>
              <th>District</th>
              <th>Block</th>
              <th>Total Size of Land</th>
              <th>Name of the Owner</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>

        <h1>Previous Owner</h1>
        <table>
          <thead>
            <tr>
              <th>Aadhar Number</th>
              <th>Daag Number</th>
              <th>District</th>
              <th>Block</th>
              <th>Total Size of Land</th>
              <th>Name of the Owner</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{/* <UserData users={users} /> */}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Query;
