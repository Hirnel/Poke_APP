import React from "react";

const PokeDetails = ({ pokemon }) => {
  if (!pokemon) return null; // Evita renderizar si no hay datos

  const { id, name, image, types, weight, height, abilities, stats, description } = pokemon;

  return (
    <div className="pokemon-details">
      <h1>{name}</h1>
      <p>#{id.toString().padStart(3, "0")}</p>
      <img src={image} alt={`Imagen de ${name}`} />

      <div>
        {types.map((type) => (
          <span key={type} className={`type ${type.toLowerCase()}`}>
            {type}
          </span>
        ))}
      </div>

      <h2>About</h2>
      <p>Peso: {weight} kg</p>
      <p>Altura: {height} m</p>
      <p>Habilidades: {abilities.join(", ")}</p>
      <p>{description}</p>

      <h2>Base Stats</h2>
      <ul>
        <li>HP: {stats.hp}</li>
        <li>ATK: {stats.attack}</li>
        <li>DEF: {stats.defense}</li>
        <li>SP. ATK: {stats.special_attack}</li>
        <li>SP. DEF: {stats.special_defense}</li>
        <li>SPD: {stats.speed}</li>
      </ul>
    </div>
  );
};

export default PokeDetails;
