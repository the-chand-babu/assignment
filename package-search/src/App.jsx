import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Addtask from "./pages/Addtask";

import TaskList from "./pages/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Addtask />} />
        <Route path="/list" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
