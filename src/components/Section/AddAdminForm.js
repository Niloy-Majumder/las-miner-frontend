import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";
import { getaccount } from "../../web3/connectwallet";

const AddAdminForm = (props) => {
  const url = "http://localhost:8000/api/create-block";

  const [web3, setWeb3] = useState("");
  const [data, setData] = useState({
    id: "",
  });
  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const contract = await new web3.eth.Contract(ABI, contractAddress);
    console.log(data);
    let address = data.id.toLowerCase();
    const account = await getaccount();
    contract.methods
      .addAdmin(address)
      .send({ from: account })
      .on("receipt", function (receipt) {
        console.log(receipt);
      })
      .on("error", function (error) {
        console.error(error);
      });
  };

  return (
    <div className="form-wrapper">
      <div className={"form"}>
        <form onSubmit={onSubmitHandler}>
          <h2>Add Admin</h2>

          <div className={"input-field"}>
            <label htmlFor="id">Address of the user</label>
            <input
              onChange={(e) => handleChange(e)}
              name="id"
              id="id"
              type="text"
              placeholder="Enter Address of user"
              value={data.id}
              required></input>
          </div>

          <div className={"submit-wrap"}>
            <button>Make Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdminForm;
