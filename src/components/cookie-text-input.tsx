import * as React from 'react';
import Cookies from 'js-cookie'

export interface CookieInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    updater: (value: string) => void
    cookieKey: string
    initialValue?: string
    cookieProps?: Cookies.CookieAttributes
}

const CookieInput: React.FC<CookieInputProps> = (props) => {
    const { label, updater, cookieKey, initialValue, cookieProps, ...other } = props

    React.useEffect(() => {
        const cookiedValue: string = Cookies.get(cookieKey)
        if (!props.value) {
            if (cookiedValue) {
                updater(cookiedValue)
            } else if (initialValue) {
                updater(initialValue)
            }
        }
    }, [])

    const internalUpdater = (value: string): void => {
        Cookies.set(cookieKey, value, cookieProps)
        updater(value)
    }

    const domId = `cti-${cookieKey}`

    return <label htmlFor={domId}>
        <span>{label}</span>
        <input id={domId} type='text' {...other} onChange={(event) => { internalUpdater(event.target.value); }} />
    </label>
}

export default CookieInput