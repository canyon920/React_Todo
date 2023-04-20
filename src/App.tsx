import React from "react";
import "./App.css"
import TodoList from "./components/TodoList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      
      <ul className="HeaderMain">
        <li><Link to="/">Home </Link> </li>
        <li><Link to="/admin"> Admin </Link></li>
        <li><Link to="products"> Product </Link></li>
      </ul>
      

      <div className="product_list">
        <TodoList></TodoList>
      </div>


      <Routes>
        <Route path="/Todo" element={TodoList()}></Route>
        <Route path="/products" element={<Products></Products>}></Route>        
      </Routes>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
