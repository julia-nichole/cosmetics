import React, { useState, useContext } from "react";
import { MainContext } from "./MainContext";

const AddMain = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [setMains] = useContext(MainContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const updateDescription = e => {
    setDescription(e.target.value);
  };

  const addMain = e => {
    e.preventDefault();
    setMains(prevMains => [
      ...prevMains,
      { name: name, price: price, description: description }
    ]);
  };

  return (
    <form onSubmit={addMain}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={updateDescription}
      />
      <button>submit</button>
    </form>
  );
};

export default AddMain;