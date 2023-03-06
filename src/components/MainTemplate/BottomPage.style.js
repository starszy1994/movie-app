import styled from "styled-components";

export const Wrapper = styled.article`
background-color: #393d4c; 
margin-top: 50px;
`

export const Title = styled.h1`
display: flex;
flex-direction: row;
justify-content: space-around;
font-size: 20px;
margin-right: 20px;

& > p {
    font-size: 10px;
}
`