<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import { useState } from "react";
import { searchMovies } from "./services/movieService";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  async function handleSearch(search) {
    if (!search) return;
    const results = await searchMovies(search);
    setSearchResults(results);
  }
  return (
    <MovieProvider>
      <Router>
        <div className="app">
          <Header onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Home movies={searchResults} />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
};

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';
import { useState } from "react";
import { searchMovies } from "./services/movieService";

const [searchResults, setSearchResults] = useState([]);
async function handleSearch(search) {
  if (!search) return;
  const results = await searchMovies(search);
  setSearchResults(results);
}
function App() {
  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home movies={searchResults} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

>>>>>>> 18ad201bde485732d65634dfbedb02d91b42b9b6
export default App;