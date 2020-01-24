import React from 'react';

import CatCard from '../../components/CatCard/CatCard';

function CatListPage(props) {

    console.log(props)
  return (
    <>
      <h1>Cat List</h1>
    

        {props.cats.map(cat =>
          <CatCard
            key={cat._id}
            cat={cat}
            handleDeleteCat={props.handleDeleteCat}
            handleUpdateCat={props.handleUpdateCat}
          />
        )}
     
    </>
  );
}
export default CatListPage;