import React from "react";
import "../styles/Requests.css";
function TradeCard({ it }) {
  return (
    <div className="card-box">
      <div className="card-col">
        <span className="span">{it.user}</span> wants to give
        <div className="giveBookCard">
          <div className="single-line-placeholder "></div>
          <div className="bookToGive">{it.bookGive}</div>
        </div>
      </div>
      <div className="card-col">
        <span className="span">{it.user}</span> wants to get
        <div className="wantBookCard">

          <div className="bookWanted">{it.bookTake}</div>
        </div>
      </div>
    </div>
  );
}

export default TradeCard;
