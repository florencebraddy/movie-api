import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//import { Card } from "@material-ui/core";

function App() {
  const [show, setShow] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("Vampire");
  console.log(query);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://api.tvmaze.com/search/shows?q=${query}`
      );
      console.log(response.data[0].show);
      setShow(response.data.show);
    }
    getData();
  }, [toggle]);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={event => setQuery(event.target.value)} />
        <button onClick={() => setToggle(!toggle)}>Search</button>
        {/* <p>{query}</p> */}
        <div className="main-content">
          {show &&
            show.map(show => {
              return (
                <div key={show.id} show={show}>
                  <h1>{show[0].name}</h1>

                  {/* <h3>{show.url}</h3>
                  <h3>{show.language}</h3> */}
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}
export default App;
