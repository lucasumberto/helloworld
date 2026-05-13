import { createContext } from 'react'

export const CounterContext = createContext<{
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
} | null>(null)