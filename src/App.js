import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Pre from "./components/Pre";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbarra from "./components/Navbarra";
 

export default function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      <Pre load={load} />
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