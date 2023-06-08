import React,{useReducer} from "react";
import "./style.css";

let initialState=0;
let reducer=(state, action)=>{
 if(action.type == "INC"){
   return state+1;
 }
 else{
   return state-1;
 }
}

export default function App() {
  const[state, dispatch]=useReducer(reducer, initialState);

  return (
    <div>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>INC</button>
    <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
    </div>
  );
}
