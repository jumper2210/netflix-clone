import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import { base_url, Imovie, Iopts } from "../../utils";
import YouTube from "react-youtube";
// @ts-ignore
import movieTrailer from "movie-trailer";

type RowProps = { title: string; fetchUrl: string; isLargeRow: boolean };

function Row({ title, fetchUrl, isLargeRow }: RowProps) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  let opts: Iopts;

  opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie: Imovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url: string) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err: string) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters`}>
        {movies.map((movie: Imovie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
