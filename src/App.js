import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Card from "./components/Card"

function App() {
  const [shows, setShows] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("top boy");
  // console.log(query);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://api.tvmaze.com/search/shows?q=${query}`
        );
        console.log(response);
       console.log(response.data);
       console.log(response.data[0].show.image.original)

        setShows(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [query]);
//change to toggle after testing
  return (
    <div className="App">
      <header className="App-header">
        <Nav setQuery={setQuery} setToggle={setToggle} toggle={toggle} />
        <div className="main-content">
          {shows &&
            shows.map(show => {
              return (
               <Card key={show.show.id} show={show}></Card>
              //  <p> {show.show.image.original}</p>
                  // <h1>{show.show.name}</h1>
                  // <h2> {show.show.genres + ""}</h2>
                  // <p>{show.show.image}></img>

                  // <img src ={show.show.image}></img>
                  // <h3>{show.show.rating.average}</h3>
                  // {/* <img src={show.show.image.medium} alt="artwork"></img> */}
                // </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}
export default App;
