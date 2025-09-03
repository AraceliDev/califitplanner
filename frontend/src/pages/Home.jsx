import { Image } from "@heroui/image";
import Button from "@/components/common/Button";
import Carousel from "@/components/common/Carousel";
import CustomSelect from "@/components/common/CustomSelect";

function Home() {
    const handleCreateRoutine = () => {
        console.log("Crear rutina clickeado");
        // Navegación o lógica para crear rutina
    };

    const handleWorkouts = () => {
        console.log("Workouts clickeado");
        // Navegación o lógica para workouts
    };

    const handleLevelSelect = (level) => {
        console.log("Nivel seleccionado:", level);
        // Aquí puedes manejar la selección del nivel
    };

    const levelOptions = [
        { value: "principiante", label: "Principiante" },
        { value: "intermedio", label: "Intermedio" },
        { value: "avanzado", label: "Avanzado" }
    ];

    const carouselData = [
        {
            src: "/images/equilibrio.jpg",
            alt: "equilibrio",
            title: "Equilibrio",
            description: "Mejora tu estabilidad y control corporal en cada movimiento."
        },
        {
            src: "/images/flexibilidad.jpg",
            alt: "flexibilidad",
            title: "Flexibilidad",
            description: "Aumenta tu rango de movimiento y reduce el riesgo de lesiones."
        },
        {
            src: "/images/movilidad.jpg",
            alt: "movilidad",
            title: "Movilidad",
            description: "Libera articulaciones y mejora la agilidad en tus rutinas diarias."
        },
        {
            src: "/images/resistencia.jpg",
            alt: "resistencia",
            title: "Resistencia",
            description: "Fortalece tu corazón y músculos para entrenamientos más largos y efectivos."
        },
        {
            src: "/images/fuerza.jpg",
            alt: "fuerza",
            title: "Fuerza",
            description: "Desarrolla músculos funcionales que soportan movimientos naturales del cuerpo."
        }
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen  bg-[#E6EBE0] text-white font-poppins">
                {/* FILA1: Columna izquierda */}
                <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0 bg-[#5D7A4F]">
                    <h1 className="text-3xl leading-relaxed sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                        CaliFit Planner: Comienza tu transformación
                    </h1>
                    <p className="text-lg leading-relaxed sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 leading-relaxed">
                        Entrena sin límites, diseña tu rutina y supera cada desafío
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                        <Button
                            type="destacado"
                            onClick={handleCreateRoutine}
                            text="Crear rutina"
                            extraClasses="mt-6"
                        />
                        <Button
                            type="secundario"
                            onClick={handleWorkouts}
                            text="Workouts"
                            extraClasses="mt-6"
                        />
                    </div>
                </div>
                {/* FILA1: Columna derecha */}
                <div className="flex items-center justify-center p-4 md:p-0">
                    <Image isBlurred
                        src="/images/aros.jpg"
                        alt="CaliFit Aros"
                        className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg md:rounded-none"
                    />
                </div>
                {/* FILA2: Columna izquierda */}
                <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 py-32 md:py-40 bg-[#E6EBE0] text-[#141C12]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ml-4 md:ml-8">¿Por qué Calistenia?</h1>
                </div>
                {/* FILA2: Columna derecha */}
                <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 py-32 md:py-40 bg-[#E6EBE0] text-[#141C12]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 leading-loose">Conecta cuerpo y mente: entrena donde quieras usando solo tu cuerpo y disfruta de todos sus beneficios</p>
                </div>
            </div>
            {/* FILA3: Carrusel de imagenes, IMG DE EJEMPLO */}
            <div className="flex justify-center md:justify-start bg-[#E6EBE0] text-[#141C12]">
                <Carousel
                    images={carouselData}
                    autoPlayInterval={5000}
                    showText={true}
                    backgroundColor="bg-[#E6EBE0]"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen bg-[#E6EBE0] font-poppins">
                {/* COLUMNA IZQUIERDA: Por dónde empezar */}
                <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 py-16 md:py-20 bg-[#E6EBE0] text-[#141C12]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                        ¿Por dónde empezar?
                    </h1>
                    <ul className="space-y-6 list-none text-lg sm:text-xl leading-relaxed">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-[#5D7A4F] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                1
                            </span>
                            <span>Elige tu nivel: principiante, intermedio o avanzado para adaptar los entrenamientos a ti.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-[#5D7A4F] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                2
                            </span>
                            <span>Explora nuestros workouts organizados por zonas musculares: upper, lower, core, full, push, pull.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-[#5D7A4F] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                3
                            </span>
                            <span>Selecciona los ejercicios que más te motiven y se adapten a tus objetivos.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-[#5D7A4F] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                4
                            </span>
                            <span>Planifica tus días de entrenamiento y crea una rutina que se ajuste a tu semana.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 bg-[#5D7A4F] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                                5
                            </span>
                            <span>¡Descarga tu rutina y comienza a entrenar de manera efectiva y divertida!</span>
                        </li>
                    </ul>
                    <Button
                        type="secundario"
                        onClick={handleCreateRoutine}
                        text="Crear rutina"
                        extraClasses="mt-8 self-start"
                    />
                </div>

                {/* COLUMNA DERECHA: Seleccionar nivel con CustomSelect */}
                <div className="flex items-center justify-center px-6 sm:px-8 md:px-12 py-16 md:py-20 bg-[#E6EBE0]">
                    <div className="backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl border border-white/20 max-w-md w-full bg-[#5D7A4F]">
                        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">
                            Selecciona tu nivel y consulta nuestros ejercicios
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="level" className="block text-white text-lg font-semibold mb-3">
                                    Nivel de entrenamiento
                                </label>
                                <CustomSelect
                                    options={levelOptions}
                                    placeholder="Elige tu nivel"
                                    onSelect={handleLevelSelect}
                                />
                            </div>
                            
                            <Button
                                type="destacado"
                                onClick={handleWorkouts}
                                text="Buscar ejercicios"
                                extraClasses="w-full py-4 text-lg font-semibold bg-[#2D3E27] hover:bg-[#1A2319] transform hover:scale-105 transition-all duration-200"
                            />
                        </div>

                        {/* Elemento decorativo */}
                        <div className="flex justify-center mt-8 space-x-2">
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home