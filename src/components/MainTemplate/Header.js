import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import logo1 from "../../images/film_ico.png";

const Header = () => {
  return (
    <Styled.Title>
      <Link to="/">
        <img src={logo1} alt="Movie Page" />
      </Link>
      <div>
        <Styled.List to="/">Home Page</Styled.List>

        <Styled.List to="/topfilm">TV Serial</Styled.List>

        <Styled.List to="/search">Search</Styled.List>
      </div>
    </Styled.Title>
  );
};

export default Header;
