import * as React from 'react'
import { FC, useEffect, useState } from 'react'

namespace HookSample {
  export interface Props {}
  export interface State {}
}

const DEFAULT_TIME = 10000

const HookSample: FC = () => {
  const [time, setTime] = useState<number>(DEFAULT_TIME)

  const increment = () => {
    setTime(time + 1)
  }

  const decrement = () => {
    setTime(time - 1)
  }

  const reset = () => {
    setTime(DEFAULT_TIME)
  }

  const tick = () => setTime((prevTime: number) => prevTime - 1)

  useEffect(() => {
    console.log('useEffect')
    const timerId = setInterval(tick, 50)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <p>current value: {time}</p>
      <button onClick={increment}>+</button> / <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default HookSample
