import MovieGrid from "../components/MovieGrid";
import { useMovieContext } from "../contexts/MovieContext";

function Watchlist() {
  const { watchlist } = useMovieContext();

  return (
    <main className="main-content">
      <h2>My Watchlist</h2>
      {watchlist.length ? (
        <MovieGrid movies={watchlist} />
      ) : (
        <p>No movies in your watchlist yet.</p>
      )}
    </main>
  );
}

export default Watchlist;
