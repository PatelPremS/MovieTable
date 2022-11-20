import React from 'react';

import './MovieDate.css';

const MovieDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='movie-date'>
      <div className='movie-date__month'>{month}</div>
      <div className='movie-date__year'>{year}</div>
      <div className='movie-date__day'>{day}</div>
    </div>
  );
};

export default MovieDate;