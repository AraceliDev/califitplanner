import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useExerciseStore from '@/stores/exerciseStore'
import ExerciseDetail from '@/components/exercise/ExerciseDetail'
import Button from '@/components/common/Button';

function Exercise() {
    const { workoutId, exerciseId } = useParams();
    const navigate = useNavigate();
    const { 
        selectedExercise, 
        exercises,
        fetchSpecificExercise, 
        fetchExercisesByWorkout,
        loading, 
        error 
    } = useExerciseStore();

    useEffect(() => {
        if (workoutId && exerciseId) {
            // Cargar todos los ejercicios del workout para navegación
            fetchExercisesByWorkout(workoutId);
            // Cargar el ejercicio específico
            fetchSpecificExercise(workoutId, parseInt(exerciseId));
        }
    }, [workoutId, exerciseId, fetchSpecificExercise, fetchExercisesByWorkout]);

    const handleGoBack = () => {
        navigate(`/workouts/${workoutId}`);
    };

    if (loading) return <div className="p-6">Cargando ejercicio...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div className="p-6">
            <ExerciseDetail />

            <div className="flex justify-center mt-6">
                <Button
                    type="secundario"
                    onClick={handleGoBack}
                    text="← Volver a ejercicios"
                />
            </div>
        </div>
    )
}
export default Exercise