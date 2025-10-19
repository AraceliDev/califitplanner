import AppRouter from './router/AppRouter'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  )
}

export default App