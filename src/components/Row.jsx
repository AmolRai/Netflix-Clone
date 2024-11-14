import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    fetch("https://api.themoviedb.org/3" + props.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .then((error) => {
        // console.log(error);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  async function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }
    const movieUrl = await movieTrailer(
      movie?.name || movie?.title || movie?.original_name
    );
    if (typeof movieUrl === "string") {
      var count = 0;
      var idUrl = "";
      for (var i = 0; i < movieUrl.length; i++) {
        if (count == 1) {
          idUrl += movieUrl[i];
        }
        if (movieUrl[i] == "=") {
          count = 1;
        }
      }
      setTrailerUrl(idUrl);
    }
  }

  return (
    <div className="row">
      <h2 className="row-title">{props.title}</h2>
      <div className="row-image">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className="row-poster"
              src={base_url + movie.poster_path}
              key={movie.id}
            ></img>
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
