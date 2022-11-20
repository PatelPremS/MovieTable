import React from 'react';

import MovieDate from './MovieDate';
import Card from '../UI/Card';
import './MoviesTable.css';

const MoviesTable = (props) => {
  return (
    <Card className='movie-table'>
      <MovieDate date={props.date} />
      <div className='movie-table__description'>
        <h2>{props.name}</h2>
        <div className='movie-table__price'>${props.earning}</div>
      </div>
    </Card>
  );
}

export default MoviesTable;