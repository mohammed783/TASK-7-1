import"./Props4.css" ; 
import { FaArrowRightLong } from "react-icons/fa6";

export default function Props4() {
  return (
    <div className="prop-44">
        <div className="dady">
            <div className="p4-img">
              <img src="" alt=" img" />
            </div>
            <div className="p-4-card">
                <div className="span-dad">
                <span className="spe-span">{}</span> 
                <span className="date-span"> {} </span>
                </div>
                <h3>{}</h3>
        {/* <div className="line-fea"></div> */}
        <div className="p-4-flex-son">
            <div className="p-4-flex-grand-son">
            <img src="" alt="persno img" />
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
