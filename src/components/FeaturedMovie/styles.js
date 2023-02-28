import styled from "styled-components";


export const Wrapper = styled.h2`
  display: flex;
  flex-direction: row;

  & > img {
    max-width: 40%;
  }
`

export const Subtitle = styled.h4`
font-size: 15px;
margin-left: 10px;

`

export const Title = styled.h1`
font-size: 40px;
margin-left: 10px;
text-align: center;
font-style:italic;
`


export const Data = styled.p`
font-size: 15px;
text-align: right;

`

export const Vote = styled.p`
  display: flex;
  justify-content: space-around;
  text-align: center;
`