import styled from "styled-components";


export const Wrapper = styled.article`
  max-width: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  & > h3 {
    background-color: yellow;
    width: 100%;
    margin: 2px;
    text-align: left;
    line-height: 60px;
    font-size: 15px;
    font-style: italic;
  }

  & > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
`

export const Card = styled.div`
   position: absolute;
   bottom: 9px;
   right: 6px;
   background-color: gray;
   padding: 8px;
   border-radius: 12px;
   font-weight: 800;
   font-size: 1.2rem;
   color: yellow;
`