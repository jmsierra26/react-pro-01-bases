import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const useCounter = () => {
  const [counter, setCounter] = useState(5)

  const counterElement = useRef<HTMLHeadingElement>(null)
  
  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter < 10) return;
    
    console.log('%cSe llegó al valor máximo.', 'color: red; background-color: blue;')
    const timeLine = gsap.timeline()
    timeLine.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
      
  }, [counter])

  return {
    counter,
    counterElement,
    handleClick,
  }
}
