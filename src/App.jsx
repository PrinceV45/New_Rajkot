import React from 'react'
import Todoapp from './components/Todoapp'
import { Todoprovider } from './context/Todocontext'

function App() {
  
  return (
    <>
       <Todoprovider>
      <Todoapp/>
      </Todoprovider>
    </>
  )
}

export default App
