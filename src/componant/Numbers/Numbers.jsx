import "./Numbers.css" ; 
import Props2 from "../Props2/Props2";
export default function Numbers() {
  return (
    <div className="numbers">
         <div className="container">
        <div className="numbers-flex">
            <Props2 
            number = "01"
            head= "Requierment"
            color ={false}
            />
            <Props2 
            number = "02"
            head= "UI/UX Design"
            color ={true}
            />
            <Props2 
            number = "03"
            head= "Prototype"
            color ={false}
            />
            <Props2 
            number = "04"
            head= "Development"
            color ={false}
            />
        </div>
    </div>
    </div>
   
  
  )
}
