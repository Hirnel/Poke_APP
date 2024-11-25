import React, { useState } from "react";
import axios from "axios";
import PokeDetails from "./PokeDetails/PokeDetails"; // Importa PokeDetails

const PokeItem = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [details, setDetails] = useState(null);

  const handleSeeMore = async () => {
    try {
      const response = await axios.get(url); // URL de detalles del Pokémon
      const data = response.data;

      // Construir objeto de detalles
      const detailedData = {
        id: data.id,
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        types: data.types.map((typeInfo) => typeInfo.type.name),
        weight: data.weight / 10,
        height: data.height / 10,
        abilities: data.abilities.map((abilityInfo) => abilityInfo.ability.name),
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          special_attack: data.stats[3].base_stat,
          special_defense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        },
        description: "Descripción no disponible en este endpoint.", // Opcional: usa species si necesitas más detalle
      };

      setDetails(detailedData); // Actualiza el estado con los detalles
    } catch (error) {
      console.error("Error al cargar detalles del Pokémon:", error);
    }
  };

  return (
    <div className="poke-item">
      <h3>{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.split("/").at(-2)}.png`}
        alt={name}
      />
      <button onClick={handleSeeMore} className="button-SEE-MORE">SEE MORE</button>
      {details && <PokeDetails pokemon={details} />} {/* Renderizo los detalles si estan */}
    </div>
  );
};

export default PokeItem;
