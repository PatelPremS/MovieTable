import React from 'react';

import MoviesTable from './MoviesTable';
import Card from '../UI/Card';
import './Movies.css';

const Movies = (props) => {
  return (
    <Card className="movies">
      <MoviesTable
        name={props.items[0].name}
        earning={props.items[0].earning}
        date={props.items[0].date}
      />
      <MoviesTable
        name={props.items[1].name}
        earning={props.items[1].earning}
        date={props.items[1].date}
      />
      <MoviesTable
        name={props.items[2].name}
        earning={props.items[2].earning}
        date={props.items[2].date}
      />
      <MoviesTable
        name={props.items[3].name}
        earning={props.items[3].earning}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Movies;