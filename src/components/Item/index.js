import React from "react";

function Item(props) {
  //const { title, img } = props;
  //es una forma desestructurando,
  //en vez de poner props.title, pones title solo
  return (
    <>
      <img src={props.img} />
      <p>{props.title}</p>
    </>
  );
}

export default Item;
