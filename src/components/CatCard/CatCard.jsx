import React from 'react';
import {Link} from 'react-router-dom';

function CatCard({cat, handleDeleteCat}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{cat.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Breed</dt>
          <dd>{cat.breed}</dd>
          <dt>Age</dt>
          <dd>{cat.age}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {cat}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteCat(cat._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default CatCard;