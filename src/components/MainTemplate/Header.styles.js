import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;

    & > img {
        width: 20%;
    height: 200px;
    object-fit: cover;
    }
`

export const List = styled(Link)`
    color: rgba(255, 255, 255, 0.641);
    text-decoration: none;
`