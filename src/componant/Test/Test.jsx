import "./Test.css" ; 
import Our from "../Ourcomp/Ourcomp.jsx"  ; 
import Props3 from "../Props3/Props3.jsx" ; 
import opimg1 from "../../assets/imges/testiThumb3_1.webp"
import opimg2 from "../../assets/imges/testiThumb3_2.webp"
import opimg3 from "../../assets/imges/testiThumb3_3.webp"

export default function Test() {
  return (
    <div className="test">
      <div className="container">
      <Our 
            className="s"
            center ={true}
            color={false}
                title1="TESTIMONIALS"
                title2="OUR Latest Client Feedback"
            />


        <div className="props3-dad">
            <div className = "prop3 hide">
            <Props3
        color ={false}
        img ={opimg1}
        name = "Kristin Watson"
        job = "Web Designer"
        text = "Extech has completely transformed our process . the user-friendly interface and powerful features maintioning our Website . Highly recommended for all"
        />
            </div>
      
        <div className="prop3 show">
        <Props3
        color ={true}
        img ={opimg2}
        name ="Theresa Webb"
        job = "Tech enthusiast"
        text ="Ive been using Extech for several Months now , and im exrtemely impressed with the ease of customaxiation it offers , the wide rang of Templates   "
        />
        </div>
       
        <div  className = "prop3 hide">
        <Props3
        color ={false}
        img ={opimg3} 
        name ="Ronald Richard"
        job  ="web Enterprenuor"
        text ="Extech offers exceptional Value for money . the comperhensive suites of tools and seamless integration whith various plugins and services make it a for all "
        />
        </div>
        </div>

        <div className="shape-100">
            <div className="inner-shape"></div>
        </div>
      </div>
    </div>
  )
}
