import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetails = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="pokemon-details-page">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <p>
        Abilities:{" "}
        {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
    </div>
  );
};

export default PokemonDetails;
