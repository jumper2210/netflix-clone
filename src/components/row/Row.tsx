import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import { base_url, Imovie } from "../../utils";

type RowProps = { title: string; fetchUrl: string; isLargeRow: boolean };

function Row({ title, fetchUrl, isLargeRow }: RowProps) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__poster ${isLargeRow && "row__posterLarge"}`}>
        {movies.map((movie: Imovie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
