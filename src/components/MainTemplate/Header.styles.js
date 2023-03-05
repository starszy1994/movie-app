import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 100px;
  margin-bottom: 20px;

  align-items: center;
  display: flex;
  height: 80px;
  position: relative;

  & > img {
    height: 15px;
    object-fit: cover;
    margin-top: 50px;
  }
`;

export const List = styled(Link)`
  width: 70%;
  font-size: 25px;
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-style: italic;
`;
