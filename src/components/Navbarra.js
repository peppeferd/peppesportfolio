import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbarra.css";
import { AiOutlineHome } from 'react-icons/ai'
import { BsFileRichtext } from 'react-icons/bs'
import { ImBlog } from 'react-icons/im'
import { MdContactPhone } from 'react-icons/md'
import { BiHorizontalRight } from 'react-icons/bi'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


function NavBarra() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact='true' to="/" className="nav-logo fa">
       <Navbar.Brand>    
             <img
              src={logo}
              className="d-inline-block"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
           G. Ferlazzo
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <AiOutlineHome className="mb-1"/> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
            <BsFileRichtext className="mb-1" /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <ImBlog className="mb-2" />  Blogs
              </NavLink>
            </li>

       <li className="nav-item">
            
            <NavLink
                exact
                to="/resume"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             <BiHorizontalRight className="mb-1" />  Resume
              </NavLink>
              </li>

            <li className="nav-item">
            
            <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             <MdContactPhone className="mb-1" />  Contacts
              </NavLink>
              </li>
              
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarra;