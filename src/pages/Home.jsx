import React from "react";
import PokeList from "../components/Main/PokeList/PokeList";

const Home = ({ pokemons }) => {
  return (
    <div className="home-page">
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default Home;
