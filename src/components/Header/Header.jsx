import React from "react";
import "../../styles/components/_Header.scss";



const Header = () => {
  return (
    <header className="header">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Pokémon Logo"
        className="logo"
      />
    </header>
  );
};

export default Header;