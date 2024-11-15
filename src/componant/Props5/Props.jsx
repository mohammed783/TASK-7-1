import "./Props.css"

export default function Props({img , name , job}) {
  return (
    <div className="prop-5">
      <img src={img} alt="per img" />
      <div className="back">
        <h3>{name}</h3>
        <p> {job}</p>
      </div>
    </div>
  )
}
