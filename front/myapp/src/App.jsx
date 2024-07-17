import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
  
    </BrowserRouter>



    {/* <Homepage/> */}

    </>
  )
}

export default App