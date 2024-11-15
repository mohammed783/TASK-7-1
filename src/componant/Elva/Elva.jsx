import Our from "../Ourcomp/Ourcomp.jsx"  ; 
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Props1 from "../Props1/Props1.jsx";
import icon1 from "../../assets/imges/serviceIcon1_2.svg" ; 
import icon2 from "../../assets/imges/serviceIcon1_3.svg" ; 
import icon3 from "../../assets/imges/serviceIcon1_4.svg" ; 
import icon4 from "../../assets/imges/serviceIcon1_1.svg" ; 

import "./Elva.css" ; 
import Vid from "../../assets/imges/_import_61f226dc648710.99995886_FPpreview.mp4" ; 

export default function Elva() {
  return (
    <section className="elva-dad">
       <div className="container">
      <div className="elva1">
        <Our
        title1="Our Services"
        title2="Elevating Businesses With IT Ingenuity"
        />
        <div className="icons-elva">
            <div className="elva-ico1">
            <FaArrowLeftLong />
            </div>
        <div className="spe-elva">
        <FaArrowRightLong className="speee" />
        </div>    
        </div>
      </div>
      <div className="elva2">
        <div className="hide">
        <Props1
        title={"Woo Commerce"}
        des={"Collborativity Formulate Principle Capital  Progressively evolve user revolutionary hosting services"}
        icon = {icon1}
        />
        </div>
        <div className="hide">
        <Props1 
        title={"CRM Solutions"}
        des={"Collborativity Formulate Principle Capital  Progressively evolve user revolutionary hosting services"}
        icon = {icon2}
         />
        </div>
        <div className="show">
        <Props1 
         title={"WEB Design"}
         des={"Collborativity Formulate Principle Capital  Progressively evolve user revolutionary hosting services"}
         icon = {icon3}
        />
        </div>
        <div className="hide">
        <Props1 
         title={"Data Guard Sentinel"}
         des={"Collborativity Formulate Principle Capital  Progressively evolve user revolutionary hosting services"}
         icon = {icon4}
         />
        </div>
      </div>
      <div className="vid">
        <video autoPlay loop src= {Vid}></video>
      </div>
    </div>
    </section>
   
  )
}
