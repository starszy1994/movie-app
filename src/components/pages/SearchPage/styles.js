import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wpis = styled.div`
    text-align: center;
margin-top: 150px;

& > input {
    width: 60%;
    height: 25px;
    text-align: center;
    border: black solid 6px;
    font-size: 20px;
}
`

export const Wrapper = styled.h1`
`

export const Wynik = styled.p`
font-size: 30px;
text-align: center;
`
export const LinkMovie = styled(Link)`
text-decoration: none;
text-align: center;
display: flex;
flex-direction: column;
margin: 20px;
color: black;
`