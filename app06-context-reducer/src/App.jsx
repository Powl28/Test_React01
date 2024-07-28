import { useState } from 'react'
import { Cart } from "./components/Cart";
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
  
  const [count, setCount] = useState(0)

  return (
   <div className='pApp'>
<Header/>
<Cart/>
   </div>
  )
}

export default App
