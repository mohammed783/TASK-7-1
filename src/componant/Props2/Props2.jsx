import "./Props2.css" ; 

export default function Props2({number , head , color}) {
  return (
    <div className="p2-dad">
      <div  className={color ? 'white-color' : 'spe2'} >{number}</div>
      <h5> {head} </h5>
      <p>
      There are many varitions of passages of lorem ipsum available ,
       but the majority have suffered alteration
      </p>
    </div>
  )
}
