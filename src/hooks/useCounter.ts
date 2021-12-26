import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5)

  const elementToAnimate = useRef<any>(null)
  const timeLine = useRef(gsap.timeline())
  
  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, maxCount))
  }

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeLine.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 10, duration: 1, ease: 'bounce.out' })
      .pause(); // Para que no comience la animación al crearse esta animación
  }, [])

  useEffect(() => {
    // if (counter < maxCount) return;

    // console.log('%cSe llegó al valor máximo.', 'color: red; background-color: blue;')
    timeLine.current.play(0)
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick,
  }
}
