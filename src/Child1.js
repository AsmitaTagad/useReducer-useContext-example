import React from 'react';
import {data1} from './ContextApp';

function Child1(){
  return (
    <div>
      <data1.Consumer>
      {
        (destination)=>{
          return (
            <h1>{destination}</h1>
          )
        }
      }
      </data1.Consumer>
      </div>
  )
}

export default Child1;