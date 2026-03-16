import "./herosection.css";



export const SectorsImage = ({image,number,text}) => {
  return (
    <div className="image">
      <h3>{number}</h3>
      <img src={image} alt='sectors'/>
      <p>{text}</p>
    </div>
  );
}
