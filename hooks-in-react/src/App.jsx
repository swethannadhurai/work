import { useState } from 'react'


function App() {
  const [name, setName] = useState("Swetha");

  function clickMe() {
    setName("Swetha Annadhurai");
    console.log("clicked");
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <button onClick={clickMe}>click me!</button>
    </>
  )
}

export default App
