import React, { useState } from "react";

const NewPokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    height: "",
    weight: "",
    abilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon({ ...pokemon, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Pokémon:", pokemon);
    alert("Pokémon created successfully!");
    setPokemon({
      name: "",
      type: "",
      height: "",
      weight: "",
      abilities: "",
    });
  };

  return (
    <div className="new-pokemon-page">
      <h1>Create a New Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={pokemon.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="type"
          value={pokemon.type}
          onChange={handleChange}
          placeholder="Type"
          required
        />
        <input
          type="number"
          name="height"
          value={pokemon.height}
          onChange={handleChange}
          placeholder="Height (m)"
        />
        <input
          type="number"
          name="weight"
          value={pokemon.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
        />
        <input
          type="text"
          name="abilities"
          value={pokemon.abilities}
          onChange={handleChange}
          placeholder="Abilities"
        />
        <button type="submit">Create Pokémon</button>
      </form>
    </div>
  );
};

export default NewPokemon;
