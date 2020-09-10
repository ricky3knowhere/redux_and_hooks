import React from 'react';
import { DarkContext } from './DarkManager'

function ButtonWithContext(){
  return (
    <DarkContext.Consumer>
      {
        ({ dark, setDark }) => <button onClick={() => setDark(!dark)}>Set {dark ? 'Light' : 'Dark'} Mode</button>
      }
    </DarkContext.Consumer>
  )
}

export default ButtonWithContext