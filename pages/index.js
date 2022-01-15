import { useState } from 'react'

export default function index () {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>NEXTJS {count}</div>
      <button
        onClick={() =>
          setCount(old => {
            return old + 1
          })
        }
      >
        +
      </button>
    </>
  )
}
