import React from "react";
import { Routes, Route } from "react-router-dom";
//We also need to import all of these routes one by one now
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    //Lets switch from single route to 5 routes and add them here.
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} ></Route>
      <Route path="/books/details/:id" element={<ShowBook />} ></Route>
      <Route path="/books/edit/:id" element={<EditBook />} ></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />} ></Route>
      
    </Routes>
  );
}; 
export default App;