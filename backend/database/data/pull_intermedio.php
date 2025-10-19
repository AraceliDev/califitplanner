<?php
return [
    [
        'type' => 'pull',
        'name' => 'Pull Day',
        'level' => 'intermedio',
        'description' => 'Intensifica tu fuerza de tracción con ejercicios progresivos',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominadas Explosivas',
                'descripcion' => 'Dominadas con fase concéntrica explosiva para desarrollar potencia',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas explosivas desarrollan velocidad y potencia en el movimiento de tracción, preparándote para ejercicios más avanzados.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono (palmas hacia adelante).',
                        'Manos separadas ligeramente más que el ancho de hombros.',
                        'Desde la posición colgada, tira explosivamente hacia arriba.',
                        'Genera suficiente velocidad para que tu mentón sobrepase claramente la barra.',
                        'En el punto máximo, el cuerpo debe sentirse "liviano" por el impulso.',
                        'Baja de forma controlada hasta brazos completamente extendidos.',
                        'Pausa brevemente abajo antes del siguiente impulso.',
                        'Mantén el core activo para evitar balanceo excesivo.'
                    ],
                    'consejos' => [
                        'Si puedes, intenta que el pecho llegue a la altura de la barra',
                        'No uses kipping o balanceo, la explosividad viene de los músculos',
                        'Descansa bien entre repeticiones si es necesario',
                        'Este ejercicio prepara para el muscle up'
                    ]
                ],
                'imagen' => 'exercises/pull/dominadas-explosivas.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 2,
                'nombre' => 'Dominadas con Agarre Ancho',
                'descripcion' => 'Dominadas con manos muy separadas para máxima activación de dorsales',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas con agarre ancho enfatizan el trabajo del dorsal ancho y la espalda superior, siendo más difíciles que las de agarre normal.',
                    'pasos' => [
                        'Agarra la barra con las manos mucho más separadas que el ancho de hombros.',
                        'Las palmas miran hacia adelante (agarre prono).',
                        'Cuelga con los brazos completamente extendidos.',
                        'Tira hacia arriba enfocándote en llevar los codos hacia abajo y atrás.',
                        'Sube hasta que tu mentón supere la barra o el pecho la toque.',
                        'Saca el pecho y junta las escápulas en la parte superior.',
                        'Baja de forma controlada hasta brazos completamente extendidos.',
                        'Mantén el core activo para evitar balanceo.'
                    ],
                    'consejos' => [
                        'El agarre ancho es más difícil que el agarre normal',
                        'Enfócate en "tirar con los codos" no con las manos',
                        'Los dorsales trabajarán más intensamente',
                        'Si es muy difícil, reduce ligeramente la anchura del agarre'
                    ]
                ],
                'imagen' => 'exercises/pull/dominadas-agarre-ancho.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 3,
                'nombre' => 'Curl Bíceps en Plancha',
                'descripcion' => 'Hold isométrico de plancha mientras se sostiene peso para trabajar core y bíceps',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio combina la estabilidad de core de la plancha con tensión isométrica de bíceps, creando un desafío único.',
                    'pasos' => [
                        'Adopta posición de plancha alta con los brazos extendidos.',
                        'Coloca una mancuerna ligera (2-5 kg) al alcance de una mano.',
                        'Mantén el core completamente activo y las caderas estables.',
                        'Con una mano, toma la mancuerna y flexiona el codo.',
                        'Mantén el bíceps contraído con el peso en posición de curl.',
                        'El brazo de apoyo permanece recto soportando el peso.',
                        'Aguanta la posición durante el tiempo establecido.',
                        'Evita rotar las caderas o perder la alineación de la plancha.',
                        'Alterna el brazo después del tiempo o serie.'
                    ],
                    'consejos' => [
                        'Empieza con poco peso, el desafío está en mantener la plancha',
                        'Si pierdes la forma de plancha, es mejor reducir el peso',
                        'Mantén la mirada hacia el suelo para alineación cervical',
                        'Respira de forma controlada, no aguantes la respiración'
                    ]
                ],
                'imagen' => 'exercises/pull/curl-biceps-plancha.png',
                'tiempo' => '45 segundos',
                'series' => 3,
                'descanso' => 75
            ],
            [
                'id' => 4,
                'nombre' => 'Front Lever Asistido (Una Pierna)',
                'descripcion' => 'Progresión de front lever con una pierna extendida y otra flexionada',
                'instrucciones' => [
                    'introduccion' => 'Esta es una progresión intermedia hacia el front lever completo, reduciendo la dificultad al flexionar una pierna.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono, manos al ancho de hombros.',
                        'Activa fuertemente los dorsales tirando de la barra hacia abajo.',
                        'Eleva las caderas hasta que tu cuerpo quede horizontal.',
                        'Extiende una pierna completamente mientras mantienes la otra flexionada.',
                        'La pierna extendida debe estar alineada con el torso.',
                        'Mantén los brazos completamente rectos.',
                        'El cuerpo debe formar una línea desde la cabeza hasta el pie extendido.',
                        'Mantén la posición con tensión total en dorsales y core.',
                        'Alterna la pierna extendida entre series.'
                    ],
                    'consejos' => [
                        'Progresión: tuck → advanced tuck → one leg → straddle → full',
                        'Imagina que empujas la barra hacia tus pies',
                        'Los dorsales hacen la mayor parte del trabajo',
                        'Mantén la depresión escapular (hombros hacia abajo)',
                        'Si no puedes mantenerlo, vuelve a tuck front lever'
                    ]
                ],
                'imagen' => 'exercises/pull/front-lever-asistido.png',
                'tiempo' => '10-15 segundos',
                'series' => 3,
                'descanso' => 90
            ]
        ]
    ]
];
