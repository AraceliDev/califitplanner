import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/common/Button";
import ExerciseCard from "@/components/exercise/ExerciseCard";
import workoutStore from "@/stores/workoutStore";
import WorkoutHeader from "@/components/workout/WorkoutHeader";

function Workout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedWorkout, fetchWorkoutById, clearSelectedWorkout, loading, error } = workoutStore();

  useEffect(() => {
    if (id) {
      fetchWorkoutById(id);
    }

    // Limpiar el workout seleccionado cuando el componente se desmonta
    return () => {
      clearSelectedWorkout();
    };
  }, [id, fetchWorkoutById, clearSelectedWorkout]);

  const handleGoBack = () => {
    navigate(`/workouts`);
  };

  if (loading) {
    return (
      <div className="p-6">
        <p>Cargando workout...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="text-red-400">{error}</p>
        <Button
          type="primario"
          onClick={handleGoBack}
          text="Volver a Workouts"
        />
      </div>
    );
  }

  if (!selectedWorkout) {
    return (
      <div className="p-6">
        <p>Workout no encontrado</p>
        <Button
          type="primario"
          onClick={handleGoBack}
          text="Volver a Workouts"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto">
          <WorkoutHeader
            name={selectedWorkout.name}
            description={selectedWorkout.descripcion || selectedWorkout.description}
            type={selectedWorkout.type}
            level={selectedWorkout.level}
          />

          {/* Lista de ejercicios */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl md:max-w-5xl mx-auto">
              {selectedWorkout.exercises && selectedWorkout.exercises.length > 0 ? (
                selectedWorkout.exercises.map((exercise, index) => (
                  <ExerciseCard key={exercise.id || index} exercise={exercise} workoutId={id} />
                ))
              ) : (
                <div className="bg-amulet-100 p-4 rounded-lg border border-amulet-100">
                  <p className="text-amulet-600">No hay ejercicios disponibles para este workout.</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="primario"
              onClick={handleGoBack}
              text="← Volver a Workouts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;