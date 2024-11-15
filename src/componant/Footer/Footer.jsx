import"./Footer.css" ;
import logoimg from "../../assets/imges/logo.svg"  ;
import { GrTwitter } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import footerimg1 from "../../assets/imges/footerThumb1_1.webp" ; 
import { CgCalendarDates } from "react-icons/cg";
import foooterimg2 from "../../assets/imges/footerThumb1_2.webp" ; 
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="cool-1">
            <div className="cool-1-img">
            <img src={logoimg} alt="logo" />
            </div>
            <p>
            Extexh IT is a Phasellus ultricies aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <div className="cool-1-icons">
                <div className="ayo">
                <FaFacebookF  />
                </div>
                <div className="ayo">
                <GrTwitter />
                </div>
                <div className="ayo">
                <FaYoutube  />
                </div>
                <div className="ayo">
                <FaInstagram/>
                </div>
            
            </div>
        </div>
        <div className="cool-2">
            <div className="h-and-lena">
            <h6>Quick Links</h6>
            <div className="lena">
            </div>
            </div>
       
            <ul>
                <li>
                <MdKeyboardDoubleArrowRight />
                    Extech About
                    </li>
                <li>
                <MdKeyboardDoubleArrowRight />
                     our Services
                     </li>
                <li>
                <MdKeyboardDoubleArrowRight />
                our blogs</li>
                <li><MdKeyboardDoubleArrowRight />FAQS</li>
                <li>
                <MdKeyboardDoubleArrowRight />Contact Us</li>
            </ul>
        </div>
        <div className="cool-3">
            <div className="h-and-lena">
            <h6>Recent Posts</h6>
            <div className="lena">
            </div>
            </div>
            <div className="cool-3-flex-1">
                <div className="cool-3-img-1">
                <img src={footerimg1} alt="footer img" />
                </div>
                <div className="small-f">
            <p className="light-color"> <CgCalendarDates /> 
            15th April,2024 </p>
            <p className="bold-c">top 5 most famous
                technology Trend in 2024
            </p>
                </div>
               
            </div>
            <div className="cool-3-flex-1">
                <div className="cool-3-img-1">
                <img src={foooterimg2} alt="footer img" />
                </div>
                <div className="small-f">
            <p className="light-color"> <CgCalendarDates /> 
            20th june,2024 </p>
            <p className="bold-c">the sufring man will blow your mind
            </p>
                </div>
               
            </div>
        </div>
        <div className="cool-4">
            <h6>Contact us </h6>
            <div className="lena">
            </div>
            <p> 
            <MdEmail />
                info@example.com
            </p>
            <p>
            <FaPhoneAlt />
                +208-6666-0112
            </p>
            <div>
            <input type="text" />
            <i></i>
            </div>
           
           <p>
           <FaRegSquare />
           i agree to the <span>privacy policy</span>
           </p>
        </div>
      </div>
    </div>
  )
}
