import { useEffect } from 'react'
import { Card, CardBody, CardFooter, Button, Image } from '@heroui/react'
import useWorkoutStore from '@/stores/workoutStore'
import usePlannerStore from '@/stores/plannerStore'
import type { Workout } from '@/types/workout'

const WorkoutSelector = () => {
  const { 
    workouts, 
    loading, 
    error, 
    fetchWorkouts, 
    availableLevels, 
    fetchAvailableLevels,
    fetchWorkoutsByLevel,
    clearFilters
  } = useWorkoutStore()

  const { 
    selectedWorkout, 
    levelFilter, 
    setSelectedWorkout, 
    setLevelFilter 
  } = usePlannerStore()

  const defaultLevels = ['principiante', 'intermedio', 'avanzado']
  const levelsToShow = availableLevels && availableLevels.length > 0 ? availableLevels : defaultLevels

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchAvailableLevels()
        // Cargar workouts del nivel por defecto (principiante)
        if (levelFilter) {
          await fetchWorkoutsByLevel(levelFilter as Workout['level'])
        } else {
          await fetchWorkouts()
        }
      } catch (error) {
        console.error('Error loading workout data:', error)
      }
    }
    
    loadData()
  }, [])

  const handleWorkoutSelect = (workout: Workout) => {
    setSelectedWorkout(workout)
  }

  const handleLevelFilter = (level: string | null) => {
    setLevelFilter(level)
    if (level) {
      fetchWorkoutsByLevel(level as Workout['level'])
    } else {
      clearFilters()
    }
  }

  const getWorkoutTypeLabel = (type: Workout['type']) => {
    const labels = {
      'push': 'Push Day',
      'pull': 'Pull Day', 
      'lower-body': 'Lower Body',
      'upper-body': 'Upper Body',
      'full-body': 'Full Body',
      'core': 'Core Day'
    }
    return labels[type] || type
  }

  const getLevelLabel = (level: Workout['level']) => {
    const labels = {
      'principiante': 'Principiante',
      'intermedio': 'Intermedio',
      'avanzado': 'Avanzado'
    }
    return labels[level] || level
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-amulet-950">WORKOUTS</h2>
      
      {/* Loading state */}
      {loading && (
        <div className="text-center p-4">
          <div className="text-amulet-600">Cargando workouts...</div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-red-500 text-center p-4">
          <div>Error: {error}</div>
          <Button 
            size="sm" 
            onClick={() => {
              clearFilters()
              window.location.reload()
            }}
            className="mt-2"
          >
            Reintentar
          </Button>
        </div>
      )}

      {/* Content - solo se muestra cuando no hay loading ni error */}
      {!loading && !error && (
        <>
          {/* Filtros por nivel */}
          <div className="flex gap-2 flex-wrap">
            {levelsToShow && levelsToShow.length > 0 && levelsToShow.map((level) => (
              <Button
                key={level}
                size="sm"
                variant={levelFilter === level ? 'solid' : 'ghost'}
                color={levelFilter === level ? 'success' : 'default'}
                onClick={() => handleLevelFilter(level)}
                className={levelFilter === level ? 'bg-amulet-600 text-white' : 'text-amulet-700'}
              >
                {getLevelLabel(level as Workout['level'])}
              </Button>
            ))}
          </div>

          {/* Grid de workouts */}
          {workouts && workouts.length > 0 ? (
            <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
              {workouts.map((workout) => {
                const isSelected = selectedWorkout?.id === workout.id                
                return (
                  <Card
                    key={workout.id}
                    isPressable
                    shadow="sm"
                    className={`transition-all ${
                      isSelected
                        ? 'ring-2 ring-amulet-600 shadow-lg bg-amulet-100' 
                        : 'hover:shadow-md hover:scale-102 bg-white'
                    }`}
                    onPress={() => handleWorkoutSelect(workout)}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        alt={getWorkoutTypeLabel(workout.type)}
                        className="w-full object-cover h-[120px]"
                        radius="lg"
                        shadow="sm"
                        src="/images/iconos/fitness.jpeg"
                        width="100%"
                      />
                    </CardBody>
                    <CardFooter className="text-small flex-col items-center justify-center h-16 gap-1">
                      <div className="flex items-center gap-2">
                        <b className="text-amulet-950">{getWorkoutTypeLabel(workout.type)}</b>
                        {isSelected && (
                          <div className="w-5 h-5 bg-amulet-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center text-amulet-600 p-8">
              No se encontraron workouts
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default WorkoutSelector