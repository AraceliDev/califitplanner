import { useNavigate, useParams } from "react-router-dom";
import { Image } from "@heroui/image";
import Button from "@/components/common/Button";

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
        console.log("ver detalles de un ejercicio");
        navigate(`/workouts/${currentWorkoutId}/exercises/${exercise.id}`);
    };
    return (
        <div className="flex flex-col items-center bg-white border border-amulet-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-amulet-50 transition-colors">
            <Image
                isZoomed
                src={exercise.image || "/images/aros.jpg"}
                alt={exercise.nombre}
                className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-amulet-950">
                    {exercise.nombre}
                </h5>
                <p className="mb-3 font-normal text-amulet-700">
                    {exercise.descripcion || 'Sin descripción disponible'}
                </p>

                {/* Información adicional del ejercicio */}
                <div className="flex gap-4 text-sm text-amulet-600">
                    {exercise.series && (
                        <span className="font-medium">
                            Series: <span className="text-amulet-800">{exercise.series}</span>
                        </span>
                    )}
                    {exercise.repeticiones && (
                        <span className="font-medium">
                            repeticiones: <span className="text-amulet-800">{exercise.repeticiones}</span>
                        </span>
                    )}
                    {exercise.descanso && (
                        <span className="font-medium">
                            Descanso: <span className="text-amulet-800">{exercise.descanso} seg</span>
                        </span>
                    )}
                </div>
                <Button
                    type="secundario"
                    onClick={handleExerciseDetails}
                    text="Ver detalles"
                    extraClasses="mt-8 self-start"
                />
            </div>
        </div>
    );
}
export default ExerciseCard