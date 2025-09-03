import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Workouts from '../pages/workouts/Workouts'
import Rutinas from '../pages/rutinas/Rutinas'
import Recursos from '../pages/recursos/Recursos'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter