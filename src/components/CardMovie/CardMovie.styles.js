import styled from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
  max-width: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  
  & > h3 {
    background-color: gray;
    width: 100%;
    margin: 2px;
    text-align: center;
    line-height: 20px;
    font-size: 15px;
    font-style: italic;
  }

  & a {

  }

  & > img {
    width: 100%;
    object-fit: cover;
    border-radius: 20%;
  }
`

export const Card = styled.div`
   position: absolute;
   top: 20px;
   right: 20px;
   background-color: rgba(12,21,12,0.5);
   padding: 1px;
   border-radius: 12px;
   font-weight: 800;
   font-size: 1.2rem;
   color: gold;
`

export const Linkaa = styled(Link)`
text-decoration: none;
color: black;
`