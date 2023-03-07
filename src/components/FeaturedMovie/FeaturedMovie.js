import React from 'react'
import * as Styled from "./styles"
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {SlPeople} from 'react-icons/sl'
import {AiOutlineStar} from 'react-icons/ai'

const FeaturedMovie = ({featured}) => {  return (
    <Styled.Wrapper>
        <img src={`http://image.tmdb.org/t/p/w500/${featured.poster_path}`}
        alt={featured.title}/>
        <div>
        <Styled.Title>
        "{featured.title}"
      
        </Styled.Title>
        <Styled.Subtitle>
            {featured.overview}
        </Styled.Subtitle>
        <Styled.Vote>
        <span>Premiere: {featured.release_date} <RxCounterClockwiseClock color='yellow'/></span>
      <span>Vote rating: {featured.vote_average} <AiOutlineStar color='yellow'/> </span>
      <span>Vote count: {featured.vote_count} <SlPeople color="yellow"/> </span>
      </Styled.Vote>
      </div>
    </Styled.Wrapper>
  )
}

export default FeaturedMovie
