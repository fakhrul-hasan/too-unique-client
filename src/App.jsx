import { Outlet } from 'react-router-dom'
import Footer from './components/Shared/Footer'
import Navbar from './components/Shared/NavBar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
