import { WrenchScrewdriverIcon, ClockIcon } from '@heroicons/react/24/outline'

function Recursos() {
    return (
        <div className="bg-amulet-100 min-h-screen">
            <div className="px-4 sm:px-6 md:px-12 py-8">
                {/* Título con gradiente y efecto */}
                <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400">
                        Recursos
                    </span>
                </h1>
                
                {/* Línea decorativa */}
                <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-12 rounded-full"></div>

                {/* Contenido "En construcción" */}
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl shadow-lg border border-amulet-200 p-8 md:p-12">
                        {/* Icono principal */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <WrenchScrewdriverIcon className="w-16 h-16 text-amulet-500" />
                                <div className="absolute -top-1 -right-1">
                                    <ClockIcon className="w-6 h-6 text-amulet-600 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Título */}
                        <h2 className="text-2xl md:text-3xl font-bold text-amulet-950 mb-4">
                            En construcción
                        </h2>

                        {/* Descripción */}
                        <p className="text-amulet-700 text-lg mb-6 leading-relaxed">
                            Estamos trabajando en traerte los mejores recursos para potenciar tu entrenamiento.
                        </p>

                        {/* Lista de características futuras */}
                        <div className="bg-amulet-50 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-amulet-800 mb-4">
                                Próximamente:
                            </h3>
                            <ul className="space-y-2 text-amulet-700">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-amulet-500 rounded-full mr-3"></div>
                                    Guías de ejercicios detalladas
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-amulet-500 rounded-full mr-3"></div>
                                    Videos demostrativos
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-amulet-500 rounded-full mr-3"></div>
                                    Contenido fitness
                                </li>
                            </ul>
                        </div>

                        {/* Mensaje final */}
                        <p className="text-amulet-600 text-sm">
                            Mientras tanto, puedes crear tu rutina perfecta en nuestra sección de 
                            <span className="font-semibold text-amulet-700"> Planificador</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recursos