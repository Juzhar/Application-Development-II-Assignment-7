<<<<<<< HEAD

import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <main>
      <h2>Your Favorites</h2>
      <MovieGrid movies={favorites} />
    </main>
  );
}

=======
import MovieGrid from '../components/MovieGrid';
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return <MovieGrid movies={favorites} />;
}

>>>>>>> 18ad201bde485732d65634dfbedb02d91b42b9b6
export default Favorites;