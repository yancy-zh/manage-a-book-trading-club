import React from "react";
import CheckboxList from "./CheckBoxList.js";
import "./Books.css";
function Books() {
  return (
    <div className="listbox">
      <div className="ls_title">
        <h3>Books</h3>
        <h4>available for trades</h4>
      </div>
      <div className="ls_body">
        <CheckboxList></CheckboxList>
      </div>
    </div>
  );
}

export default Books;
