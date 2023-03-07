import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 200px auto;
  max-width: 80%;
  border: black solid 4px;
  color: azure;

  & > img {
    max-width: 30%;
  }
`

export const Subtitle = styled.h4`
font-size: 25px;
margin-left: 80px;
margin-right: 80px;
margin-bottom: 100px;


`

export const Title = styled.h1`
font-size: 60px;
margin-left: 10px;
text-align: center;
margin-bottom: 60px;
`


export const Vote = styled.p`
  display: flex;
  justify-content: space-around;
  text-align: right;
  font-size: 20px;
`