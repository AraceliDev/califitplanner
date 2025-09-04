import { useNavigate } from "react-router-dom";
import { Card, CardHeader, Image } from "@heroui/react";
import Button from "@/components/common/Button";

function WorkoutCard({ workout }) {
    const navigate = useNavigate();

    const handleWorkout = () => {
        console.log("Workout clickeado:", workout.id, workout.type);
        navigate(`/workouts/${workout.id}`);
    };

    return (
        <Card className="w-full max-w-sm h-[300px] transform transition-transform duration-300 hover:scale-105">
            <CardHeader className="absolute z-10 top-1 flex-col">
                <h1 className="text-tiny text-white/60 uppercase font-bold">
                    {workout.name}
                </h1>
                <h4 className="text-white font-medium text-large text-center">
                    {workout.description}
                </h4>
            </CardHeader>
            {/* Botón centrado abajo */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <Button
                    type="primario"
                    onClick={handleWorkout}
                    text="Ver"
                />
            </div>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={workout.image || "https://heroui.com/images/card-example-4.jpeg"}
            />
        </Card>
    );
}

export default WorkoutCard;
