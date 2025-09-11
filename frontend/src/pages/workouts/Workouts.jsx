import { useEffect } from "react";
import WorkoutCard from "@/components/workout/WorkoutCard";
import workoutStore from "@/stores/workoutStore"

function Workouts() {
    const { workouts, fetchWorkouts } = workoutStore();
    useEffect(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    return (
        <div className="px-4 sm:px-6 md:px-12">
            {/* Título con gradiente y efecto */}
            <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400 animate-pulse">
                    Workouts
                </span>
            </h1>

            {/* Línea decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-6 rounded-full"></div>
            <div className="flex justify-center mt-10 mb-10 bg-amulet-100 -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
                <div className="max-w-[1200px] w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {workouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workouts