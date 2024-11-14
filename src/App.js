import React from "react";
import "./index.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action Movies" url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Horrow Movies" url={requests.fetchHorroMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
