import "./App.css";
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  const [detail, setDetail] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);
  const [post, setPost] = useState(3);

  useEffect(() => {
    fetch("https://vakasahmed.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const lastPostIndex = page * post;
  const firstPostIndex = lastPostIndex - post;
  const result = detail.slice(firstPostIndex,lastPostIndex );

  // async () =>{
  //   const {data} = await axios.get('/')
  //   console.log(data.result);
  // }

  return (
    <div className="App">
    {console.log(detail)}
      <Header />
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={<Main  detail={result} totalItems={detail} post={post} setPage={setPage} setCart={setCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
