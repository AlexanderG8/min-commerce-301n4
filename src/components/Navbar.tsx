import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  // Obtener la ruta actual
  const location = useLocation()
  
  // Función para verificar si la ruta es activa
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Min Commerce
            </h1>
            <p className="text-gray-600 text-sm">Descubre productos increíbles</p>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">🏠</span>
              Inicio
            </Link>
            
            <Link
              to="/carrito"
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/carrito') 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">🛒</span>
              Carrito
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">0</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}