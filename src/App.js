import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Home from "./components/Home/Home";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";


function App() {



  return (
    <div className="main-app-container">

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/x" element={<x />} />
          <Route path="/y" element={<y />} />
          <Route path="/z" element={<z />} />
          <Route path="/*" element={< w />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
