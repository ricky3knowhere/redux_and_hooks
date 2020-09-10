import React from 'react';
import Button from './Button'
import { IncrementButton, DecrementButton } from './CountButton'

function Article(){
  return (
    <div>
      <Button />
      <DecrementButton />
      <IncrementButton />
    </div>
  )
}

export default Article