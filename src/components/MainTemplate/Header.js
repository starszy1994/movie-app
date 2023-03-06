import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import logo1 from "../../images/film_ico.png";
import {TiHome} from 'react-icons/ti'
import {GrMonitor, GrSearchAdvanced} from 'react-icons/gr'


const Header = () => {
  return (
    <Styled.Title>
      <Link to="/">
        <img src={logo1} alt="Movie Page" />
      </Link>
      <div>
        <Styled.List to="/"><TiHome color="black"/>  Home Page</Styled.List>

        <Styled.List to="/topfilm"><GrMonitor/>  TV Serial</Styled.List>

        <Styled.List to="/search"><GrSearchAdvanced/>  Search</Styled.List>
      </div>
    </Styled.Title>
  );
};

export default Header;
