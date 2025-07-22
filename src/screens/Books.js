import React from "react";
import CheckboxList from "./CheckBoxList.js";
import "./Books.css";
function Books() {
  return (
    <div className="listbox">
      <div className="ls_title">
        <div className="title_group">
          <h3 className="v1_title">Books</h3>
          <h4 className="v2_title">available for trades</h4>
        </div>
      </div>
      <div className="ls_body">
        <CheckboxList></CheckboxList>
      </div>
    </div>
  );
}

export default Books;
