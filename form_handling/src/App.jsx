import React from 'react'

const App = () => {
  function onSubmit(e){
    e.preventDefault();
  console.log("Form submitted");
}
  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmit(e);
      }}>
        <input type="text" placeholder ='Enter your name' />
        <button> Submit</button>
      </form>
    </div>
  )
}

export default App
