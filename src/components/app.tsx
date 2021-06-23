import React, { useState } from 'react'
import CookieInput from './cookie-text-input'

const App: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string>('')
    return (<div id='app'>
        <h1>🍪<br />React Cookie Input</h1>
        <p>Enter text in the input field below &amp; refresh.  The value should persist.</p>
        <CookieInput label='Email' value={email} updater={(value: string) => { setEmail(value); }} placeholder="Email" cookieKey="email" />
        <hr />
        <a href='https://github.com/meandmybadself/react-cookie-input'>Github</a>
    </div>)
}

export default App
