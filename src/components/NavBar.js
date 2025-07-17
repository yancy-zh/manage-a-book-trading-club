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
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/requests">Requests</a>
        </li>
        <li>
          <a href="/trades">Trades</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li style={myStyle}>
          <button className="active">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
