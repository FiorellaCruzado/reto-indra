import React from 'react';

const CardIcon = ({
  icon,
  title,
  description
}) => {

  let sign = 'ic_remove'

  return (
    <div className='cardicon grid'>
      <div className='grid-2'>
        <img src={`%PUBLIC_URL%/../images/${icon}.svg`} alt="" />
      </div>

      <div className='grid-10'>
        <div className='cardicon__title'>{title}</div>
        <div className='d-flex'>
          <div>
            <img src={`%PUBLIC_URL%/../images/${sign}.svg`} alt="" />
          </div>
          <div className='cardicon__accion'>QUITAR</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default CardIcon;
