import React from 'react'
import * as Styled from "./styles"
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {SlPeople} from 'react-icons/sl'
import {AiOutlineStar, AiFillFire} from 'react-icons/ai'
import { Button } from '../Button/styles'
import { Link } from 'react-router-dom'

const FeaturedMovie = ({featured}) => {  
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
            <Styled.Topka>WATCH TODAY  {<AiFillFire/>}</Styled.Topka>
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
        {/* <span>Premiere: {featured.release_date} <RxCounterClockwiseClock color='yellow'/></span> */}
      <span>Vote rating: {featured.vote_average} <AiOutlineStar color='yellow'/> </span>
      {/* <span>Vote count: {featured.vote_count} <SlPeople color="yellow"/> </span> */}
      </Styled.Vote>
      </div>
    </Styled.Wrapper>
    <Styled.Lottery>
    <Button onClick={refreshPage}>CHANGE MOVIE</Button>
      </Styled.Lottery>
    </div>
  )
}

export default FeaturedMovie
