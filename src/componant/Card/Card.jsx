import "./Card.css"  ;
import cloudImg from "../../assets/imges/pricingIcon1_1.svg" ; 
import { FaCheck } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

export default function Card({color}) {
  return (
    <div className="card-dad">
      <div className={color ? "more-blue-color-top" : "top"}>
        <div className="tp-r">
        <h6>Rgular Plans</h6>
        <p> <span className="big">$49</span> /Month</p>
        </div>
        <img src={cloudImg} alt="cloud img" />
      </div>
      <ul>
        <li>
        <FaCheck  className="card-chek"/>
            100 GB SSD Storge
            <HiOutlineQuestionMarkCircle  className="qq"/>
            </li>
        <li>
        <FaCheck className="card-chek"/>
            Weekly Backups
            <HiOutlineQuestionMarkCircle className="qq"/>
            </li>
        <li>
        <FaCheck className="card-chek"/>Unlimited Free SSL
        <HiOutlineQuestionMarkCircle className="qq"/>
        </li>
        <li>  <FaCheck className="card-chek"/> 24/7 System Monitoring
        <HiOutlineQuestionMarkCircle className="qq"/>
        </li>
        <li>  <FaCheck className="card-chek"/> Free Domain ($9.99 value) 
        <HiOutlineQuestionMarkCircle className="qq"/>
        </li>
        <li>
        <FaXmark className="xx"/>Farme 164236
        <HiOutlineQuestionMarkCircle className="qq"/>
        </li>
        <li>
        <FaXmark className="xx"/> 20+Payment Methods 
        <HiOutlineQuestionMarkCircle className="qq"/>
        </li>
      </ul>

      <div className={color ? "more-blue-color-but" : "buut1"}  >
        GET STARTED NOW
      </div>
    </div>
  )
}
