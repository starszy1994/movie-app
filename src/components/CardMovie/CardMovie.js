import React from "react";
import * as Styled from "./CardMovie.styles";

// image.tmdb.org/t/p/w500/${movie.poster_path} "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg"

const CardMovie = ({ movie }) => {
  return (
    <Styled.Wrapper>
      <img
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>"{movie.title}"</h3>
      <Styled.Card>
        <marquee
          scrollamount="5"
          scrolldelay-="160"
          behavior="scroll"
          direction="left"
        >
          {movie.vote_average}⭐
        </marquee>
      </Styled.Card>
    </Styled.Wrapper>
  );
};

export default CardMovie;
