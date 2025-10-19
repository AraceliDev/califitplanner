<?php
return [
    [
        'type' => 'upper-body',
        'name' => 'Upper Body',
        'level' => 'intermedio',
        'description' => 'Desarrolla fuerza superior con movimientos técnicos avanzados',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominada Isométrica',
                'descripcion' => 'Hold estático en diferentes puntos de la dominada para máxima tensión',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas isométricas desarrollan fuerza extrema en puntos específicos del movimiento, superando mesetas y mejorando la fuerza general.',
                    'pasos' => [
                        'Cuelga de la barra con tu agarre preferido (prono o supino).',
                        'Realiza una dominada hasta un punto específico del rango.',
                        'Mantén esa posición completamente estática.',
                        'Posiciones clave: 90° (punto medio), mentón sobre barra, o punto débil.',
                        'Mantén todo el cuerpo en tensión durante el hold.',
                        'Los hombros permanecen activos y deprimidos.',
                        'Respira de forma controlada sin perder la posición.',
                        'Puedes trabajar diferentes puntos en cada serie.',
                        'Baja controladamente cuando se acabe el tiempo.'
                    ],
                    'consejos' => [
                        'El punto de 90° es el más difícil para la mayoría',
                        'Empieza con 10-15 segundos y progresa',
                        'Alterna entre diferentes posiciones en cada entrenamiento',
                        'Perfecto para romper estancamientos en dominadas',
                        'Si tiemblas mucho, es señal de que estás trabajando duro'
                    ]
                ],
                'imagen' => 'exercises/upper-body/dominada-isometrica.png',
                'tiempo' => '20-30 segundos',
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 2,
                'nombre' => 'Dominada Comando',
                'descripcion' => 'Dominadas con agarre paralelo alternando hacia cada lado',
                'instrucciones' => [
                    'introduccion' => 'La dominada comando o commando pull-up trabaja de forma única los dorsales y requiere control rotacional del core.',
                    'pasos' => [
                        'Agarra la barra con un agarre paralelo (manos una delante de la otra).',
                        'Cuelga con los brazos completamente extendidos.',
                        'Tira hacia arriba llevando la cabeza hacia un lado de la barra.',
                        'Pasa la cabeza por un lado de las manos.',
                        'Sube hasta que el hombro toque la barra o esté muy cerca.',
                        'Baja controladamente hasta brazos extendidos.',
                        'En la siguiente repetición, pasa la cabeza por el otro lado.',
                        'Alterna los lados en cada repetición.',
                        'Mantén el cuerpo lo más vertical posible.'
                    ],
                    'consejos' => [
                        'Evita balancearte excesivamente',
                        'El core debe trabajar duro para estabilizar la rotación',
                        'Puedes hacer todas las reps de un lado primero si prefieres',
                        'Es más difícil de lo que parece, requiere buena técnica'
                    ]
                ],
                'imagen' => 'exercises/upper-body/dominada-comando.png',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 3,
                'nombre' => 'Korean Dips',
                'descripcion' => 'Fondos con agarre invertido detrás de la espalda, extrema activación de tríceps',
                'instrucciones' => [
                    'introduccion' => 'Los Korean dips son una variación avanzada que coloca los brazos en una posición única, trabajando tríceps, hombros y pecho de forma intensa.',
                    'pasos' => [
                        'Colócate en paralelas mirando hacia afuera.',
                        'Gira las manos hacia atrás (agarre inverso) con los dedos apuntando hacia ti.',
                        'Soporta tu peso con los brazos extendidos.',
                        'Las manos quedan detrás de tu espalda baja.',
                        'Inclina ligeramente el torso hacia adelante.',
                        'Baja lentamente flexionando los codos.',
                        'Desciende hasta donde te permita tu movilidad de hombros.',
                        'Empuja hacia arriba hasta brazos completamente extendidos.',
                        'Mantén el control total durante todo el movimiento.'
                    ],
                    'consejos' => [
                        'CUIDADO: Requiere buena movilidad de hombros',
                        'Empieza con rango parcial y aumenta progresivamente',
                        'Si sientes dolor en hombros, detente inmediatamente',
                        'Es normal que el rango sea limitado al principio',
                        'Los tríceps trabajarán de forma muy intensa'
                    ]
                ],
                'imagen' => 'exercises/upper-body/korean-dips.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 4,
                'nombre' => 'Bar Roll',
                'descripcion' => 'Rodar sobre la barra llevando el cuerpo de abajo hacia arriba',
                'instrucciones' => [
                    'introduccion' => 'El bar roll es un movimiento gimnástico que combina tracción, rotación y control corporal, siendo una transición espectacular.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono.',
                        'Realiza una dominada explosiva llevando el pecho a la barra.',
                        'En el punto máximo, lleva las caderas hacia la barra.',
                        'Continúa el movimiento rotacional llevando las piernas sobre la barra.',
                        'Usa el impulso para rodar por encima de la barra.',
                        'Termina en posición de soporte sobre la barra con brazos extendidos.',
                        'El movimiento debe ser fluido y continuo.',
                        'Para bajar, controla el movimiento a la inversa.'
                    ],
                    'consejos' => [
                        'Requiere buena fuerza de dominadas y core',
                        'Practica primero la fase de tracción con impulso',
                        'El timing es crucial, es más técnico que fuerte',
                        'Usa protección en la zona abdominal las primeras veces',
                        'Asegúrate de tener buena altura de barra'
                    ]
                ],
                'imagen' => 'exercises/upper-body/bar-roll.png',
                'repeticiones' => 4,
                'series' => 3,
                'descanso' => 120
            ]
        ]
    ]
];
