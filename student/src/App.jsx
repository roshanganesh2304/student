import { useState } from 'react'
import './App.css'
import Edit from './pages/Edit'
import 'react-toastify/dist/ReactToastify.css';
import './bootstrap.min.css'
import Add from './pages/Add'
import Home from './pages/Home'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default App
