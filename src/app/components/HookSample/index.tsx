import * as React from 'react'
import { FC, useState } from 'react'

namespace HookSample {
  export interface Props {}
  export interface State {}
}

const HookSample: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <p>current value: {count}</p>
      <button onClick={increment}>+</button> / <button onClick={decrement}>-</button>
    </>
  )
}

export default HookSample
