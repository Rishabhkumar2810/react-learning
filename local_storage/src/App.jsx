import React from 'react'

const App = () => {
  sessionStorage.clear()
  localStorage.setItem('name','Rishabh')
  sessionStorage.setItem('name','Richard')
  localStorage.setItem("age","25")
  const  user={
    "name":"ERishabh",
    "age":20,
    "city":"Delhi"
  }
  localStorage.setItem('user',JSON.stringify(user))
  const UserData=localStorage.getItem('user')
  console.log(JSON.parse(UserData))
  return (
    <div>
      App  
    </div>
  )
}

export default App
