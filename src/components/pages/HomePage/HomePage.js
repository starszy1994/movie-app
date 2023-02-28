import React, {Suspense, useEffect, useState} from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import FeaturedMovie from "../../FeaturedMovie/FeaturedMovie";
import MainTemplate from "../../MainTemplate/MainTemplate";
import Movies from "../../Movies/Movies";
import Newsletter from "../../Newsletter/Newsletter";


const HomePage = () => {
    
    const {movies:popular , loading, error} = useMoviesData("/popular");
    const {movies:top_rated} = useMoviesData("/top_rated");
    const {movies:upcoming} = useMoviesData("/upcoming");

    const [featured, setFeatured] = useState();

    useEffect(() => {
      if(featured) return;
featuredMovie();
    }, [popular]);

    const featuredMovie = () => {
      const result = Math.floor(Math.random()*popular.length)
      setFeatured(popular[result]);
    }

    console.log(featured)

  return (
    <MainTemplate>
    <Movies title="Popular Movies" movies={popular}/>
    <Movies title="Top Rated" movies={top_rated}/>
    <Movies title="Upcoming" movies={upcoming}/>
    {featured ? <FeaturedMovie featured={featured}/> : "coming"}
    <Newsletter/>
    </MainTemplate>
  )
};

export default HomePage;