import React from "react";
import { apiEntity } from "../apiConfig";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Separator height={"60px"} />
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Populares"}
      />
      <Separator height={"60px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title="Mejores calificadas"
      />
      <Separator height={"60px"} />
      <Carousel entity={apiEntity.popularTv} title="Series Populares" />
      <Separator height={"60px"} />
      <Carousel entity={apiEntity.topRatedTv} title="Series mejor calificadas" />
    </>
  );
};

export default Homepage;
