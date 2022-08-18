import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveForm from "./components/GiveForm";

function App() {
  return (
        <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/giveform" element={<GiveForm />} />
              </Routes>
          </Router>
  );
}

export default App;
