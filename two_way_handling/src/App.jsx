import React,{useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('');

  const onSubmit=(e)=>{
    e.preventDefault();
   
  console.log("Form submitted");
  setTitle('');
}
  return (
    <div>
      <form onSubmit={(e)=>{
        onSubmit(e);
      }}>
        <input 
        type="text"
         placeholder ='Enter your name' 
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />
        <button> Submit</button>
      </form>
    </div>
  )
}

export default App
