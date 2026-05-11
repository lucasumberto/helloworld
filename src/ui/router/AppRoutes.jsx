import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import About from '../pages/about/About.jsx'
import Contador from '../pages/contador/Contador.jsx'
import Navbar from "../components/shared/Navbar.jsx";

function AppRoutes() {
  return (
      <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </>
  )
}

export default AppRoutes
