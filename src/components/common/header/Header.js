import React, { useState } from "react";
import "./Header.css";
import logo from "../../../asset/Images/logo.png";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="logo" /> 
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <span>Wish List</span>
            <button className="btn1">
              <i className="fa fa-sign-out" /> Sign In
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times" />
              ) : (
                <i className="fa fa-bars" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
