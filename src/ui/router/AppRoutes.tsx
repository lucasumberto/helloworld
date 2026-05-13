import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.tsx'
import About from '../pages/about/About.tsx'
import Contador from '../pages/contador/Contador.tsx'
import HttpCats from '../pages/httpCats/HttpCats.tsx'
import Navbar from "../components/shared/Navbar.tsx";

function AppRoutes() {
  return (
      <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/http-cats" element={<HttpCats />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </>
  )
}

export default AppRoutes
