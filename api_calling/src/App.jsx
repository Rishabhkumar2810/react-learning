import React from 'react'
import axiom from 'axios'

const App = () => {
  // async function giveData(){
  //   const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     console.log(await response.json( ))
  // }
   async function giveData(){
    const response= await axiom.get('https://jsonplaceholder.typicode.com/users')
    console.log( await response.data)

  }
  return (
    <div>
      <button onClick={giveData}>  Get Data </button>
    </div>
  )
}

export default App
