import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnitList from "./components/UnitList";
import UnitsAdd from "./components/UnitsAdd";
import UnitEdit from "./components/UnitEdit";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<UnitList />} />
          <Route path="/add" element={<UnitsAdd />} />
          <Route path="/edit/:id" element={<UnitEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
