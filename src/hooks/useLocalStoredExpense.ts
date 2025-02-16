import { useEffect, useState } from "react"


export const useLocalStoredExpense = (key: string, initialValue: {[key: string]: number}) => {
    const [value, setValue] = useState<{[key:string]: number}>(() => {
        try {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error) {
            console.error('error')
            return initialValue
        } 
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('error')
        }
    }, [value, setValue])

    return [value, setValue] as const
}