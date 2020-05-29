import { useState } from 'react'
import useSWR from 'swr';

export default () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)

    function decrement() {
        setCount(count - 1)
    }
    function incrementByAmount(amount: number) {
        setCount(count + amount)
    }

    const incrementAsync = (amount: number) =>
        setTimeout(() => {
            incrementByAmount(amount)
        }, 1000)
    
    return { count, increment, decrement, incrementByAmount, incrementAsync }
} 