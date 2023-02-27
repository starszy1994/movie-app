import React from "react";
import CardMovie from "../CardMovie/CardMovie";
import * as Styled from "./Movies.styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Movies = ({ movies }) => {
  return (
    <Styled.Conteiner>
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <CardMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Conteiner>
  );
};

export default Movies;
