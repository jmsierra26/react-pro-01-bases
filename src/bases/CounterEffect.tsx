import { useEffect, useState } from 'react'

const MAXIMUN_COUNT = 10

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5)
  const handleClick = () => {
    setCounter(counter => Math.min(counter + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter > 9)
      console.log('%cSe llegó al valor máximo.', 'color: red; background-color: blue;')
      
  }, [counter])

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}
