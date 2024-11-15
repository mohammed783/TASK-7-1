import"./Conta.css" ; 
import contaImg from "../../assets/imges/ctaThumb1_1.webp" ; 
import contaImg2 from "../../assets/imges/ctaShape1_1.webp" ; 
import Our from "../Ourcomp/Ourcomp.jsx"  ; 
import { FaArrowRightLong } from "react-icons/fa6";

export default function Conta() {
  return (
    <div className="conta">
        <div className="img-b-dad">
        <div className="container">
        <div>
            <img src={contaImg} alt="conat img" />
        </div>
        <Our 
            className="s"
            center ={false}
            color={true}
                title1="Contact Us"
                title2="24/7 Expert Hosting  Support Our Customers Love"
            />
        <button>
            TALK TO SPECIALEST
            <FaArrowRightLong  />
        </button>
      </div>
      <div  className="conta-be" >
            <img src={contaImg2} alt="conta img"
           />
        </div>
        </div>
    </div>
  )
}
