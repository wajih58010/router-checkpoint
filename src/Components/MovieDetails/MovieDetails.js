
import React from 'react'
import { Card } from 'react-bootstrap'
import MovieRating from '../Rating/Rating'
import ModalAddMovie from '../AddMovie/AddMovie'
import { Route, Switch } from "react-router-dom";
import moviesData from '../MoviesData'
import './MovieDetails.css'

const MovieDetails = ({ location }) => {
  const movie = location.state.movie;
  return (

    <div>
        <h1>description: {location.description}</h1>
        <h1>Trailer Link: {location.trailerLink}</h1>
    </div>
  );
};
//const MovieDetails = (location) => {

    /*const movieId = parseInt(props.id, 10);

    const movie = moviesData.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
        <div>
            <h3>{movie[0].trailerLink}</h3>
            <h6>{movie[0].description}</h6>
        </div>
        );
*/
//}

export default MovieDetails
