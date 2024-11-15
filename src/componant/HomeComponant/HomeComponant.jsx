import { FaStar } from "react-icons/fa";
import profile from "../../assets/imges/profileShape1_1.webp" ; 
import "./HomeComponant.css"
export default function HomeComponant() {
  return (
    <>
    <div className="compo-father">
    <div className="compo st">
        <h5>Trustipiolit</h5>
        <div className="pro-flex">
        <img src={profile} alt="profile image" />
        <div className="son-flex">
            <div className="stars-dad">
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p>450+reviews</p>
        </div>
        </div>
    </div>
    {/* /////////////// */}


    <div className="line">
    </div>

        <div className="compo ed">
        <h5>Google</h5>
        <div className="pro-flex">
        <img src={profile} alt="" />
        <div className="son-flex">
            <div className="stars-dad">
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p>450+reviews</p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
