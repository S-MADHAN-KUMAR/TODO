import React from 'react'
import Todo_Add from './components/Todo_Add'
import Navbar from './components/Navbar'
import Items from './components/Items'

const App = () => {
  return (
    <>
    <div className='md:w-3/4 mt-5 md:mt-20 mx-3 md:m-auto border-2 border-black rounded-lg md:p-5 p-3 bg-white my-20 '>
    <Navbar/>
    <Todo_Add/>
    </div>
    </>
  )
}

export default App
