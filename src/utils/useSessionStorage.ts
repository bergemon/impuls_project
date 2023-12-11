import { useEffect, useState } from "react"

export const isDarkSessionStorage = () => {
    let isDark = 'false'

    useEffect(() => {
        sessionStorage.getItem('isDark') !== null ? isDark = 'true' : isDark = 'false'
    }, [isDark])

    return isDark === 'true' ? true : false
}

export const setDarkSessionStorage = (setState: boolean) => {
    useEffect(() => {
        sessionStorage.setItem('isDark', setState ? 'true' : 'false')
    }, [])
}