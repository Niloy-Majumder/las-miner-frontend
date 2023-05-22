import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import ABI from "../../web3/ABIArray";
import contractAddress from "../../web3/contractAddress";
import { getaccount } from "../../web3/connectwallet";

const Items = ({ data, routeToGo }) => {
  const navigate = useNavigate();

  // Login when Admin
  const login = async () => {
    const account = await getaccount();
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ABI, contractAddress);
    // console.log(account);
    let isAdmin = await contract.methods.administrator(account).call();
    if (isAdmin) {
      navigate(routeToGo);
    } else {
      console.log("Not Admin");
    }
  };

  return (
    <div className={"item-card"} onClick={login}>
      <img className={"img-fluid"} src={`${data.thumbnail}`} alt={data.title} />
      <div className={"item-card__information"}>
        <div className={"title"}>
          <h4>{data.title}</h4>
        </div>
      </div>
      <p className="home-content">{data.details}</p>
    </div>
  );
};

export default Items;
