import { useEffect } from "react";
import WorkoutCard from "@/components/workout/WorkoutCard";
import workoutStore from "@/stores/workoutStore"

function Workouts() {
    const { workouts, fetchWorkouts } = workoutStore();
    useEffect(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    return (
        <>
            <h1 className="text-2xl text-center text-amulet-950 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                Workouts
            </h1>
            <div className="flex justify-center mt-10 mb-10 bg-amulet-100 px-4">

                <div className="max-w-[1200px] w-full grid gap-6 :grid-cols-2 lg:grid-cols-3 place-items-center">
                    {workouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Workouts
