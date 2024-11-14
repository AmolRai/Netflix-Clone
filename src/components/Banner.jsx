import React, { useState, useEffect } from "react";
import request from "../requests";

function Banner() {
  const [movies, setMovies] = useState([]);
  const [randomNum, setrandomNum] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3" + request.fetchNetflixOriginals)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        const ele = Math.floor(Math.random() * data.results.length - 1);
        setrandomNum(ele);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  function truncate(desc, len) {
    return desc?.length > len ? desc?.substr(0, len - 1) : desc;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies[randomNum]?.backdrop_path}")`,
      }}
    >
      <div className="banner-content">
        <p className="banner-title">{movies[randomNum]?.name}</p>
        <div className="buttons-group">
          <button className="play">Play</button>
          <button className="list">My List</button>
        </div>
        <p className="banner-description">
          {truncate(movies[randomNum]?.overview, 100)}
        </p>
      </div>
    </header>
  );
}

export default Banner;
