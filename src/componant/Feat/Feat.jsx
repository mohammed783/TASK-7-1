import"./Feat.css" ; 
import Our from "../Ourcomp/Ourcomp.jsx"  ; 
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Props4 from "../Props4/Props4.jsx";
import blogimg1 from "../../assets/imges/blogThumb1_2.webp"
import blogimg11 from "../../assets/imges/blogThumb1_1.webp"
import blogimg12 from "../../assets/imges/blogThumb1_3.webp"
import blogimg2 from "../../assets/imges/blogProfile1_2.webp"
import blogimg21 from "../../assets/imges/blogProfile1_1.webp"
import blogimg22 from "../../assets/imges/blogProfile1_3.webp"
export default function Feat() {
  return (
    <div className="feat">
      <div className="container">
        <div className="sec1">
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
        <div className="sec2">
        <div className="prop-dad-n">
            <Props4
        img1={blogimg1}
        img2={blogimg2}
        spe ="uncategoraized"
        date="MARCH 14,2024"
        text ="Best And Fastest Data Server Ever"
        />
            </div>
            {/* /////// */}
            <div className="prop-dad-n hide">
            <Props4
        img1={blogimg11}
        img2={blogimg21}
        spe ="uncategoraized"
        date="MARCH 14,2024"
        text ="Best And Fastest Data Server Ever"
        />
        </div>
        {/* /////// */}
            <div className="prop-dad-n hide">
            <Props4
        img1={blogimg12}
        img2={blogimg22}
        spe ="uncategoraized"
        date="MARCH 14,2024"
        text ="Best And Fastest Data Server Ever"
        />
            </div>
       
        </div>
      </div>
    </div>
  )
}
