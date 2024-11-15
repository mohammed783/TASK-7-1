import "./Props3.css" ; 
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";

export default function Props3({text , img , name , job , color}) {
  return (
    <div className={color ? "p3-granddad-blue" : "p3-granddad-white"}>
      <div className="stars-dad">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
      <div className={color ? "p3-p-w" : "p3-p"}>
        {text}
      </div>
      <div className="p3-felx-dad">
        <div className="p3-flex">
            <img src={img} alt="person img" />
            <div className = {color ? "pe-info-white" : "pe-info"}>
                <div className={color ? "name-w" : "name-b"}>
                    {name} </div>
                <div>{job}</div>
            </div>
        </div>
        <div className={color ? "que-dad-white" : "que-dad"}>
        <RiDoubleQuotesR />
        </div>
      </div>
    </div>
  )
}
