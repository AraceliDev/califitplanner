import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="fixed top-0 w-full bg-[#E6EBE0] text-[#141C12] py-1 md:py-1 z-50">
            <div className="w-full px-4 sm:px-6 md:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/home"
                        className="flex items-center space-x-2"
                    >
                        <img
                            src="/images/logos/logoCalifit.svg"
                            alt="CaliFit Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Enlaces desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/workouts"
                            className="text-[#141C12] hover:text-[#5D7A4F] font-medium transition-colors duration-200"
                        >
                            Workouts
                        </Link>
                        <Link
                            to="/rutinas"
                            className="text-[#141C12] hover:text-[#5D7A4F] font-medium transition-colors duration-200"
                        >
                            Rutinas
                        </Link>
                        <Link
                            to="/recursos"
                            className="text-[#141C12] hover:text-[#5D7A4F] font-medium transition-colors duration-200"
                        >
                            Recursos
                        </Link>
                    </div>

                    {/* Botón hamburguesa para móvil */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col space-y-1 p-2 hover:bg-[#CCD7C3] rounded-lg transition-colors duration-200"
                        aria-label="Abrir menú"
                    >
                        <span className={`w-6 h-0.5 bg-[#141C12] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#141C12] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#141C12] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Menú móvil */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="pt-4 pb-2 space-y-2">
                        <Link
                            to="/workouts"
                            className="block py-3 px-4 text-[#141C12] hover:text-[#5D7A4F] hover:bg-[#CCD7C3] font-medium transition-all duration-200 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Workouts
                        </Link>
                        <Link
                            to="/rutinas"
                            className="block py-3 px-4 text-[#141C12] hover:text-[#5D7A4F] hover:bg-[#CCD7C3] font-medium transition-all duration-200 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Rutinas
                        </Link>
                        <Link
                            to="/recursos"
                            className="block py-3 px-4 text-[#141C12] hover:text-[#5D7A4F] hover:bg-[#CCD7C3] font-medium transition-all duration-200 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Recursos
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;