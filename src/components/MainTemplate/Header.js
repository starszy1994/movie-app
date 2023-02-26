import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from "./Header.styles"
import logo1 from "../../images/logoMovies123.jpg"

const Header = () => {
  return (
    <Styled.Title>
        <Link to="/">
            <img src={logo1} alt="Movie Page" />
            </Link>
            <nav>
              <Styled.List>
                <li>
                <Link to="/topfilm">Top Film</Link>
                </li>
                <li>
                <Link to="/homepage">Home Page</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </Styled.List>
            </nav>
                </Styled.Title>

  )
}

export default Header
