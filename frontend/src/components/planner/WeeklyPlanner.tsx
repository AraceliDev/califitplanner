import { DayColumn } from './DayColumn'
import { usePlannerLogic } from '@/hooks/usePlannerLogic'

const WeeklyPlanner = () => {
  const { getWeekDates, handleDrop, handleRemoveExercise } = usePlannerLogic()

  const weekDates = getWeekDates()

  return (
    <div className="space-y-4 p-2">
      <h2 className="text-xl font-semibold text-amulet-950">PLANIFICADOR SEMANAL</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-0">
        {weekDates.map((dayData) => (
          <DayColumn
            key={dayData.key}
            dayData={dayData}
            onDrop={handleDrop}
            onRemoveExercise={handleRemoveExercise}
          />
        ))}
      </div>
    </div>
  )
}

export default WeeklyPlanner