import React from 'react';

const Title = ({ title, sub }) => {
  return (
    <div className='title-holder'>
      <h2>{title}</h2>
      <div className='subtitle'>{sub}</div>
    </div>
  );
};

export default Title;
