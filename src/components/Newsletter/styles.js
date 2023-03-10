import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 1px;
    color: white;
    margin-bottom: 150px;
`

export const Title = styled.h2`
    border-radius: 20px;
    background-color: rgb(22,22,22);
    width: 80%;
    max-width: 1440px;
    margin: auto;
    text-align: center;
    padding: 20px;
`


export const Mail = styled.input`
    width: 60%;
    max-width: 1440px;
    text-align: center;
    border-radius: 30px;
    height: 30px;
    float: center;
    font-size: 20px;
`

export const Info = styled.p`
    text-align: left;
    color: red;
    margin-left: 65px;
    font-size: 15px;
`

export const LinkMovie = styled(Link)`
text-decoration: none;
`