import React, {useEffect, useState} from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import FeaturedMovie from "../../FeaturedMovie/FeaturedMovie";
import BottomPage from "../../MainTemplate/BottomPage";
import MainTemplate from "../../MainTemplate/MainTemplate";
import Movies from "../../Movies/Movies";
import Newsletter from "../../Newsletter/Newsletter";
import {GiPopcorn} from 'react-icons/gi'
import {TbWaveSawTool} from 'react-icons/tb'
import {GiIncomingRocket} from 'react-icons/gi'
import { Button } from "../../Button/styles";



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
          {featured ? <FeaturedMovie featured={featured}/> : "coming"}
    <Movies title="POPULAR MOVIES" movies={popular?.results} icon={<GiPopcorn/>}/>
    <Movies title="TOP RATED" movies={top_rated?.results} icon={<TbWaveSawTool/>} />
    <Movies title="UPCOMING" movies={upcoming?.results} icon={<GiIncomingRocket/>} />

    <Newsletter/>
    <BottomPage/>
    </MainTemplate>
  )
};

export default HomePage;