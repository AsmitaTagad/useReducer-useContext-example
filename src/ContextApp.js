import React,{createContext} from 'react';
import Child2 from './Child2';
import Child1 from './Child1';

//1. create context variable
const data= createContext();
const data1=createContext();

function ContextApp() {
  const name="Asmita Tagad";
  const destination="Frontend Developer"
  return (
    <div>
      <data.Provider value={name} >
        <data1.Provider value={destination}>
        <Child2 />
        <Child1/>
        </data1.Provider>
        </data.Provider>
    </div>
  );
}
export default ContextApp;
export {data};
export {data1};



//disadvantages
