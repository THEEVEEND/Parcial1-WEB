import './Categories.css'
import Basecard from '../Basecard/Basecard';
import { planDeViajes } from '../../Data';

const Categories = () => {
  return (
    <div className="Categories">
        <h1>Lugares turisticos</h1>
        <div className='Food'>
            <h1 className='Category'>Alimentación</h1>
                <div className='Food-info'>
                {planDeViajes.alimentacion.map((item, index) => (
                <Basecard 
                key={index}
                Category={'Alimentación'} 
                image={item.imagen} 
                Title={item.titulo} 
                Price={item.precio} 
                /> ))}
                </div>
        </div>

        <div className='Food'>
            <h1 className='Category'>Hoteles</h1>
                <div className='Food-info'>
                {planDeViajes.hoteles.map((item, index) => (
                <Basecard 
                key={index}
                Category={'Hoteles'} 
                image={item.imagen} 
                Title={item.nombre} 
                Price={item.costo} 
                /> ))}
                </div>
        </div>
        
        <div className='Food'>
        <h1 className='Category'>Destinos</h1>
        <div className='Food-info'>
            {Object.entries(planDeViajes.destinosdla).map(([key, item], index) => (
            <Basecard 
                key={index}
                Category={'Destinos'} 
                image={item.imagen} 
                Title={item.nombre} 
                Price={item.precio} 
            />
            ))}
        </div>
        </div>

        
     
    </div>
  );
};

export default Categories;