import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px auto;
  max-width: 80%;
  border: black solid 4px;

  & > img {
    max-width: 30%;
  }
`

export const Subtitle = styled.h4`
font-size: 15px;
margin-left: 10px;
margin-bottom: 100px;


`

export const Title = styled.h1`
font-size: 40px;
margin-left: 10px;
text-align: center;
font-style:italic;
margin-bottom: 100px;
`


export const Data = styled.p`
font-size: 15px;
text-align: right;
margin-bottom: 100px;
`

export const Vote = styled.p`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  text-align: right;
`