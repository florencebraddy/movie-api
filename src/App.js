import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const [shows, setShows] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("Vampire");
  console.log(query);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://api.tvmaze.com/search/shows?q=${query}`
        );
        console.log(response);
        console.log(response.data);

        setShows(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav setQuery={setQuery} setToggle={setToggle} toggle={toggle} />
        <div>
          {shows &&
            shows.map(show => {
              return (
                <div key={show.show.id}>
                  <h1>{show.show.name}</h1>
                  <h2> {show.show.genres + ""}</h2>
                  <h3>{show.show.rating.average}</h3>
                  {/* <img src={show.show.image.medium} alt="artwork"></img> */}
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}
export default App;
