import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//import { Card } from "@material-ui/core";
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
        // console.log(response.data.length);
        // console.log(response.data);
        // console.log(response.data[0]);
        // console.log(response.data[0].show);
        // console.log(response.data[1].show.name);
        // console.log(response.data[2].show.name);
        // console.log(response.data[5].show.name);

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
        <>
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
              // {
              //   /* <h1>{show[0].name}</h1> */
              // }
              // {
              //   /* <h3>{show.url}</h3>
              //     <h3>{show.language}</h3> */
              // }
            })}
        </>
      </header>
    </div>
  );
}
export default App;
