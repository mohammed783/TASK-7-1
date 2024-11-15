import "./Stay.css" ; 
import stayImg from "../../assets/imges/ctaThumb.webp" ; 
import { FaArrowRightLong } from "react-icons/fa6";
export default function Stay() {
  return (
    <div className="stay">
      <div className="container">
        <div className="pos-dad">
            <div className="stay-img-dad">
            <img src={stayImg} alt="person img" />
            </div>
            <div className="wellstay">
            <p className="stay-para">
            Stay Connected with cutting Edge IT
         </p>
         <button> 
            Talk To A SPECALIST 
         <FaArrowRightLong  />
         </button>
            </div>
        
        </div>
      </div>
    </div>
  )
}
