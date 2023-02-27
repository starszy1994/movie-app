import React, {Suspense} from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import MainTemplate from "../../MainTemplate/MainTemplate";
import Movies from "../../Movies/Movies";


const HomePage = () => {
    
    const {movies, loading, error} = useMoviesData("/popular");

  return (
    <MainTemplate>
    <Movies movies={movies}/>
    </MainTemplate>
  )
};

export default HomePage;