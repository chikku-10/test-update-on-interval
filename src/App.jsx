
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import ComponentA from './ComponentA'


function App() {
  

  return (
    <main>
    <Routes>
      <Route index path="/" element={<Counter/>} />
      <Route path="/component" element={<ComponentA/>} />
    </Routes>
    </main>
  )
}

export default App
