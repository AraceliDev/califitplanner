import { useState, useEffect } from "react";

function Carousel({ 
    images, 
    autoPlayInterval = 5000, 
    showText = true, 
    className = "",
    backgroundColor = "bg-[#F4F7F2]" 
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play del carrusel
    useEffect(() => {
        if (autoPlayInterval > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, autoPlayInterval);

            return () => clearInterval(interval);
        }
    }, [images.length, autoPlayInterval]);

    const goToPrevious = () => {
        setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) {
        return <div>No hay imágenes para mostrar</div>;
    }

    return (
        <div className={`w-full py-16 ${backgroundColor} ${className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Imágenes con relative ÚNICO */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botones de navegación - Posicionados respecto a la imagen */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#141C12] rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D7A4F] z-10"
                                aria-label="Imagen anterior"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button
                                onClick={goToNext}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#141C12] rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D7A4F] z-10"
                                aria-label="Siguiente imagen"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Texto debajo - SIN relative */}
                {showText && images[currentIndex] && (images[currentIndex].title || images[currentIndex].description) && (
                    <div className="text-center mt-8">
                        {images[currentIndex].title && (
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141C12] mb-4">
                                {images[currentIndex].title}
                            </h3>
                        )}
                        {images[currentIndex].description && (
                            <p className="text-lg sm:text-xl text-[#2D3E27] max-w-2xl mx-auto leading-relaxed">
                                {images[currentIndex].description}
                            </p>
                        )}
                    </div>
                )}

                {/* Indicadores (dots) - SIN relative */}
                {images.length > 1 && (
                    <div className="flex justify-center mt-8 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D7A4F] ${
                                    index === currentIndex 
                                        ? 'bg-[#5D7A4F]' 
                                        : 'bg-[#CCD7C3] hover:bg-[#A7BA9B]'
                                }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Carousel;