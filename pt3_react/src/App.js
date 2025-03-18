
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<ProductList />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
