import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Home } from "./component/home";
import { Contact } from "./component/new";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/contact" element={<Contact />} />



          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
