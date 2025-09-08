import { useNavigate } from "react-router-dom";
import { Image } from "@heroui/react";

function WorkoutCard({ workout }) {
    const navigate = useNavigate();

    const handleWorkout = () => {
        console.log("Workout clickeado:", workout.id, workout.type);
        navigate(`/workouts/${workout.id}`);
    };

    return (
        <div 
            className="relative w-full max-w-sm h-[300px] transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onClick={handleWorkout}
        >
            <div className="absolute z-10 bottom-4 left-4 flex flex-col items-start">
                <h1 className="text-tiny text-white/60 uppercase font-bold text-left">
                    {workout.name}
                </h1>
                <h4 className="text-amulet-100 font-medium text-large text-left">
                    {workout.description}
                </h4>
            </div>
            
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={workout.image || "https://heroui.com/images/card-example-4.jpeg"}
            />
        </div>
    );
}

export default WorkoutCard;