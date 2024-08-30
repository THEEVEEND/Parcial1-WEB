import './Basecard.css'


const Basecard = ({Category, Title, Price, image}) => {
  return (
    <div className="basecard">
    
     <div className='category-info'>
        <img src={image} alt={Title} />
        <h2>{Title}</h2>
        <p>{Price}</p>
     </div>
    </div>
  );
};

export default Basecard;