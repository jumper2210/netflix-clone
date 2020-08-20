import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
type RowProps = { title: string; fetchUrl: string };

function Row({ title, fetchUrl }: RowProps) {
  const [movies, setMovies] = useState([]);

  interface Imovie {
    id: string;
    poster_path: string;
    name: string;
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Imovie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
