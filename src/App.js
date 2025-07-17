import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar.js";

import Requests from "./screens/Requests";
import Trades from "./screens/Trades.js";
import Users from "./screens/Users.js";
import Books from "./screens/Books.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
