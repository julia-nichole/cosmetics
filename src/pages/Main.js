import React from "react";

const Main = ({ name, price, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Main;