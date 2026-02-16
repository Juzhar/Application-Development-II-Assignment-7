<<<<<<< HEAD
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useMovieContext();
  const inWatchlist = isInWatchlist(movie.id);

  function toggleWatchlist() {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  }
  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingfavs = favorites.find(f => f.id === movie.id);

    const updated = existingfavs
      ? favorites.filter(f => f.id !== movie.id)
      : [...favorites, movie];

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <button onClick={toggleFavorite}>♡ Favorite</button>
      <button onClick={toggleWatchlist}>
        {inWatchlist ? "✓ In Watchlist" : "+ Add to Watchlist"}
      </button>
    </div>
  );
}
=======
const posterUrl = movie.poster_path  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const existingfavs = favorites.find(f => f.id === movie.id);

  const updated = existingfavs
    ? favorites.filter(f => f.id !== movie.id)
    : [...favorites, movie];

  localStorage.setItem("favorites", JSON.stringify(updated));
}
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button onClick={toggleFavorite} className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};

>>>>>>> 18ad201bde485732d65634dfbedb02d91b42b9b6
export default MovieCard;