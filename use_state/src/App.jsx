import React, { useState } from 'react'

const App = () => {
    const [a, setA] = useState(5);
    const [nums, setNums] = useState([10,20,30]);
    const [num, setNum] = useState(0);
    const [user, setUser] = useState({name:"Rishabh", age:20});
    function changea(){
      setA("Rishabh ");
      console.log(a);
    }
    function incnum(){
      setNum(num+1);
      console.log(num);
    }
    function decnum(){
      setNum(num-1);
      console.log(num);
    }
    function changenum(){
      const newNums=[...nums];
      newNums[0]=100;
      newNums.push(200);
      setNums(newNums);
      console.log(nums);
    }
    function changeuser(){
      setUser(prev=>({...prev, name:"Rahul", age:21}));
    }
  return (
    
    <div>
      <h1 >THe value of A is {a}</h1>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={changeuser}>CHange in user</button>
      <h1 onClick={changenum}> {nums}</h1>
      <button onClick={changea}>Click me</button>
      <h2>{num}</h2>
      <button onClick={incnum}>Increase</button>
      <button onClick={decnum}>Decrease</button>
    </div>
  )
}

export default App
