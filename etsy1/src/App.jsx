import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import CardItems from './components/CardItems'
import ProductItems from './components/ProductItems'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <CardItems />
   <ProductItems />
    </>
  )
}

export default App
