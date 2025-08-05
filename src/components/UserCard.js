import React, { Component } from "react";
import "../styles/Users.css";
class UserCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="my-item-card">
        <h3>
          <a className="user_link" href="#">{item.name}</a>
        </h3>
        <p>City: {item.address.city}</p>
        <div className="trade_status">
          <p className="book_status">Books: null</p>
          <p className="request_status">Incoming requests: null</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
