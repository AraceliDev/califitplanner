import { useState, useEffect } from 'react'
import { DayColumn } from './DayColumn'
import MobileWeekCalendar from './MobileWeekCalendar'
import { usePlannerLogic } from '@/hooks/usePlannerLogic'
import usePlannerStore, { type WeeklyPlan } from '@/stores/plannerStore'

// Hook para detectar dispositivos móviles/tablets
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

const WeeklyPlanner = () => {
  const { getWeekDates, handleDrop, handleRemoveExercise } = usePlannerLogic()
  const { selectedDayForMobile, setSelectedDayForMobile } = usePlannerStore()
  const isMobile = useIsMobile()

  const weekDates = getWeekDates()

  const handleSelectDay = (day: keyof WeeklyPlan) => {
    setSelectedDayForMobile(day)
  }

  // Desktop view (unchanged)
  if (!isMobile) {
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

  // Mobile/Tablet view
  return (
    <div className="space-y-4">
      {/* Calendario compacto para móvil/tablet */}
      <MobileWeekCalendar
        weekDates={weekDates}
        onSelectDay={handleSelectDay}
        selectedDay={selectedDayForMobile}
        onRemoveExercise={handleRemoveExercise}
      />
    </div>
  )
}

export default WeeklyPlanner
