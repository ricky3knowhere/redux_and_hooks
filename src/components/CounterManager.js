import React, { useState, createContext} from 'react';

const CounterContext = createContext({
  counter: 0,
  setCounter: () => {}
})

function CounterManager({children}){
  const [counter, setCounter] = useState(0);

  return(
    <CounterContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  )
}

export {
  CounterContext,
  CounterManager
}