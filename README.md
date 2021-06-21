# React Cookie Input

## Overview
Creates a text input that persists its value in a cookie.  
When you want to persist a value (a user's name, email) across a domain without relying upon a server.

## Installation
`npm i react-cookie-input`

## Demo
https://meandmybadself.github.io/react-cookie-input/

## Usage - TypeScript
```typescript
import React, { useState } from 'react'
import CookieInput from 'react-cookie-input'

const App: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string>('')

    const cookieProps: Cookies.CookieAttributes = {
        domain: 'meandmybadself.com', // defaults to current domain
        expires: 365, // Number of days the cookie is valid for.
        secure: true, // Only usable over HTTPS,
        sameSite: 'lax',
        path: '/auth', // defaults to '/'
    }
    
    return (<div id='app'>
        <CookieInput label='Email' value={email} updater={(value: string) => setEmail(value)} placeholder="Email" cookieKey="email" cookieProps={cookieProps}/>
    </div>)
}
export default App
```