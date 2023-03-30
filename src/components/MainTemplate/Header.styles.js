import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
width: 80%;
height: 240px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;


  & > img {
    object-fit: cover;
    margin-top: 50px;
  }
`;

export const List = styled(Link)`
display: wrap;
flex-wrap: wrap;
color: black;
margin: auto;
font-size: 20px;
padding: 10px;
width: 100%;
text-decoration: none;
`