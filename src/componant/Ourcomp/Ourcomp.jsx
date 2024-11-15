import "./Ourcomp.css" ; 
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export default function Ourcomp({title1 ,title2, center , color }) {
  return (
    <>
     <div className="our-co">
      <div className={center ? "co-center" : " "}>
         <div className={color ? "our-white" : "tit"}>
      <LiaLongArrowAltLeftSolid />
      {title1}
        <LiaLongArrowAltRightSolid />
      </div>
      <h2  className={color ? "our-h2-white" : ""} >
      {title2}
      </h2>
      </div>
     
    </div>

    </>
   
  )
}
