import "./Home.css" ; 
import { FaArrowRightLong } from "react-icons/fa6";
import HomeComponant from "../HomeComponant/HomeComponant.jsx" ; 
import HeroMan from "../../assets/imges/heroThumb1_1.webp" ; 
import ShapeLeft from "../../assets/imges/heroShape1_2.webp" ;
import ShapeRight from "../../assets/imges/heroShape1_1.webp" ;
import CircleShape from "../../assets/imges/heroShape1_3.webp" ;
import { GoPulse } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

import Brand from "../Brands/Brand.jsx"  ; 
import Elva from "../Elva/Elva.jsx";
import Numbers from "../Numbers/Numbers.jsx";
import Price from "../Price/Price.jsx";
import Test from "../Test/Test.jsx";
import Stay from "../Stay/Stay.jsx"
import Footer from "../Footer/Footer.jsx"

import Navbar from "../Navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
    <Navbar /> 
     <div className="Home">
     <img src={ShapeLeft} alt="shape" className="home-shape1"/>
     <div className="container">

      <div className="homes-father">
      <div className="home1">
        <p className="par-1">
        <GoPulse  className="home-icon-1"/> &nbsp;
          Everything You Need To Creat A Website
        </p>
        <h1>
          Business Innovation With <br />
          IT Servies Expertise
        </h1>
        <ul>
          <li> <FaCheck className="ch1"/>Deployment and support</li>
          <li> <FaCheck className="ch1"/>Discover and Analysis</li>
          <li> <FaCheck className="ch1"/>Flexiblity and Adaptability</li>
          <li> <FaCheck className="ch1"/>Copmtitive Advantage</li>
        </ul>
        <button>GET STARTED &nbsp; <FaArrowRightLong /> </button>
        <HomeComponant />
      </div>
      {/* <div className="home2">
      </div> */}
       <img src={HeroMan} alt="a red head man img" className="heroman" />
      </div>
     </div>
     <img src={ShapeRight} alt="shape"  className="Shape-right"/>
     <div className="circle-dad">
     <img src={CircleShape} alt="shape"  className="circle"/>
     </div>
    
    </div>
        <Brand />
        <Elva />
        <Numbers />
        <Price />
        <Test />
        <Stay />
        <Footer />
    </>
  )
}
