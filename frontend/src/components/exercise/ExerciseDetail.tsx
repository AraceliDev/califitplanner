import { Image } from "@heroui/image";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import useExerciseStore from '@/stores/exerciseStore';

function ExerciseDetail() {
    const navigate = useNavigate();
    const { workoutId } = useParams();
    const { 
        selectedExercise, 
        currentWorkoutName,
        exercises,
        getNextExercise,
        getPreviousExercise,
        getCurrentExerciseIndex
    } = useExerciseStore();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const nextExercise = getNextExercise();
    const previousExercise = getPreviousExercise();
    const currentIndex = getCurrentExerciseIndex();
    const totalExercises = exercises.length;

    const handleNextExercise = () => {
        if (nextExercise && workoutId) {
            navigate(`/workouts/${workoutId}/exercises/${nextExercise.id}`);
        }
    };

    const handlePreviousExercise = () => {
        if (previousExercise && workoutId) {
            navigate(`/workouts/${workoutId}/exercises/${previousExercise.id}`);
        }
    };

    if (!selectedExercise) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="w-16 h-16 bg-amulet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amulet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <p className="text-amulet-700 text-lg">No hay ejercicio seleccionado</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="px-4 sm:px-6 md:px-12 py-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header con workout name como badge */}
                    {currentWorkoutName && (
                        <div className="flex justify-center mb-8">
                            <span className="inline-flex items-center rounded-full bg-amulet-500/10 px-4 py-2 text-sm font-semibold text-amulet-700 ring-1 ring-inset ring-amulet-600/20 backdrop-blur-sm">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                {currentWorkoutName}
                            </span>
                        </div>
                    )}

                    {/* Navegación entre ejercicios */}
                    {totalExercises > 0 && (
                        <div className="flex items-center justify-between mb-8 gap-4">
                            {/* Botón Anterior */}
                            <button
                                onClick={handlePreviousExercise}
                                disabled={!previousExercise}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 
                                    ${previousExercise 
                                        ? 'bg-amulet-600 hover:bg-amulet-700 text-white shadow-md hover:shadow-xl hover:-translate-x-1' 
                                        : 'bg-amulet-100 text-amulet-400 cursor-not-allowed'
                                    }
                                    sm:px-6 sm:py-3`}
                                aria-label="Ejercicio anterior"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="hidden sm:inline">Anterior</span>
                            </button>

                            {/* Indicador de progreso */}
                            <div className="flex flex-col items-center gap-1 flex-1">
                                <span className="text-sm text-amulet-600 font-medium">
                                    Ejercicio {currentIndex + 1} de {totalExercises}
                                </span>
                                <div className="w-full max-w-xs bg-amulet-200 rounded-full h-2 overflow-hidden">
                                    <div 
                                        className="bg-gradient-to-r from-amulet-500 to-amulet-600 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${((currentIndex + 1) / totalExercises) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Botón Siguiente */}
                            <button
                                onClick={handleNextExercise}
                                disabled={!nextExercise}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 
                                    ${nextExercise 
                                        ? 'bg-amulet-600 hover:bg-amulet-700 text-white shadow-md hover:shadow-xl hover:translate-x-1' 
                                        : 'bg-amulet-100 text-amulet-400 cursor-not-allowed'
                                    }
                                    sm:px-6 sm:py-3`}
                                aria-label="Ejercicio siguiente"
                            >
                                <span className="hidden sm:inline">Siguiente</span>
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Hero Section con título y descripción */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-amulet-950 mb-4 sm:text-4xl lg:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 to-amulet-400">
                                {selectedExercise.nombre}
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-6 rounded-full"></div>
                        <p className="text-base text-amulet-700 max-w-3xl mx-auto leading-relaxed lg:text-lg">
                            {selectedExercise.descripcion}
                        </p>
                    </div>

                    {/* Layout responsive con imagen y stats - Simétrico */}
                    <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-8 lg:gap-12 mb-12 items-start">

                        {/* Imagen del ejercicio */}
                        <div className="order-2 lg:order-1">
                            <div 
                                className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-4 cursor-pointer hover:shadow-3xl transition-shadow duration-300"
                                onClick={onOpen}
                                title="Click para ampliar imagen"
                            >
                                <Image
                                    src={`../../../public/images/${selectedExercise.imagen}`}
                                    alt={selectedExercise.nombre}
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-amulet-900/20 to-transparent rounded-2xl pointer-events-none"></div>
                                {/* Indicador de que es clickeable */}
                                <div className="absolute top-6 right-6 bg-amulet-600 text-white p-2 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Stats cards */}
                        <div className="order-1 lg:order-2">
                            <div className="w-full space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-amulet-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-amulet-800 text-sm uppercase tracking-wide">Series</h3>
                                                <p className="text-3xl font-bold text-amulet-950 mt-1">{selectedExercise.series}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-amulet-200 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-amulet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-amulet-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-amulet-800 text-sm uppercase tracking-wide">Repeticiones</h3>
                                                <p className="text-3xl font-bold text-amulet-950 mt-1">{selectedExercise.repeticiones}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-amulet-300 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-amulet-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-amulet-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-amulet-800 text-sm uppercase tracking-wide">Descanso</h3>
                                                <p className="text-3xl font-bold text-amulet-950 mt-1">{selectedExercise.descanso}<span className="text-lg text-amulet-600">s</span></p>
                                            </div>
                                            <div className="w-12 h-12 bg-amulet-400 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-amulet-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instrucciones mejoradas */}
                    {selectedExercise.instrucciones && (
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-amulet-200/50 p-8">
                            <h2 className="text-3xl font-bold text-amulet-950 mb-8 text-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 to-amulet-400">
                                    Instrucciones
                                </span>
                            </h2>

                            {selectedExercise.instrucciones.introduccion && (
                                <div className="mb-8 p-6 bg-amulet-50 rounded-xl border-l-4 border-amulet-400">
                                    <h3 className="text-lg font-semibold text-amulet-800 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Introducción
                                    </h3>
                                    <p className="text-amulet-700 leading-relaxed">{selectedExercise.instrucciones.introduccion}</p>
                                </div>
                            )}

                            {selectedExercise.instrucciones.pasos && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-amulet-800 mb-6 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                        Pasos a seguir
                                    </h3>
                                    <div className="space-y-4">
                                        {selectedExercise.instrucciones.pasos.map((paso, index) => (
                                            <div key={index} className="flex items-start p-4 bg-white rounded-xl border border-amulet-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <div className="flex-shrink-0 w-8 h-8 bg-amulet-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-0.5">
                                                    {index + 1}
                                                </div>
                                                <p className="text-amulet-700 leading-relaxed flex-1">{paso}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedExercise.instrucciones.consejos && (
                                <div className="bg-gradient-to-r from-amulet-100 to-amulet-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold text-amulet-800 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        Consejos Importantes
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedExercise.instrucciones.consejos.map((consejo, index) => (
                                            <div key={index} className="flex items-start">
                                                <svg className="w-5 h-5 text-amulet-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-amulet-700 text-sm leading-relaxed">{consejo}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal para ver la imagen ampliada */}
            <Modal 
                isOpen={isOpen} 
                onClose={onClose} 
                size="lg"
                placement="center"
                hideCloseButton={true}
                classNames={{
                    base: "max-w-[600px]",
                    body: "p-4"
                }}
            >
                <ModalContent>
                    <ModalHeader className="text-amulet-950 px-6 pt-6 pb-3">
                        {selectedExercise.nombre}
                    </ModalHeader>
                    <ModalBody className="px-6 pb-6">
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-amulet-50">
                            <Image
                                src={`../../../public/images/${selectedExercise.imagen}`}
                                alt={selectedExercise.nombre}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="px-6 pb-6">
                        <Button 
                            className="bg-amulet-600 text-white hover:bg-amulet-700"
                            onPress={onClose}
                        >
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default ExerciseDetail;