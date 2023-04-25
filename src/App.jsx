import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App
