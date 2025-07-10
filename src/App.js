import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar.js";
import CheckboxList from "./CheckBoxList.js";

const ckboxls = {
  alignItems: "center",
};
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="listbox">
        <div className="ls_title">
          <h3>Books</h3>
        </div>
        <div className="ls_body">
          <CheckboxList></CheckboxList>
        </div>
      </div>
    </div>
  );
}

export default App;
