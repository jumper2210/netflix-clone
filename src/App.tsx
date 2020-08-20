import React from "react";
import Row from "./components/row/Row";
import requests from "./requests";
function App() {
  return (
    <div>
      <Row
        title="NETFLIX-ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default App;
