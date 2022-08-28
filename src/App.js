import React from 'react'
import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./Actions/index";

const App = () => {

  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();

  return (
    <div class="container">
      <h1>
        Increment/Decrement Counter
      </h1>
      <h4>
        Using React and Redux
      </h4>
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber(5))}><span>-</span></a>
        <input class="quantity__input" name="quantity" type="text" value={myState}/>
        <a class="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber(10))}><span>+</span></a>
      </div>
    </div>
  )
}

export default App