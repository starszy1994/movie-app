import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import logo1 from "../../images/logoMovies123.jpg";

const Header = () => {
  return (
    <Styled.Title>
      <Link to="/">
        <img src={logo1} alt="Movie Page" />
      </Link>
      <div>
          <Styled.List to="/topfilm">TV Serial</Styled.List>

          <Styled.List to="/">Home Page</Styled.List>

          <Styled.List to="/contact">Contact</Styled.List>
      </div>
    </Styled.Title>
  );
};

export default Header;
