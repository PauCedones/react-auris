import React, { useState } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  const [searchParam, setSearchParam] = useState("");
  //nos devuelve el texto
  function handleSearch(searchParam) {
    //probando si funciona el callback
    console.log(searchParam);
    setSearchParam(searchParam);
  }
  return (
    <>
      <h1>Auriculares</h1>
      <Navbar handleCallback={handleSearch} />
      <List searchParam={searchParam} />
    </>
  );
}

export default App;
