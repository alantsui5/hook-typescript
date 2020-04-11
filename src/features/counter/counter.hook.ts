import { useState } from 'react'
import { useRequest } from '@umijs/hooks';

export default () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)

    function decrement() {
        setCount(count - 1)
    }
    function incrementByAmount(amount: number) {
        setCount(count + amount)
    }

    const incrementDelay = (amount: number) =>
        setTimeout(() => {
            incrementByAmount(amount)
        }, 1000)


    // Register & run Async Middleware
    const incrementAsync = useRequest(incrementDelay, {
        manual: true
    })


    return { count, increment, decrement, incrementByAmount, incrementAsync }
}