import React, { useState, useCallback, useRef } from "react";
import debounce from "debounce"; 


// const SearchBar = ({ onSearch }) => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchClick = () => {
//     if (searchInput.trim() !== "") {
//       console.log("Buscando:", searchInput); // Depuración
//       onSearch(searchInput); // Envía el termino de busqueda al componente padre
//       setSearchInput(""); // Limpio el campo de búsqueda
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
//       <input
//         type="text"
//         value={searchInput}
//         onChange={handleInputChange}
//         placeholder="Busca un Pokémon..."
//         style={{
//           padding: "8px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//           flex: "1",
//         }}
//       />
      // <button
      //   onClick={handleSearchClick}
      //   style={{
      //     padding: "8px 16px",
      //     borderRadius: "4px",
      //     border: "none",
      //     backgroundColor: "#4CAF50",
      //     color: "white",
      //     cursor: "pointer",
      //   }}
      // >
      //   🔎
      // </button>
//     </div>
//   );
// };

// export default SearchBar;


const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null); // Creo que va aquí 

  //Debounce lo uso para retrasar las llamadas a onSearch
  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value); // Filtra la lista en tiempo real
    }, 800), // 8segs y se realiza la busqueda o puedes seleccionar el que quieras 
    [onSearch]
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value); // Actualiza  estado local
    debouncedSearch(value); // Llama a la funcion retardada
  };

  return (
    <div className="search-bar-container"> {/* Clase específica para la barra y darle estilos */}
      <input
      ref={inputRef}
        type="text"
        className="search-bar-input" 
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Busca un Pokémon..."
      />
    </div>
  );
};

export default SearchBar;
