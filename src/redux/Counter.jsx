import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState('2');
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <div>
      <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          aria-label="Increment value"
          onClick={()=>dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={()=>dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
