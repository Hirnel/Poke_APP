import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar"; // Importamos NavBar aquí
import Home from "./pages/Home";
import NewPokemon from "./pages/NewPokemon";
import PokemonDetails from "./pages/PokemonDetails";
import { PokeContext } from "./context/pokeContext";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const updatePokemons = (newPokemon) => {
    setPokemons([...pokemons, newPokemon]);
  };

  console.log("Pokémon en el contexto:", pokemons);

  return (
    <PokeContext.Provider value={{ pokemons, updatePokemons }}>
      <Router>
        <Header />
        <NavBar /> {/* NavBar está aquí */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewPokemon />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </PokeContext.Provider>
  );
}

export default App;
