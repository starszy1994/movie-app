import React from 'react'
import * as Styled from "./styles"

const FeaturedMovie = ({featured}) => {
  return (
    <Styled.Wrapper>
        <img src={`http://image.tmdb.org/t/p/w500/${featured.poster_path}`}
        alt={featured.title}/>
        <div>
        <Styled.Title>
        {featured.title}
        </Styled.Title>
        <Styled.Subtitle>
            {featured.overview}
        </Styled.Subtitle>
        <Styled.Data>
           Premiere: {featured.release_date}
        </Styled.Data>
        <Styled.Vote>
      <span>Vote rating: {featured.vote_average}⭐</span>
      <span>Vote count: {featured.vote_count}✔</span>
      </Styled.Vote>
      </div>
    </Styled.Wrapper>
  )
}

export default FeaturedMovie
