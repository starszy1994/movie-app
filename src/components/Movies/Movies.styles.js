import styled from "styled-components";

export const Conteiner = styled.article`
max-width: 80%;
margin-left: auto;
margin-right: auto;
display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 15px;
`