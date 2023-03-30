import styled from "styled-components";


export const Wrapper = styled.div`
background: rgba(0, 0, 0, 0.2);
display: flex;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  margin: auto;
  height: 520px;

  & > img {
    width: 80%;
    object-fit: cover;
    height: 520px;
  }
`

export const Subtitle = styled.h4`
font-size: 20px;


`

export const Title = styled.h1`
font-size: 30px;
margin: auto;
text-align: center;
`


export const Vote = styled.p`
  text-align: right;
  font-size: 12px;
  margin-right: 20px;
`

export const Topka = styled.h1`
text-align: center;
font-size: 50px;
`

export const Lottery = styled.h1`
text-align: center;
`