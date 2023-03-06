import React from "react";
import CardMovie from "../CardMovie/CardMovie";
import * as Styled from "./Movies.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import {BsFillStarFill} from 'react-icons/bs'

const Movies = ({ movies, title, icon, portrait }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title} {icon}</Styled.Title>
      <Swiper
        spaceBetween={20}
        loop={true}

        autoplay={{
          delay: portrait ? 6500 : 20000,
          disableOnInteraction: false
      }}

        slidesPerView={2}
        breakpoints={{
          640: {
            width:640,
            slidesPerView:2
          },
          768: {
            width:768,
            slidesPerView:3
          },
          992: {
            width:992,
            slidesPerView:3
          }
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      </Styled.Wrapper>
  );
};

// najwyżej oceniane i najnowsze

export default Movies;
