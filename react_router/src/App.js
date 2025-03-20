import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const NavBar = lazy(() => import("./components/Navbar"));
const News = lazy(() => import("./components/News"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const QuestionBank = lazy(() => import("./components/QuestionBank"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        {/* Navbar xuất hiện trên tất cả các trang */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questionbank" element={<QuestionBank />} />
          
          {/* Điều hướng trang không tồn tại về Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
