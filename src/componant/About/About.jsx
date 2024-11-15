import Footer from "../Footer/Footer.jsx" ; 
import Navbar2 from "../Navbar2/Navbar2.jsx";
import { IoIosArrowForward } from "react-icons/io";
import blurStar from "../../assets/imges/asterisk.svg" ; 
import "./About.css" ; 
import OurAbout from "../Ourcomp/Ourcomp.jsx"
import { FaArrowRightLong } from "react-icons/fa6";
import Props from "../Props5/Props.jsx";
import One from "../../assets/imges/04.webp" ; 
import TWO from "../../assets/imges/05.webp" ; 
import Three from "../../assets/imges/06.webp" ; 
import Four from "../../assets/imges/07.webp" ; 
import Envto from "../../assets/imges/photo_2024-11-15_18-54-56.jpg" ; 
export default function About()
 {
  return (
    <div>
      <Navbar2 />
      <div className="conat-hero">
        <h2>About us</h2>
        <p> Home 
        <IoIosArrowForward />
          About us 
        </p>
      </div>
      {/* //////////// */}
      <section className="simple-sec">
      <div className="simple-son">
      <img src={blurStar} alt="star" />
      <h2>Cyber Security</h2>
      </div>
      <div className="simple-son hide">
      <img src={blurStar} alt="star" />
      <h2>It solution </h2>
      </div>
      <div className="simple-son hide">
      <img src={blurStar} alt="star" />
      <h2>Technology</h2>
      </div>
      <div className="simple-son hide">
      <img src={blurStar} alt="star" />
      <h2>Data security</h2>
      </div>
      </section>
      {/* ///////////// */}
      <section>
      <div className="container">
        <div className="about-1-flex">
        <OurAbout 
            className="s"
            center ={false}
            color={false}
                title1="Contact Us"
                title2="24/7 Expert Hosting  Support Our Customers Love"
            />
          <button>
            All Members
            <FaArrowRightLong  />
          </button>
        </div>
    
      </div>
      </section>
      {/* //////// */}
      <img src="../../assets/imges/04.webp" alt="" />
      <section className="cards-5-dad container">
      <Props 
      img = {One}
      name = "Morise islam"
      job ="Web designer"
      />
      <Props 
      img = {TWO}
      name = "Morise islam"
      job ="Web designer"
      />
      <Props 
      img = {Three}
      name = "Morise islam"
      job ="Web designer"
      />
      <Props 
      img = {Four}
      name = "Morise islam"
      job ="Web designer"
      />
      </section>
      {/* /////// */}
      <section className="simple2 container">
       <p>
        1k + Brands Trust Us 
       </p>
       <div className="img-flex">
       <div className="img-dad-last ">
       <img src={Envto} alt="pic" />
       </div>
       <div className="img-dad-last hide">
       <img src={Envto} alt="pic" />
       </div>
       <div className="img-dad-last hide">
       <img src={Envto} alt="pic" />
       </div>
       <div className="img-dad-last hide">
       <img src={Envto} alt="pic" />
       </div>
       <div className="img-dad-last hide">
       <img src={Envto} alt="pic" />
       </div>
       </div>
      </section>
    <Footer />
    </div>
  )
}
