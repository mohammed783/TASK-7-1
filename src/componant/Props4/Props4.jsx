import"./Props4.css" ; 
import { FaArrowRightLong } from "react-icons/fa6";

export default function Props4({ img1 , spe , text , img2 , date}) {
  return (
    <div className="prop-44">
        <div className="dady">
            <div className="p4-img">
              <img src={img1} alt=" img" />
            </div>
            <div className="p-4-card">
                <div className="span-dad">
                <span className="spe-span">{spe}</span> 
                <span className="date-span"> {date} </span>
                </div>
                <h3>{text}</h3>
        {/* <div className="line-fea"></div> */}
        <div className="p-4-flex-son">
            <div className="p-4-flex-grand-son">
            <img src={img2} alt="persno img" />
            <div className="flex-elx">
                <p>Admin</p>
                <p>Co founder</p>
            </div>
            </div>
            <button><FaArrowRightLong  /></button>
        </div>
            </div>
        </div>
    
    </div>
  )
}
