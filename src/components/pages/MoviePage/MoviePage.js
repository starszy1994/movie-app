import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Header from "../../MainTemplate/Header";
import * as Styled from "./styles";

const MoviePage = () => {
  const params = useParams();

  const {
    movies: movie,
    loading,
    error,
  } = useMoviesData(`/movie/${params.id}`);
  console.log(movie);
  if (!movie) return;

  return (
<div>
      <Styled.Heder>
        <Header></Header>
      </Styled.Heder>

          <Styled.Wrapper>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <Styled.Info>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
          <p>Original language: {movie.original_language} </p>
        </Styled.Info>
      </div>
      <Styled.Title>
        <div>
          <h3>Original Title: "{movie.title}"</h3>
          <Styled.Subtitle>
            <p>{movie.overview}</p>
          </Styled.Subtitle>
          <Styled.Homepage>
            <a href={movie.homepage}>Original page: {movie.title}</a>
            <p>Category: {movie.genres[0].name}</p>
            <p>Total budget: {movie.budget}$</p>
          </Styled.Homepage>
        </div>
      </Styled.Title>
    </Styled.Wrapper>
    </div>
  );
};

export default MoviePage;
