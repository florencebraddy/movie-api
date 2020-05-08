import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "@material-ui/core";
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
        // console.log(response.data.show);
        setShows(response.data.shows);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [toggle, query]);

  return (
    <div className="App">
      <Nav setQuery={setQuery} setToggle={setToggle} toggle={toggle} />
      <div>
        {shows === undefined ? (
          <div>LOADING...</div>
        ) : (
          shows.map(show => {
            return (
              // <div key={show.id} show={show}>
              <Card key={show.id}>
                <p>Hello</p>

                {/* <h3>{show.url}</h3>
                  <h3>{show.language}</h3> */}
              </Card>
            );
          })
        )}
      </div>
      <header className="App-header">
        {/* <input onChange={event => setQuery(event.target.value)} />
        <button onClick={() => setToggle(!toggle)}>Search</button> */}
        <p>{query}</p>
        <div>
          {shows === undefined ? (
            <div>LOADING...</div>
          ) : (
            shows.map(show => {
              return (
                // <div key={show.id} show={show}>
                <Card key={show.id}>
                  <p>Hello</p>

                  {/* <h3>{show.url}</h3>
                  <h3>{show.language}</h3> */}
                </Card>
              );
            })
          )}
        </div>
      </header>
    </div>
  );
}
export default App;
