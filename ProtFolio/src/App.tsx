
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";

import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar outside Routes, so it stays on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
