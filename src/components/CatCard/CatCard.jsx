import React from 'react';
import {Link} from 'react-router-dom';
import {Grommet, Box, Button, Text, Heading} from 'grommet';
function CatCard(props) { 
    // console.log(props)
    let cat = props.cat
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
          <Heading>
        <h3 className='panel-title'>{props.cat.name}</h3>
        </Heading>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Breed</dt>
          <dd>{props.cat.breed}</dd>
          <dt>Age</dt>
          <dd>{props.cat.age}</dd>
        </dl>
      </div>
     
        
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
          
          onClick={() => props.handleDeleteCat(props.cat._id)}
        >
          DELETE
        </button>
      </div>

  );
}

export default CatCard;