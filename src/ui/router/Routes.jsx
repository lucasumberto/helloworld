import { Routes, Route } from 'react-router-dom'
import App from '../pages/home/App.jsx'
import About from '../pages/about/About.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes
