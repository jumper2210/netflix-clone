import React from "react";
import Row from "./components/row/Row";
import requests from "./requests";
import Banner from "./components/banner/Banner";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX-ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
