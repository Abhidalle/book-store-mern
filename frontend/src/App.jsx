import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="bg-red-500 text-white p-4 text-2xl">Tailwind and Router are working!</div>} />
    </Routes>
  );
}; 
export default App; 