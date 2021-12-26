import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5)
  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter < 10) return;
    
    console.log('%cSe llegó al valor máximo.', 'color: red; background-color: blue;')
    gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
      gsap.to('h2', { y: 10, duration: 1, ease: 'bounce.out' })
    })
      
  }, [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
