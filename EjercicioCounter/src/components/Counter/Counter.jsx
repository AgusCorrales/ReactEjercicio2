import { useState } from 'react'

const Counter = ({initialState} ) => {
    const [counter , setCounter] = useState(initialState);
    
    const increment = () =>{
        setCounter(counter + 1);
        console.log(counter);

    }   
    const decrement = () =>{
        setCounter(counter - 1);
        console.log(counter);
    }
    const duplicar = () =>{
        setCounter(counter + 2);
        console.log(counter);
    }
    const triplicar = () =>{
        setCounter(counter + 3);
        console.log(counter);
    };
  return (
    <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        {<span> {counter} </span>}
        <button onClick={duplicar}> + 2</button>
        <button onClick={triplicar}> + 3</button> 
    </div>
  )
}

export default Counter