import { ReactNode, useState } from 'react'
import { CounterContext } from './CounterContext.types'

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}
