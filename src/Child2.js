import React from 'react';
import { data } from './ContextApp';


function Child2() {
  return (
    <>
      <data.Consumer>
        {
        (name) => {
          return <h1>{name}</h1>;
        }
        }
      </data.Consumer>
    </>
  );
}

export default Child2;
