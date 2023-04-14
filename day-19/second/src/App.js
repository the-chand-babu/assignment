import "./App.css";

import { Navbar } from "./component/navbar";
import { Home } from "./component/home";
import { Edit } from "./component/edit";
import { Delete } from "./component/delete";
import { Create } from "./component/create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home/>} />

          <Route path="/Edit" element={<Edit/>} />
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/create"  element={<Create/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
