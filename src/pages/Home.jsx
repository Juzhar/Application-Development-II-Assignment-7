<<<<<<< HEAD
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from "../services/movieService";
import { useState, useEffect } from 'react';
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
function Home({ movies }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setPopularMovies(data);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    if (!movies.length) {
      fetchMovies();
    } else {
      setLoading(false);
    }
  }, [movies])
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  const displayedMovies = movies.length ? movies : popularMovies;
  return(<div className="main-content">
         <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
        <MovieGrid movies={displayedMovies} />
        </div>
  );
}
=======
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from "../services/movieService";
import { useState, useEffect } from 'react';

function Home() {
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={staticMovies} />
    </main>
  );
};
function Home({ movies }) {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    if (movies?.length) {
      setPopularMovies(movies);
      return;
    } }, [movies]);


  return(<div className="main-content">
         <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
        <MovieGrid movies={popularMovies} />
        </div>
  );
}
>>>>>>> 18ad201bde485732d65634dfbedb02d91b42b9b6
export default Home;