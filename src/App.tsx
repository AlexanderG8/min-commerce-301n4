import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CarPage from './pages/CarPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navegación */}
        <Navbar />

        {/* Contenido Principal */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CarPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-gray-200 border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 Min Commerce. Desarrollador por <a href="https://linksxander.netlify.app/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Alexander Gomez</a>.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
