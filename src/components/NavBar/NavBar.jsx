import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#4CAF50",
        padding: "10px",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <Link
        to="/new"
        style={{
          textDecoration: "none",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        New Pokémon
      </Link>
    </nav>
  );
};

export default NavBar;
