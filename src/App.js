import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import MediaCard from "./components/MediaCard";

function App() {
  const [shows, setShows] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("top boy");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://api.tvmaze.com/search/shows?q=${query}`
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data[0].show.image.medium);

        setShows(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [toggle, query]);

  //change to toggle after testing
  return (
    <div className="App">
      <Nav setQuery={setQuery} setToggle={setToggle} toggle={toggle} />
      <div className="main-content">
        {shows &&
          shows.map(show => {
            return (
              <>
                <MediaCard key={show.show.id} show={show}></MediaCard>
              </>
              // </div>
            );
          })}
      </div>
    </div>
  );
}
export default App;
