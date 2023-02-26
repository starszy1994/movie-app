import React from 'react'
import CardMovie from '../CardMovie/CardMovie'
import * as Styled from "./Movies.styles"

const Movies = ({movies}) => {
  return (
    <Styled.Conteiner>
      {movies.map((movie) => <CardMovie key={movie.id} movie={movie}/>)}
    </Styled.Conteiner>
  )
}

export default Movies
