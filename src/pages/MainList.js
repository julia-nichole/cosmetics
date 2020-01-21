import React, { useContext } from "react";
import Main from "./Main";
import { MainContext } from "./MainContext";

const MainList = () => {
  const [mains] = useContext(MainContext);
  return (
    <div>
      {mains.map(main => (
        <Main
          name={main.name}
          price={main.price}
          description={main.description}
          key={main.id}
        />
      ))}
    </div>
  );
};

export default MainList;