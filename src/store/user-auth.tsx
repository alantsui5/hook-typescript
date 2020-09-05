import { useState } from 'react'

export default function userAuth() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return { isLoggedin, setIsLoggedin }
}
