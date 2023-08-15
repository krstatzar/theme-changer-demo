import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import './App.css'
import { ThemeProvider } from './components/ThemeContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>

        <Header />
        <Content />


      </ThemeProvider>
    </>
  )
}

export default App
