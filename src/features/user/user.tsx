import React from 'react'
import User from './user.hook'
export default () => {
    const { isLoggedin } = User()
    return (
        <>
            <h1>{!isLoggedin && "I am Logged Out"}</h1>
        </>
    )
}