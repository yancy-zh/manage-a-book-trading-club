import React from "react";
import "../styles/Requests.css";
import RequestCard from "../components/RequestCard";
function Requests() {
  const requestData = [
    {
      user: "yao",
      bookGive: "quidem molestiae enim",
      bookTake: "sunt qui excepturi placeat culpa",
    },
    {
      user: "spencer",
      bookGive: "omnis laborum odio",
      bookTake: "eaque aut omnis a",
    },
    {
      user: "jimi",
      bookGive: "qui fuga est a eum",
      bookTake: "The Lost World",
    },
  ];
  return (
    <div className="ls-box">
      <div className="ls_title">
        <h3>Requests</h3>
      </div>
      <div className="ls_body">
        <ul>
          {requestData.map((it) => (
            <RequestCard it={it} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Requests;
