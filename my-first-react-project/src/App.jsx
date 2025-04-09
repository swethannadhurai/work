import {useReducer} from 'react'

const reducer = (state, action) =>{

  if(action.type == 'INCR'){
    return state + 1;
  }
  else if(action.type == 'DECR'){
    return state - 1;
  }

  else if(action.type == 'reset'){
    return 0;
  }
  return state;
}

const App = () => {
  
  const [count, dispatch] = useReducer(reducer, 0);

  const handleDecrease = () =>{
    dispatch({type:'DECR'});
  }

  const reset = () => {
    dispatch({type:'reset'});
  }

  const handleIncrease= () =>{
    dispatch({type:'INCR'});
  }

  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <br/> <br/>
    <button onClick={handleDecrease}>Decrease</button>
    <br/> <br/>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
