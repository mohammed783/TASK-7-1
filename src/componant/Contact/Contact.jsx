import "./Contact.css" ; 
import Navbar2 from "../Navbar2/Navbar2";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Footer/Footer.jsx" ; 
import { FaArrowRightLong } from "react-icons/fa6";
import Video from "../../assets/imges/video.webp" ; 
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
//import map from "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.5222015313834!2d36.273951175536624!3d33.51380617336453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0b2fd166793%3A0x1e5a4e39ab5956f3!2sUmayyad%20Square!5e0!3m2!1sen!2s!4v1724169182886!5m2!1sen!2s"
export default function Contact() {
  return (
    <div>
     <Navbar2 />
     <div className="conat-hero">
        <h2>Contact us</h2>
        <p> Home 
        <IoIosArrowForward />
          About us 
        </p>
      </div>
      {/* ////////////// */}
      <section className="Conatact-n-simple container">
      <div className="slid1">
       <div className="slid1-son">
        <div className="first">
        <MdOutlinePermPhoneMsg className="icon" />
        <div>
          <p className="light-color">call us 7/24</p>
          <p>+208-555-0112</p>
        </div>
        </div>
        <div className="sec">
        <MdAttachEmail  className="icon"/>
        <div>
          <p className="light-color">Make a quote</p>
          <p>infotech@gamil.com</p>
        </div>
        </div>
        <div className="thr">
        <IoLocationOutline  className="icon"/>
        <div>
          <p className="light-color">location</p>
          <p>4517 washintongton ave</p>
        </div>
        </div>
       
       </div>
       <div className="vid-dad">
        <img src={Video} alt="video here" />
       </div>
      </div>
      <div className="slide2">
        <h2>Readt to get Started</h2> 
        <p className="light-color">Lorem ipsum dolor sit amet. Quod nostrum non porro, nemo corporis atque inventore, fugiat
        </p>
        <form action="">
          <div className="top-form">
            <div className="inner-form">
            <label htmlFor="">your name</label>
            <input type="text" />
            </div>
            <div  className="inner-form">
            <label htmlFor="">your Email</label>
            <input type="text" />
            </div>
          </div>
          <div className="bot-form">
           <label htmlFor="">Write message</label>
           <textarea name="" id="" className="area"></textarea>
          </div>
        </form>
        <button>
          Send Massege 
          <FaArrowRightLong />
        </button>
      </div>
      </section>
      <section className="map">
      {/* <div >
    <iframe src={map} width="300" height="300" 
     allowfullscreen="" loading="lazy" ></iframe>
      </div> */}
      </section>
      <Footer />
    </div>
  )
}
