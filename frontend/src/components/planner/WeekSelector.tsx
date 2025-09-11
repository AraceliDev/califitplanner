import { useState, useEffect } from 'react'
import { Button, Card, CardBody } from '@heroui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import usePlannerStore from '@/stores/plannerStore'

const WeekSelector = () => {
  const { selectedWeek, setSelectedWeek } = usePlannerStore()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    setCurrentMonth(new Date(selectedWeek))
  }, [selectedWeek])

  const getWeekDates = (date: Date) => {
    const week = []
    const startOfWeek = new Date(date)
    
    // Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)
    const dayOfWeek = startOfWeek.getDay()
    
    // Calcular días para retroceder hasta el lunes
    // Si es domingo (0), retroceder 6 días; si es lunes (1), retroceder 0 días, etc.
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    
    // Establecer el lunes de esa semana
    startOfWeek.setDate(startOfWeek.getDate() - daysToSubtract)

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      week.push(day)
    }
    return week
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: '2-digit' 
    })
  }

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const getDayName = (date: Date) => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    return days[date.getDay()]
  }

  // Función para verificar si una semana ya pasó (domingo terminado)
  const isWeekPassed = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Resetear horas para comparar solo fechas
    
    const weekDates = getWeekDates(date)
    const sunday = weekDates[6] // El domingo es el último día de la semana
    
    return sunday < today
  }

  // Función para verificar si es la semana actual
  const isCurrentWeek = (date: Date) => {
    const today = new Date()
    const weekDates = getWeekDates(date)
    
    return weekDates.some(weekDate => {
      const compareDate = new Date(weekDate)
      compareDate.setHours(0, 0, 0, 0)
      const compareToday = new Date(today)
      compareToday.setHours(0, 0, 0, 0)
      return compareDate.getTime() === compareToday.getTime()
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1))
    setCurrentMonth(newMonth)
  }

  const selectWeek = (date: Date) => {
    // No permitir seleccionar semanas que ya pasaron
    if (isWeekPassed(date)) {
      return
    }
    setSelectedWeek(date)
  }

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    // Obtener el día de la semana del primer día del mes (0 = domingo, 1 = lunes, etc.)
    const firstDayOfWeek = firstDay.getDay()
    
    // Calcular cuántos días del mes anterior mostrar para que el calendario empiece en lunes
    const daysFromPrevMonth = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
    
    const days = []
    
    // Días del mes anterior
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false })
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      days.push({ date, isCurrentMonth: true })
    }
    
    return days
  }

  const isSelectedWeek = (date: Date) => {
    const weekDates = getWeekDates(selectedWeek)
    return weekDates.some(weekDate => 
      weekDate.toDateString() === date.toDateString()
    )
  }

  const currentWeekDates = getWeekDates(selectedWeek)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-amulet-950">CALENDARIO</h2>
      
      {/* Navegación del mes */}
      <div className="flex items-center justify-between">
        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth('prev')}
          className="text-amulet-600"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        
        <h3 className="font-medium text-amulet-950 capitalize">
          {formatMonth(currentMonth)}
        </h3>
        
        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth('next')}
          className="text-amulet-600"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendario */}
      <Card className="bg-amulet-50">
        <CardBody className="p-3">
          <div className="grid grid-cols-7 gap-1 text-xs">
            {/* Encabezados de días */}
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(day => (
              <div key={day} className="text-center font-medium text-amulet-700 p-2">
                {day}
              </div>
            ))}
            
            {/* Días del mes */}
            {getDaysInMonth().map((day, index) => {
              const isSelected = isSelectedWeek(day.date)
              const weekPassed = isWeekPassed(day.date)
              const isCurrent = isCurrentWeek(day.date)
              
              return (
                <button
                  key={index}
                  onClick={() => selectWeek(day.date)}
                  disabled={weekPassed}
                  className={`
                    p-2 text-center rounded transition-colors relative
                    ${day.isCurrentMonth ? 'text-amulet-950' : 'text-amulet-400'}
                    ${weekPassed 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50' 
                      : isSelected 
                        ? 'bg-amulet-600 text-white' 
                        : isCurrent
                          ? 'bg-amulet-300 text-white ring-2 ring-amulet-300'
                          : 'hover:bg-amulet-200'
                    }
                  `}
                >
                  {day.date.getDate()}
                </button>
              )
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default WeekSelector