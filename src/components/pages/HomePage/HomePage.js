import React, {Suspense} from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import MainTemplate from "../../MainTemplate/MainTemplate";
import Movies from "../../Movies/Movies";


const HomePage = () => {
    
    const {movies:popular , loading, error} = useMoviesData("/popular");
    const {movies:top_rated} = useMoviesData("/top_rated");
    const {movies:upcoming} = useMoviesData("/upcoming");


  return (
    <MainTemplate>
    <Movies title="Popular Movies" movies={popular}/>
    <Movies title="Top Rated" movies={top_rated}/>
    <Movies title="Upcoming" movies={upcoming}/>
    </MainTemplate>
  )
};

export default HomePage;