import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer";
import Sidebar from "./Component/Sidebar";
function App() {
  return (
    <div className="Homepage">
      <Navbar />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
