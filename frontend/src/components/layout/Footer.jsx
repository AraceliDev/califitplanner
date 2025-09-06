function Footer() {
    return (
        <footer className="w-full bg-[#5D7A4F] text-amulet-100 py-6 sm:py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Logo y enlaces */}
                <div className="flex flex-col space-y-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-6">
                    {/* Logo centrado en móvil */}
                    <div className="flex items-center justify-center sm:justify-start">
                        <img 
                            src="/images/logos/logoCalifitWhite.svg" 
                            className="h-10 sm:h-8 md:h-12  mr-2 sm:mr-3" 
                            alt="CaliFit Planner Logo" 
                        />
                        {/* <span className="text-lg sm:text-xl font-bold">
                            CaliFit Planner
                        </span> */}
                    </div>
                    
                    {/* Enlaces centrados en móvil */}
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left">
                        <a 
                            href="#" 
                            className="hover:text-[#CCD7C3] transition-colors duration-200 py-1"
                        >
                            Privacidad
                        </a>
                        <a 
                            href="#" 
                            className="hover:text-[#CCD7C3] transition-colors duration-200 py-1"
                        >
                            Contacto
                        </a>
                        <a 
                            href="#" 
                            className="hover:text-[#CCD7C3] transition-colors duration-200 py-1"
                        >
                            Ayuda
                        </a>
                    </div>
                </div>
                
                {/* Línea divisoria */}
                <div className="border-t border-white/20 pt-4">
                    <p className="text-center text-xs sm:text-sm text-white/80 leading-relaxed">
                        © 2025 CaliFit Planner - Tu app de calistenia.
                        <span className="block sm:inline sm:ml-1">Todos los derechos reservados.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer