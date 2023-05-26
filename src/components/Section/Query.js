import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";
import UserData from "../Section/Userdata";
import "../../styles/sectionStyle/query.css";
import Prevdata from "./Prevdata";

function Query({ account, fetchAccount }) {
  const [showhide, setShowhide] = useState("");
  const [web3, setWeb3] = useState("");
  const [daag, setDaag] = useState(0);
  const [aadhar, setAadhar] = useState(0);
  const [users, setUsers] = useState({});
  const [showTable, setShowTable] = useState(0);
  const [prevUser, setPrevUser] = useState([]);
  const [valid, setvalid] = useState("");
  // const [showPrevTable , setShowPrevTable] = useState(0);
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
    setShowTable(0);
    setPrevUser([]);
    setvalid("");
  };

  const handledaagchange = (event) => {
    const getdaag = event.target.value;
    setDaag(getdaag);
  };

  const handleaadharchange = (event) => {
    const getadhar = event.target.validity.valid ? event.target.value : aadhar;
    setAadhar(getadhar);
  };

  useEffect(() => {
    console.log(prevUser);
  }, [prevUser]);

  async function getlandbyDaag() {
    setvalid("");
    setPrevUser([]);
    setShowTable(0);
    // console.log(valid);
    const contract = await new web3.eth.Contract(ABI, contractAddress);
    let land = await contract.methods.getLandFromDaag(daag).call();
    if (land[1] !== "0") {
      setUsers(land);
      setShowTable(1);

      let prevTransaction = await contract.methods
        .getPrevTransactions(daag)
        .call();
      console.log(prevTransaction);
      await prevTransaction.map((user) => {
        setPrevUser((prev) => {
          return [...prev, user];
        });
      });
    } else {
      console.log("No land Registered");
      setvalid("No land Registered");
    }
  }
  async function getlandbyAadhar() {
    setvalid("");
    setPrevUser([]);
    setShowTable(0);
    const contract = await new web3.eth.Contract(ABI, contractAddress);
    let getdaag = await contract.methods.getDaagFromAadhar(aadhar).call();
    let land = await contract.methods.getLandFromDaag(getdaag).call();
    if (land[1] !== "0") {
      setUsers(land);
      setShowTable(1);

      let prevTransaction = await contract.methods
        .getPrevTransactions(getdaag)
        .call();
      console.log(prevTransaction);
      await prevTransaction.map((user) => {
        setPrevUser((prev) => {
          return [...prev, user];
        });
      });
    } else {
      console.log("No land Registered");
      setvalid("No land Registered");
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
                onChange={(e) => handleaadharchange(e)}
                name="aadhar"
                type="text"
                maxLength="12"
                pattern="[0-9]*"
                value={aadhar}
                className="query-form-control"
                placeholder="Enter Aadhar Number"
              ></input>
            </div>
          )}

          {showhide === "2" && (
            <div className="form-group">
              <label className="query-label">Daag Number</label>
              <input
                name="daag"
                type="text"
                maxLength="8"
                pattern="[0-9]*"
                value={daag}
                className="query-form-control"
                placeholder="Enter Daag Number"
                onChange={handledaagchange}
              ></input>
            </div>
          )}

          <button
            name="button"
            className="query-btn"
            onClick={showhide === "2" ? getlandbyDaag : getlandbyAadhar}
          >
            Submit
          </button>
        </div>

        {showTable !== 0 && (
          <div>
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
          </div>
        )}

        {showTable !== 0 && (
          <div>
            <h1>Previous Owner</h1>
            <table>
              <thead>
                <tr>
                  <th>Previous Owner</th>
                  <th>New Owner</th>
                  <th>Valuation</th>
                  <th>Timestamp</th>
                </tr>
              </thead>

              <Prevdata prevUser={prevUser} />
            </table>
          </div>
        )}

        {valid === "No land Registered" && (
          <h1 className="isValid">No Land Registered</h1>
        )}
      </div>
    </div>
  );
}
export default Query;
