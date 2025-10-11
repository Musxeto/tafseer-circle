import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Home from "./pages/Home";
import About from "./pages/About";
import Sessions from "./pages/Sessions";
import Resourses from "./pages/Resources";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sessions" element={<Sessions />}></Route>
        <Route path="/resources" element={<Resourses />}></Route>
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

