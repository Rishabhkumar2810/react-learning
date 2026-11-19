import React from 'react'

const App = () => {
  function btnClick(){
    alert("Button Clicked")
  }
  return (
    <div>
      <h1>Hello ,Rishabh </h1>
      <button onClick={btnClick}>Click me  </button>
    </div>
  )
}

export default App
