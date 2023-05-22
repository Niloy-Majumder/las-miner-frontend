import React, { useState, useEffect } from "react";
import axios from "axios";
import countrydata from "../../Countrydata.json";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";

const TransferForm = (props) => {
  const url = "http://localhost:8000/api/create-block";

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [district, setDistrict] = useState([]);
  const [districtid, setDistrictid] = useState("");
  const [block, setBlock] = useState([]);
  const [blockid, setBlockid] = useState("");
  const [web3, setWeb3] = useState("");

  //const time = new Date().toLocaleString();
  const [data, setData] = useState({
    vefId: "",
    // country: "",
    // state: "",
    // district: "",
    // block: "",
    // land_size: 0,
    owner: "",
    //father_name: "",
    //gender: "",
    phone_number: "",
    //verifying_officer: "",
    //transaction_type: "",
    valuation: 0,
    aadhar: "",
    daag_number: 0,
    // prev_daag_number: 0,
  });
  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  const handleSelect = (e) => {
    // const val_arr=e.target.value.split(",")
    // data.country=val_arr[1]
    // console.log(data)
    // const newData = {...data};
    // console.log(newData)
    // // newData[e.target.id] = e.target.value;
    // console.log(newData)
    // setData(newData);
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata)
  };

  const onSubmitHandler = async (e) => {
    // e.preventDefault();

    const contract = await new web3.eth.Contract(ABI, contractAddress);
    contract.methods
      .transferLand(
        data.aadhar,
        data.daag_number,
        data.owner,
        data.phone_number,
        data.valuation
      )
      .send({ from: props.account })
      .on("receipt", function (receipt) {
        console.log(receipt);
      })
      .on("error", function (error) {
        console.error(error);
        alert("Invalid Request!");
      });
  };

  const handlecounty = (e) => {
    const val_arr = e.target.value.split(",");
    const getcountryId = val_arr[0];

    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    data.country = val_arr[1];
    const newData = { ...data };
    setData(newData);
  };

  const handlestate = (e) => {
    const val_arr = e.target.value.split(",");
    const getStateid = val_arr[0];
    const getDistrictdata = state.find(
      (state) => state.state_id === getStateid
    ).districts;
    // console.log(getStateid);
    setDistrict(getDistrictdata);
    setStateid(getStateid);
    data.state = val_arr[1];
    const newData = { ...data };
    setData(newData);
  };

  const handledistrict = (e) => {
    const val_arr = e.target.value.split(",");
    const getDistrictid = val_arr[0];
    const getBlockdata = district.find(
      (district) => district.district_id === getDistrictid
    ).blocks;

    setBlock(getBlockdata);
    setDistrictid(getDistrictid);
    data.district = val_arr[1];
    const newData = { ...data };
    setData(newData);
  };

  const handleblock = (e) => {
    const val_arr = e.target.value.split(",");
    const getBlockid = val_arr[0];

    setBlockid(getBlockid);
    data.block = val_arr[1];
    const newData = { ...data };
    setData(newData);
  };

  // const [country, setCountry] = useState("")
  // const handlecountry=(e)=>{
  //     console.log(e.target.value)
  //     setCountry(e.target.value)
  // }
  return (
    <div className="form-wrapper">
      <div className={"form"}>
        <form onSubmit={onSubmitHandler}>
          <h2>Transfer of Land</h2>

          <div className={"input-field"}>
            <label htmlFor="aadhar">Aadhar Number</label>
            <input
              onChange={(e) => handleChange(e)}
              name="aadhar"
              id="aadhar"
              type="text"
              placeholder="Enter Aadhar Number"
              value={data.aadhar}
              required
            ></input>
          </div>

          <div className={"input-field"}>
            <label htmlFor="daag_number">Daag Number</label>
            <input
              onChange={(e) => handleChange(e)}
              name="daag_number"
              id="daag_number"
              type="number"
              placeholder="Enter Daag Number of land"
              value={data.daag_number}
              required
            ></input>
          </div>
          <div className={"input-field"}>
            <label htmlFor="owner">Name of Owner</label>
            <input
              onChange={(e) => handleChange(e)}
              name="owner"
              id="owner"
              type="text"
              placeholder="Enter Name of the Owner"
              value={data.name}
              required
            ></input>
          </div>

          <div className={"input-field"}>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              onChange={(e) => handleChange(e)}
              name="phone_number"
              id="phone_number"
              type="number"
              maxlength="10"
              pattern="[1-9]{1}[0-9]{9}"
              placeholder="Enter Contact Number of the Owner"
              value={data.phone_number}
              required
            ></input>
          </div>

          <div className={"input-field"}>
            <label htmlFor="valuation">Valuation</label>
            <input
              onChange={(e) => handleChange(e)}
              name="valuation"
              id="valuation"
              type="number"
              placeholder="Enter valuation of the land"
              value={data.valuation}
              required
            ></input>
          </div>

          <div className={"submit-wrap"}>
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
