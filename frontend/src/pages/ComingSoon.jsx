import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@heroui/react'
import { HomeIcon, ClockIcon } from '@heroicons/react/24/outline'

function ComingSoon() {
    const location = useLocation()
    const navigate = useNavigate()
    
    // Extraer el nombre de la página de la URL
    const pageName = location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.replace('/', '').slice(1)
    
    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className="bg-amulet-100 min-h-screen">
            <div className="px-4 sm:px-6 md:px-12 py-8">
                {/* Título dinámico */}
                <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400">
                        {pageName}
                    </span>
                </h1>
                
                {/* Línea decorativa */}
                <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-12 rounded-full"></div>

                {/* Contenido principal */}
                <div className="max-w-xl mx-auto text-center">
                    <div className="bg-white rounded-2xl shadow-lg border border-amulet-200 p-8 md:p-10">
                        {/* Icono */}
                        <div className="flex justify-center mb-6">
                            <ClockIcon className="w-16 h-16 text-amulet-500 animate-pulse" />
                        </div>

                        {/* Mensaje principal */}
                        <h2 className="text-2xl md:text-3xl font-bold text-amulet-950 mb-4">
                            Próximamente
                        </h2>

                        <p className="text-amulet-700 text-lg mb-8 leading-relaxed">
                            Esta sección estará disponible muy pronto. Estamos trabajando para ofrecerte la mejor experiencia.
                        </p>

                        {/* Botón para volver */}
                        <Button
                            color="success"
                            size="lg"
                            startContent={<HomeIcon className="w-5 h-5" />}
                            onClick={handleGoHome}
                            className="bg-amulet-600 hover:bg-amulet-700 text-white font-medium"
                        >
                            Volver al inicio
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon