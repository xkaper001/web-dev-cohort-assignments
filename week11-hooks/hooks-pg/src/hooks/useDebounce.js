import { useEffect, useState } from "react"

export const useDeboune = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(() => {
      const clock = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    
      return () => {
        clearTimeout(clock)
      }
    }, [value, delay])

    return debouncedValue
}