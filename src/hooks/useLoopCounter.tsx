import { useEffect, useState } from "react";

export function useLoopCounter<T>(items: T[],delay: number = 7000) {
    const [index, setIndex] = useState(0)
    const lastIndex = items.length - 1

    useEffect(() => {
      const timerHandle = setInterval(()=> next(),delay)
    
      return () => {
        clearInterval(timerHandle)
      }
    }, [next])
    

    function next() {
        setIndex((index) => index !== lastIndex ? index + 1 : 0)
    }
    function prev() {
        setIndex((index) => index !== 0 ? index - 1 : 0)
    }

    return {
        index,
        next,
        prev,
        setIndex
    }
}