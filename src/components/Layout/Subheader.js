import React from "react";
import About from "../Section/About";
import Contact from "../Section/Contact";
import Faq from "../Section/Faq";
import Query from "../Section/Query";
import Body from "../body/Body";

import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";

const Subheader = () => {
  return (
    <div className="subheader-container">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/query"}
              >
                Query
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/faq"}
              >
                FAQ
              </NavLink>
            </li>

            <li>
              {/* <Link to={"/product"}>Products</Link> */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <Routes>
            {/* <Route exact path="/" /> */}
            {/* <Route path="/product" element={<Product />} /> */}
            <Route exact path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/query" element={<Query />} />
            <Route path="/faq)" element={<Faq />} />
            <Route path="/contact)" element={<Contact />} />
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
