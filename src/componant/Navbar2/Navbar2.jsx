import "./Navbar2.css" ; 
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import {useState} from "react";
import PlaneImg from "../../assets/imges/plane.webp" ; 
import logoImg from "../../assets/imges/logo.svg" ; 
import { BsSearch } from "react-icons/bs";

export default function Navbar2() {
      const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div>
    <section className="nav-s">
      <img src={PlaneImg} alt="plane" />
      <div className="container">
        <img src={logoImg} alt="logo" />
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen) ;
        }}>
         <span></span>
         <span></span>
         <span></span>
        </div> 
        <div className="r-side">
        <ul className={menuOpen ? "open" : ""}>
          <li>
          <Link to="/"> 
           Home
           <IoIosArrowDown />
            </Link>
          </li>
          <li>  <Link to="/About"> About </Link></li>
          <li> <a href="#">
          Services
          <IoIosArrowDown /></a>
          </li>
          <li> <a href="#">
          Pages
          <IoIosArrowDown /></a></li>
          <li> <a href="#">
          Blog
          <IoIosArrowDown /></a></li>
          <li> <Link to="/Contact"> Contact </Link></li>
        </ul>
        <BsSearch  className="myicon"/> 
        <button>GET A QUOTE &nbsp; <FaArrowRightLong /> </button>
        <div className="back-blue">
          </div>
        </div>
      
      </div>
    </section>
    </div>
  )
}
