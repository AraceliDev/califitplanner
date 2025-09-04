interface WorkoutHeaderProps {
    name: string;
    description: string;
    type: string;
    level: string;
}

function WorkoutHeader({ name, description, type, level }: WorkoutHeaderProps) {
    return (
        <div className="text-center mb-16 py-8">
            {/* Título con gradiente y efecto */}
            <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400 animate-pulse">
                    {name}
                </span>
            </h1>

            {/* Línea decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-6 rounded-full"></div>

            {/* Descripción */}
            <p className="text-lg font-normal text-amulet-600 lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
            </p>

            {/* Badges/Etiquetas con iconos */}
            <div className="flex gap-4 justify-center flex-wrap">
                <span className="inline-flex items-center rounded-lg bg-amulet-400/10 px-4 py-2 text-sm font-semibold text-amulet-600 ring-1 ring-inset ring-amulet-500/20 backdrop-blur-sm hover:bg-amulet-400/20 transition-colors duration-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Tipo: {type}
                </span>

                <span className="inline-flex items-center rounded-lg bg-amulet-500/10 px-4 py-2 text-sm font-semibold text-amulet-700 ring-1 ring-inset ring-amulet-600/20 backdrop-blur-sm hover:bg-amulet-500/20 transition-colors duration-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Nivel: {level}
                </span>
            </div>
        </div>
    );
}

export default WorkoutHeader;