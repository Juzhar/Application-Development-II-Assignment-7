<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(searchvalue) {
    const value = searchvalue.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <header className="header">
      <Link to="/" className="app-title">MovieShelf</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </header>
  );
}

=======
import { Link } from 'react-router-dom';
const [query, setQuery] = useState("");

function handleChange(searchvalue) {
  setQuery(searchvalue.target.value);
  onSearch(searchvalue.target.value);
}
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">MovieShelf</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={handleChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
};

>>>>>>> 18ad201bde485732d65634dfbedb02d91b42b9b6
export default Header;