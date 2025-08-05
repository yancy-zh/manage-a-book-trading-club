import React from "react";
import "../styles/Requests.css";
import RequestCard from "../components/RequestCard";
function Requests() {
  const requestData = [{ user: "yao", bookGive: 2, bookTake: 3 }];
  return (
    <div className="ls-box">
      <div className="ls_title">
        <h3>Requests</h3>
      </div>
      <div className="ls_body">
        <ul>
          {requestData.map((it) => (
            <RequestCard it={it}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Requests;
