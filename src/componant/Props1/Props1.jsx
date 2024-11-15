import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Props1.css"


export default function Props1({title , des , icon}) {
  return (
    <div className="props1-dad">
        <div className="props-icon-dad">
        <img src={icon} alt="icon" />
        </div>
      <h4>{title}</h4>
      <p>{des} 
      </p>
      <button>
        Read more <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  )
}
