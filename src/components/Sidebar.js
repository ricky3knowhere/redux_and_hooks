import React from 'react';
import { CounterContext } from './CounterManager'

function Sidebar(){
  return(
    <CounterContext.Consumer>
    {
      ({counter}) => {
        return (
          <div>
            [Sidebar]
            Count : {counter}
          </div>
        )
      }
      
    }
  </CounterContext.Consumer>
  )
}

export default Sidebar