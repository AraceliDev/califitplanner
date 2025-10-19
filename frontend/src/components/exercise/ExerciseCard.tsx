import { useNavigate, useParams } from "react-router-dom";
import { Image } from "@heroui/image";

interface ExerciseCardProps {
    exercise: {
        id: number;
        nombre: string;
        descripcion?: string;
        imagen?: string;
        series?: number;
        repeticiones?: number;
        descanso?: number
    };
    workoutId?: string;
}

function ExerciseCard({ exercise, workoutId }: ExerciseCardProps) {
    const navigate = useNavigate();
    const params = useParams();
    // Usar workoutId del prop o de params si está disponible
    const currentWorkoutId = workoutId || params.id;

    const handleExerciseDetails = () => {
        navigate(`/workouts/${currentWorkoutId}/exercises/${exercise.id}`);
    };
    const getImagePath = () => {
        if (exercise.imagen) {
            // Si la imagen ya incluye "exercises/" en la ruta
            return `/images/${exercise.imagen}`;
        }
        return "/images/sport.jpg"; // Imagen por defecto
    };
    
    return (
        <div className="flex flex-col bg-white border border-amulet-200 rounded-xl shadow-md hover:shadow-xl hover:border-amulet-300 transition-all duration-300 h-full overflow-hidden group">
            {/* Contenedor de imagen con altura fija y responsive */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-amulet-100 via-amulet-50 to-amulet-100">
                {/* Patrón de fondo sutil para ocultar espacios */}
                <div className="absolute inset-0 opacity-30" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, rgba(93, 122, 79, 0.1) 1px, transparent 0)`,
                         backgroundSize: '24px 24px'
                     }}>
                </div>
                
                {/* Imagen centrada con object-cover para llenar todo el espacio */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        isZoomed
                        src={getImagePath()}
                        alt={exercise.nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        style={{
                            objectPosition: 'center'
                        }}
                    />
                </div>
            </div>
            
            {/* Contenido de la card */}
            <div className="flex flex-col justify-between p-5 sm:p-6 flex-grow">
                <div className="text-left mb-4">                                          
                    <h5 
                        className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-amulet-950 cursor-pointer hover:text-amulet-700 transition-colors line-clamp-2"
                        onClick={handleExerciseDetails}
                    >
                        {exercise.nombre}
                    </h5>
                    <p className="font-normal text-amulet-700 text-base sm:text-lg line-clamp-3">
                        {exercise.descripcion || 'Sin descripción disponible'}
                    </p>
                </div>
                
                {/* Información adicional (series, repeticiones, descanso) */}
                {(exercise.series || exercise.repeticiones || exercise.descanso) && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-amulet-200">
                        {exercise.series && (
                            <div className="flex items-center gap-1.5 text-amulet-700">
                                <span className="text-sm font-medium">Series:</span>
                                <span className="text-sm font-semibold bg-amulet-100 px-2 py-0.5 rounded">{exercise.series}</span>
                            </div>
                        )}
                        {exercise.repeticiones && (
                            <div className="flex items-center gap-1.5 text-amulet-700">
                                <span className="text-sm font-medium">Reps:</span>
                                <span className="text-sm font-semibold bg-amulet-100 px-2 py-0.5 rounded">{exercise.repeticiones}</span>
                            </div>
                        )}
                        {exercise.descanso && (
                            <div className="flex items-center gap-1.5 text-amulet-700">
                                <span className="text-sm font-medium">Descanso:</span>
                                <span className="text-sm font-semibold bg-amulet-100 px-2 py-0.5 rounded">{exercise.descanso}s</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExerciseCard