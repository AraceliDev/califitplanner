import { useNavigate, useParams } from "react-router-dom";
import { Image } from "@heroui/image";

interface ExerciseCardProps {
    exercise: {
        id: number;
        nombre: string;
        descripcion?: string;
        image?: string;
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
    
    return (
        <div className="flex flex-col items-center bg-white border border-amulet-200 rounded-xl shadow-sm md:flex-row md:max-w-xl md:items-stretch hover:bg-amulet-50 transition-colors h-full">
            <div className="w-full md:w-48 md:h-full flex-shrink-0">
                <Image
                    isZoomed
                    src={exercise.image || "/images/sport.jpg"}
                    alt={exercise.nombre}
                    className="object-cover md:h-full rounded-t-xl md:rounded-none md:rounded-s-xl"
                />
            </div>
            <div className="flex flex-col justify-center p-4 leading-normal w-full min-h-[180px]">
                {/* Información adicional del ejercicio */}
                <div className="text-left">                                          
                    <h5 
                        className="mb-2 text-lg md:text-xl font-bold tracking-tight text-amulet-950 cursor-pointer hover:text-amulet-700 transition-colors"
                        onClick={handleExerciseDetails}
                    >
                        {exercise.nombre}
                    </h5>
                    <p className="font-normal text-amulet-700 text-sm md:text-base line-clamp-2 md:line-clamp-3">
                        {exercise.descripcion || 'Sin descripción disponible'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExerciseCard