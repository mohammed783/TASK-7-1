import brandimg1 from "../../assets/imges/brandLogo1_1.svg" ; 
import brandimg2 from "../../assets/imges/brandLogo1_2.svg" ; 
import brandimg3 from "../../assets/imges/brandLogo1_3.svg" ; 
import brandimg4 from "../../assets/imges/brandLogo1_4.svg" ; 
import brandimg5 from "../../assets/imges/brandLogo1_5.svg" ; 

import "./Brands.css" ; 

export default function Brand() {
  return (
    <div className="brand-cont">
          <div className="container ">
         <div className="brands-dad">

            <div className="hide">
            <img src={brandimg1} alt="brand img"  />
            </div>

            <div className="hide">
            <img src={brandimg2} alt="brand img" />
            </div>
      
            <div className="show">
            <img src={brandimg3} alt="brand img" />
            </div>

            <div className="hide">
            <img src={brandimg4} alt="brand img" />
            </div>

            <div className="hide">
            <img src={brandimg5} alt="brand img" />
            </div>
     
    </div>
    </div>
    </div>
  
  )
}
