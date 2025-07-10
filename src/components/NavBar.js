import React from "react";
import "./NavBar.css";
const myStyle = {
  float: "right",
};


const Navbar = () => {
  return (
    <div>
      <ul>

        <li>
          <a href="#Books">Books</a>
        </li>
        <li>
          <a href="#Requests">Requests</a>
        </li>
        <li>
          <a href="#Trades">Trades</a>
        </li>
        <li>
          <a href="#Users">Users</a>
        </li>
        <li style={myStyle}>
          <button className="active">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
