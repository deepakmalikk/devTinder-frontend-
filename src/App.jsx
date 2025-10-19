import { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<div>LoginPage</div>} />
      </Routes>
    </BrowserRouter>
      <NavBar />
         </>
  );
}

export default App;
