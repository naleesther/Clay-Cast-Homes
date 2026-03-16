import "./herosection.css";



export const SectorsImage = ({image,number,text}) => {
  return (
    <div className="image">
      <h3>{number}</h3>
      <img src={image} alt='image2'/>
      <p>{text}</p>
    </div>
  );
}
