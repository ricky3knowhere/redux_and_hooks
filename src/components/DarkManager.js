import React, { useState, createContext } from 'react';

const DarkContext = createContext({
  dark: true,
  setDark: () => {}
})


function DarkManager({children}){
  const [dark, setDark] = useState(true);

  return(
    <DarkContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'app dark' : 'app true'}>
        {children}
      </div>
    </DarkContext.Provider>
  )
} 

export {
  DarkContext,
  DarkManager
}