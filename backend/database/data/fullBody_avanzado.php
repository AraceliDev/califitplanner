<?php
return [
    [
        'type' => 'full-body',
        'name' => 'Full Body',
        'level' => 'avanzado',
        'description' => 'Máximo desafío físico con ejercicios de élite',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Muscle Up en Anillas',
                'descripcion' => 'Transición explosiva de dominada a fondo en anillas gimnásticas',
                'instrucciones' => [
                    'introduccion' => 'El muscle up en anillas es uno de los movimientos más técnicos y exigentes de la calistenia, requiriendo fuerza, técnica y control corporal excepcional.',
                    'pasos' => [
                        'Cuelga de las anillas con agarre falso (muñecas sobre las anillas).',
                        'Inicia un swing controlado o un kip para generar impulso.',
                        'Tira explosivamente hacia arriba mientras llevas las rodillas al pecho.',
                        'En el punto máximo de la tracción, rota las muñecas y lleva los codos sobre las anillas.',
                        'Transiciona de la tracción al empuje inclinando el torso hacia adelante.',
                        'Empuja hacia arriba hasta que los brazos estén completamente extendidos.',
                        'Las anillas deben quedar a los lados de las caderas en la posición final.',
                        'Baja controladamente invirtiendo el movimiento.'
                    ],
                    'consejos' => [
                        'Domina primero dominadas altas y fondos en anillas por separado',
                        'La transición (el "giro") es la parte más técnica',
                        'Practica el agarre falso para facilitar la rotación',
                        'El movimiento es más fácil con un swing controlado inicial',
                        'Mantén las anillas cerca del cuerpo durante todo el movimiento'
                    ]
                ],
                'imagen' => 'exercises/full-body/muscle-up-anillas.png',
                'repeticiones' => 4,
                'series' => 3,
                'descanso' => 120
            ],
            [
                'id' => 2,
                'nombre' => 'Dominadas Lastradas',
                'descripcion' => 'Dominadas con peso adicional para máximo desarrollo de fuerza',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas lastradas son la progresión natural cuando ya dominas las dominadas con peso corporal, permitiendo desarrollo continuo de fuerza.',
                    'pasos' => [
                        'Colócate un cinturón de lastre con discos o usa un chaleco con peso.',
                        'Cuelga de la barra con tu agarre preferido (prono o supino).',
                        'Asegúrate de que el peso esté bien ajustado y no se balancee.',
                        'Realiza la dominada con la misma técnica que sin peso.',
                        'Mantén el control durante todo el rango de movimiento.',
                        'Sube hasta que el mentón supere la barra.',
                        'Baja de forma controlada, especialmente con la carga adicional.',
                        'Evita el impulso o balanceo del cuerpo.'
                    ],
                    'consejos' => [
                        'Empieza con poco peso (2-5 kg) y progresa gradualmente',
                        'Prioriza la técnica perfecta sobre el peso usado',
                        'El peso adicional aumenta el estrés articular, calienta bien',
                        'Si no puedes hacer al menos 8 dominadas limpias, aún no uses lastre',
                        'Alterna entrenamientos con y sin peso para variedad'
                    ]
                ],
                'imagen' => 'exercises/full-body/dominadas-lastradas.png',
                'repeticiones' => 6,
                'series' => 4,
                'descanso' => 120
            ],
            [
                'id' => 3,
                'nombre' => 'Pistol Squat',
                'descripcion' => 'Sentadilla a una pierna completa, máxima fuerza unilateral',
                'instrucciones' => [
                    'introduccion' => 'La pistol squat es el ejercicio definitivo de pierna unilateral, requiriendo fuerza, equilibrio, movilidad y control excepcionales.',
                    'pasos' => [
                        'Párate sobre una pierna con la otra extendida hacia adelante.',
                        'Extiende los brazos adelante para ayudar con el balance.',
                        'Mantén la pierna libre extendida y paralela al suelo.',
                        'Baja lentamente doblando la rodilla de apoyo.',
                        'Desciende hasta que el glúteo casi toque el talón.',
                        'La pierna extendida no debe tocar el suelo en ningún momento.',
                        'Empuja con el talón de la pierna de apoyo para subir.',
                        'Mantén el pecho erguido y el core activado durante todo el movimiento.',
                        'Completa todas las repeticiones antes de cambiar de pierna.'
                    ],
                    'consejos' => [
                        'La movilidad de tobillo es crucial, trabájala si es limitante',
                        'Empieza con pistol squats asistidas usando TRX o agarrándote a algo',
                        'Practica el descenso controlado antes de intentar subir',
                        'Puedes sostener un peso frente a ti como contrapeso al inicio',
                        'La rodilla debe seguir la línea del pie, no girar hacia dentro'
                    ]
                ],
                'imagen' => 'exercises/full-body/pistol-squat.png',
                'repeticiones' => 5, 
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 4,
                'nombre' => 'Salto al Cajón',
                'descripcion' => 'Salto explosivo sobre plataforma elevada, máxima potencia de piernas',
                'instrucciones' => [
                    'introduccion' => 'El box jump desarrolla potencia explosiva de piernas, velocidad de contracción muscular y coordinación neuromuscular.',
                    'pasos' => [
                        'Párate frente a un cajón o plataforma estable a 50-70 cm de altura.',
                        'Colócate a unos 30 cm de distancia del cajón.',
                        'Balancea los brazos hacia atrás mientras flexionas ligeramente las rodillas.',
                        'Salta explosivamente llevando las rodillas hacia arriba.',
                        'Usa el impulso de los brazos hacia arriba para mayor altura.',
                        'Aterriza suavemente sobre el cajón con ambos pies a la vez.',
                        'Absorbe el impacto flexionando rodillas y caderas.',
                        'Párate completamente erguido sobre el cajón.',
                        'Baja con control, no saltes hacia abajo.'
                    ],
                    'consejos' => [
                        'Empieza con una altura donde aterrices cómodamente',
                        'La técnica es más importante que la altura del cajón',
                        'Asegúrate de que el cajón sea estable y no se deslice',
                        'Si fallas un salto, no insistas, descansa más',
                        'Para bajar, da un paso atrás, no saltes en reversa'
                    ]
                ],
                'imagen' => 'exercises/full-body/salto-cajon.png',
                'repeticiones' => 8,
                'series' => 4,
                'descanso' => 90
            ]
        ]
    ]
];
