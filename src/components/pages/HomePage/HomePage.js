import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies";



const HomePage = () => {
    
    const {movies, loading, error} = useMoviesData("/popular");

  return <div>
    <Movies movies={movies}/>
  </div>;
};

export default HomePage;