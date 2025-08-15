import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,reset} from '../features/counter/counterSlice.js'
import React from 'react'




function Redux() {
    const count=useSelector((state)=>{
         return state.counter.value;
    })

     const dispatch = useDispatch()

    return (
      <div>
      <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>  
    )
}

export default Redux
