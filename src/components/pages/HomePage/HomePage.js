import React, {Suspense, useEffect, useState} from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import FeaturedMovie from "../../FeaturedMovie/FeaturedMovie";
import BottomPage from "../../MainTemplate/BottomPage";
import MainTemplate from "../../MainTemplate/MainTemplate";
import Movies from "../../Movies/Movies";
import Newsletter from "../../Newsletter/Newsletter";
import SearchPage from "../SearchPage/SearchPage";


const HomePage = () => {
    
    const {movies:popular , loading, error} = useMoviesData("movie/popular");
    const {movies:top_rated} = useMoviesData("movie/top_rated");
    const {movies:upcoming} = useMoviesData("movie/upcoming");

    const [featured, setFeatured] = useState();

    useEffect(() => {
      if(featured) return;
featuredMovie();
    }, [popular]);

    const featuredMovie = () => {
      if (!popular?.results) return;
      const result = Math.floor(Math.random()*popular.results.length)
      setFeatured(popular.results[result]);
    }

    console.log(featured)

  return (
    <MainTemplate>
    <Movies title="Popular Movies" movies={popular?.results}/>
    <Movies title="Top Rated" movies={top_rated?.results}/>
    <Movies title="Upcoming" movies={upcoming?.results}/>
    {featured ? <FeaturedMovie featured={featured}/> : "coming"}
    <Newsletter/>
    <BottomPage/>
    </MainTemplate>
  )
};

export default HomePage;