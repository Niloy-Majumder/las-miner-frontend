import React from "react";
import { useEffect, useState } from "react";
import Home from "../Section/Home";
import About from "../Section/About";
import Contact from "../Section/Contact";
import Faq from "../Section/Faq";
import Query from "../Section/Query";
import Body from "../body/Body";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import MasterAdmin from "../Section/MasterAdmin";
import Admin from "../Section/Admin";
import Services from "../Section/Services";
import { getaccount } from "../../web3/connectwallet";

const Subheader = (props) => {
  const [account, setaccount] = useState("");
  const fetchAccount = async () => {
    let acc = await getaccount();
    setaccount(acc);
    console.log(acc);
  };
  return (
    <div className="subheader-container">
      <BrowserRouter>
        <div className="subheader-navbar">
          <ul>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/"}>
                Home
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/about"}>
                About
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/services"}>
                Services
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/query"}>
                Query
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/faq"}>
                FAQ
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>

          <Routes>
            {/* <Route exact path="/" /> */}
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/services"
              element={
                <Services account={account} fetchAccount={fetchAccount} />
              }
            />
            <Route path="/add" element={<Body account={account} />} />
            <Route
              path="/query"
              element={<Query account={account} fetchAccount={fetchAccount} />}
            />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/masterAdmin" element={<MasterAdmin />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Query</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contact</a></li>
            </ul> */}
    </div>
  );
};

export default Subheader;
