import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import Rutinas from './pages/Rutinas'
import Recursos from './pages/Recursos'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRouter