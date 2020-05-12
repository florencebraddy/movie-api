import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Card from "./components/Card"

function App() {
  const [shows, setShows] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("");
  
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
  }, [toggle]);

//change to toggle after testing
  return (
    <div className="App">
        <Nav setQuery={setQuery} setToggle={setToggle} toggle={toggle} />
        <div className="main-content">
          {shows &&
            shows.map(show => {
              return (
               <Card key={show.show.id} show={show} 
               ></Card>
              //  <p> {show.show.image.original}</p>

                  // <img src ={show.show.image}></img>
                  // {/* <img src={show.show.image.medium} alt="artwork"></img> */}
                // </div>
              );
            })}
        </div>
    </div>
  );
}
export default App;
