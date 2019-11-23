import React, { useState, useEffect } from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:333/smurfs")
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addSmurfs = smurf => {
    axios
      .post("http://localhost:333/smurfs", smurf)
      .then(res => {})
      .catch(err => console.log(err));
  };

  const deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <SmurfContext.Provider
      value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}
    >
      <div className="App">
        <h1>Enter Smurf Here. Lel </h1>
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
