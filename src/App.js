import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Resume from "./pages/Resume";
import About from "./pages/About";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbarra from "./components/Navbarra";
 

export default function App() {

  return (
    <Router>
      <Navbarra />
      <main>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Route> 
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}