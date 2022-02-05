import React from 'react';
import CardIcon from './CardIcon';

const Toppings = () => {
  return (
    <div className="toppings">
      <div className="toppings__title">Agrega o quita coberturas</div>

      <div className="grid">
        <div className='toppings__menu toppings__menu--active grid-4'>Protege a tu auto</div>
        <div className='toppings__menu grid-4'>Protege a los que te rodean</div>
        <div className='toppings__menu grid-4'>Mejora tu plan</div>
      </div>

      <div>
        <CardIcon
          icon='icon_theft'
          title='Llanta robada'
          description='He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
            y mucho más'
        />
        <CardIcon
          icon='icon_damage'
          title='Choque y/o pasarte la luz roja'
          description='Choque y/o pasarte la luz roja' 
        />
        <CardIcon
          icon='icon_perdidatotal'
          title='Atropello en la vía Evitamiento'
          description='Atropello en la vía Evitamiento'
        />
      </div>

    </div>
  );
};

export default Toppings;