import React from "react";
import Icons from "./Icons";
import Navigation from "./Navigation";
import Avatar from "../Avatar";
import employees from "../employees";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="inline-fx align-center">
        <img
          src={require(`../../assets/images/logo.png`).default}
          alt="logo"
          className="logo-img"
        />
        <Navigation id="navigation" />
      </div>
      <div className="inline-fx">
        <Icons className="icon-style" />
        <Avatar
          className="user-img"
          imageName={employees[0].imageName}
          altValue="Female Employee"
        />
      </div>
    </header>
  );
}

export default Header;