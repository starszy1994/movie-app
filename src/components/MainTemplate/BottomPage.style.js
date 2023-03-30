import styled from "styled-components";

export const Wrapper = styled.article`
display: flex;
flex-direction: row;
background-color: #393d4c; 
margin: auto;
padding: 10px;
@media screen {
 display: flex;
 flex-direction: column;   
}
`

export const Title = styled.h1`
display: flex;
flex-wrap: wrap;
align-items: center;
position: relative;
font-size: 15px;
margin: 10px;

& > p {
    font-size: 10px;

}
`
