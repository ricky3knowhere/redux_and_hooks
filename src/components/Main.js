import React from 'react';
import Article from './Article'

function Main({ click }){

  return(
    <div>
      <Article click={click} />
    </div>
  )
}

export default Main
