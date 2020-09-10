import { CounterContext } from './CounterManager'
import React from 'react';


function IncrementButton(){
  return(
    <CounterContext.Consumer>
      {
        ({counter, setCounter}) => <button onClick={() => setCounter(counter + 1)}>Add</button>
      }
    </CounterContext.Consumer>
  )
}

function DecrementButton(){
  return(
    <CounterContext.Consumer>
      {
        ({counter, setCounter}) => <button onClick={() => setCounter(counter - 1)}>Delete</button>
      }
    </CounterContext.Consumer>
  )
}

export {
  IncrementButton,
  DecrementButton
}