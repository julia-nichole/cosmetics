import React from 'react';

import CatCard from '../../components/CatCard/CatCard';

function CatListPage(props) {
  return (
    <>
      <h1>Cat List</h1>
      <div className='CatListPage-grid'>
        {props.cats.map(cat =>
          <CatCard
            key={cat._id}
            cat={cat}
            handleDeleteCat={props.handleDeleteCat}
          />
        )}
      </div>
    </>
  );
}
export default CatListPage;