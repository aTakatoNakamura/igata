import * as React from 'react'
import { FC } from 'react'

namespace HookSample {
  export interface Props {}
  export interface State {}
}

const HookSample: FC = () => {
  const increment = () => {
    alert('+')
  }

  const decrement = () => {
    alert('-')
  }

  return (
    <>
      <button onClick={increment}>+</button> / <button onClick={decrement}>-</button>
    </>
  )
}

export default HookSample
