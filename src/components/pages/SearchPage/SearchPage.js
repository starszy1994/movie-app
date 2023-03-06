import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import Header from "../../MainTemplate/Header";
import BottomPage from "../../MainTemplate/BottomPage";
import MainTemplate from "../../MainTemplate/MainTemplate";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let debounce = null;
    debounce = setTimeout(() => getData(), 1000);
    return () => clearInterval(debounce);
  }, [query]);

  const getData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <MainTemplate>
    <Styled.Wrapper>
      <div>
        <Styled.Wpis>
          <input
            value={query}
            onChange={handleChange}
            placeholder="Search movie"
          />
        </Styled.Wpis>
        <Styled.Wynik>
          <div>
            {!movies.length ? (
              <p>Not found</p>
            ) : (
              movies.map((movie) => (
                <Styled.LinkMovie to={`/movie/${movie.id}`} key={movie.id}>
                  {" "}
                  "{movie.title}" Year: {movie.release_date} "
                  {movie.vote_average}⭐"
                </Styled.LinkMovie>
              ))
            )}
          </div>
        </Styled.Wynik>
      </div>
      <BottomPage/>
    </Styled.Wrapper>
    </MainTemplate>
  );
};

export default SearchPage;
