import React from "react";
import "../styles/Requests.css";
function RequestCard({ it }) {
  return (
    <div className="card-box">
      <div className="card-col">
        <span className="span">{it.user}</span> wants to give
        <div className="bookcard">{it.bookGive}</div>
      </div>
      <div className="card-col">
        <span className="span">{it.user}</span> wants to take
        <div className="wantBookCard">
          <div className="requestCount">
            <span className="Request">Request 0</span>
          </div>
          <div className="bookWanted">{it.bookTake}</div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
