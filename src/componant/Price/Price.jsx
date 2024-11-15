import "./Price.css" ; 
import Our from "../Ourcomp/Ourcomp.jsx"  ; 
import pricImg from "../../assets/imges/pricingIcon1_2.svg" ; 
import Card from "../Card/Card.jsx" ; 
import dimon from "../../assets/imges/pricingShape1_2.webp"
import click from "../../assets/imges/pricingShape1_1.webp"
import Conta from "../Conta/Conta.jsx";
export default function Price() {
  return (
    <section className="price">
        <div className="p-i-1">
        <img src={dimon} alt="Dimoned img" />
        </div>
       
        <div className="container">
            <div className="pric-1">
            <Our 
            className="our-pric"
            center ={true}
                title1="Our Pricing"
                title2="Our Awesome Pricing Plans"
            />
            <div className="price1-1">
            <div className="but">
                <span className="blue">Monthly</span>
                <span>Yearly</span>
            </div>
            <img src={pricImg} alt="arrow img" />

            <span className="save">Save 25 % </span>
            </div>
            </div>
            <div className="cards">
            <Card />    
            <Card 
            color={true}
            />
            <Card />
            </div>
            <Conta />
        </div>
        <div className="p-i-2">
             <img src={click} alt="click img" />
        </div>
       
    </section>
   
  )
}
