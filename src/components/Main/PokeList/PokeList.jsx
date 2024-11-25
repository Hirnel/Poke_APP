import React, { useContext, useState, useEffect } from "react";
import { PokeContext } from "../../../context/pokeContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PokeItem from "./PokeItem";
import SearchBar from "../../Search/SearchBar";
import "../../../styles/components/_PokeList.scss";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]); // Lista completa de Pokémon
  const [filteredPokemonList, setFilteredPokemonList] = useState([]); // Lista filtrada

  // Cargar la lista completa de Pokémon al iniciar la página
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=1025`
        );
        console.log("Pokémon obtenidos de la API:", response.data.results);
        setPokemonList(response.data.results); // Guardar lista completa
        setFilteredPokemonList(response.data.results); // Mostrar inicialmente todos
      } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  // Filtrar Pokémon en tiempo real
  const handleSearch = (searchTerm) => {
    console.log("Buscando Pokémon con término:", searchTerm);
    if (searchTerm.trim() === "") {
      // Si no hay texto, muestra todos los Pokémon
      setFilteredPokemonList(pokemonList);
    } else {
      // Filtra los Pokémon que contienen el texto ingresado
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemonList(filtered); // Actualizo la lista filtrada
    }
  };

  // Renderiza las tarjetas de Pokémon
  const renderPokemonItems = () => {
    return filteredPokemonList.map((pokemon) => (
      <PokeItem pokemon={pokemon} key={uuidv4()} />
    ));
  };

  return (
    <>
      {/* Contenedor con imagen de la Pokédex y barra de búsqueda */}
      <div className="pokedex-container">
        <img
          src="/original.png"
          alt="Pokédex"
          className="pokedex-image"
        />
        <div className="search-bar-overlay">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {/* Lista de Pokémon */}
      <section className="pokemon-list">
        {filteredPokemonList.length > 0 ? (
          renderPokemonItems()
        ) : (
          <p>No se encontraron Pokémon con ese nombre.</p>
        )}
      </section>
    </>
  );
};

export default PokeList;
