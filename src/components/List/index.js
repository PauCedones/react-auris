import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../Item";

function List(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  //llamando a la API con AXIOS
  async function fetchData() {
    const baseUrl =
      "https://api.mercadolibre.com/sites/MLA/search?q=auriculares";
    const getItems = await axios.get(baseUrl);

    setItems(getItems.data.results);
    //para probar si funciona
    console.log(getItems);
  }
  return (
    <>
      {items
        .filter((item) => {
          //se va a fijar si el parametro a buscar esta incluido
          //dentro de los titulos
          //genera un nuevo array
          return item.title.toLowerCase().includes(props.searchParam);
        })
        //hace un array con todo lo buscado
        .map((item, key) => {
          return (
            <Item
              title={item.title}
              img={item.thumbnail}
              key={item.id ? item.id : key}
            />
          );
        })}
    </>
  );
}

export default List;
