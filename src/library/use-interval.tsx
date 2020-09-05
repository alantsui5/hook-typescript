import { useEffect, useRef } from 'react'

interface CallbackType {
  current: any
}

export default function useInterval(callback, delay) {
  const savedCallback: CallbackType = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args)

    if (delay !== null) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
