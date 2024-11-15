import {useState} from "react";
import "./Navbar.css" ; 
import { Link } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import logoimg from "../../assets/imges/logo.svg" ; 
function Navbar(){

    const [menuOpen , setMenuOpen] = useState(false) ; 
    const [Navbar,setNavbar] = useState (false) ; 

    const ChangeBackground = () =>{
     if(window.screenY >= 50)
      setNavbar(false)
    else 
    setNavbar(true)
    }

    window.addEventListener('scroll' , ChangeBackground ) ; 
    return(
      <div className="container_nav">
        <nav className={Navbar ? "active" : ""}>
        <img src={logoimg} alt="logo image" />
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen) ;
        }}>
         <span></span>
         <span></span>
         <span></span>
        </div>
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
        <div className="side2">
        <div className="icoon">
        <BsSearch  className="myicon"/> 
        <MdLocalGroceryStore className="myicon" />
        </div>
        <button>GET A QUOTE &nbsp; <FaArrowRightLong /> </button>
        </div>
        
      </nav>
      </div>
      
    
    ) 
}
export default Navbar ;