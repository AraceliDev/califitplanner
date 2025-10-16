<?php
return [
    [
        'type' => 'push',
        'name' => 'Push Day',
        'level' => 'intermedio',
        'description' => 'Desarrolla fuerza de empuje con ejercicios progresivos',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Flexiones Clásicas',
                'descripcion' => 'Push-ups estándar con técnica perfecta para máximo desarrollo',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones clásicas son la base de la fuerza de empuje horizontal y deben dominarse con técnica impecable.',
                    'pasos' => [
                        'Colócate en posición de plancha con las manos ligeramente más anchas que los hombros.',
                        'Los pies pueden estar juntos o separados al ancho de caderas.',
                        'Mantén el cuerpo completamente recto desde la cabeza hasta los talones.',
                        'Baja el pecho hacia el suelo flexionando los codos.',
                        'Los codos deben formar un ángulo de 45° con el cuerpo.',
                        'Desciende hasta que el pecho esté a 2-3 cm del suelo.',
                        'Empuja explosivamente hacia arriba hasta brazos completamente extendidos.',
                        'Mantén el core activo durante todo el movimiento para evitar arquear la espalda.'
                    ],
                    'consejos' => [
                        'No dejes caer las caderas ni las eleves demasiado',
                        'Mantén la mirada ligeramente hacia adelante, no hacia abajo',
                        'Exhala al subir, inhala al bajar',
                        'Si puedes hacer más de 20, añade peso o prueba variaciones más difíciles'
                    ]
                ],
                'imagen' => 'exercises/push/flexiones-clasicas.png',
                'repeticiones' => 15,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Fondos Isométricos',
                'descripcion' => 'Hold estático en la posición baja de los fondos en paralelas',
                'instrucciones' => [
                    'introduccion' => 'Los fondos isométricos desarrollan fuerza excepcional en la fase más difícil del movimiento, mejorando significativamente los fondos dinámicos.',
                    'pasos' => [
                        'Colócate en paralelas o entre dos superficies estables y elevadas.',
                        'Soporta tu peso con los brazos extendidos.',
                        'Baja lentamente hasta que los codos formen un ángulo de 90 grados.',
                        'Los brazos deben estar pegados al cuerpo, no muy abiertos.',
                        'Mantén el torso ligeramente inclinado hacia adelante.',
                        'Las piernas pueden estar cruzadas por detrás.',
                        'Mantén esta posición con todo el cuerpo en tensión.',
                        'Respira de forma controlada sin perder la posición.',
                        'El pecho debe estar entre las manos, no por detrás.'
                    ],
                    'consejos' => [
                        'Si 30 segundos es muy difícil, empieza con 15-20 segundos',
                        'Mantén los hombros deprimidos (hacia abajo), no elevados',
                        'No encorves los hombros hacia adelante',
                        'Este ejercicio es muy exigente para los tríceps y pecho'
                    ]
                ],
                'imagen' => 'exercises/push/fondos-isometricos.png',
                'tiempo' => '30 segundos',
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 3,
                'nombre' => 'Pike Hold',
                'descripcion' => 'Posición en V invertida para fortalecer hombros y preparar el handstand',
                'instrucciones' => [
                    'introduccion' => 'El pike hold es una progresión fundamental hacia el handstand, desarrollando fuerza de hombros y familiarización con la inversión.',
                    'pasos' => [
                        'Colócate en posición de V invertida con las manos en el suelo.',
                        'Los pies están apoyados, las piernas lo más rectas posible.',
                        'Las caderas deben estar elevadas, formando un ángulo agudo.',
                        'Los brazos permanecen completamente extendidos.',
                        'El peso debe estar principalmente en las manos.',
                        'La mirada va hacia los pies o entre las piernas.',
                        'Mantén los hombros activos, empujando lejos del suelo.',
                        'Mantén esta posición con tensión en hombros y core.',
                        'Respira profundamente durante el hold.'
                    ],
                    'consejos' => [
                        'Para más dificultad, eleva los pies en una superficie',
                        'Cuanto más vertical estés, más se parece al handstand',
                        'Mantén los dedos bien extendidos para mayor estabilidad',
                        'No bloquees los codos de forma hiperextendida'
                    ]
                ],
                'imagen' => 'exercises/push/pike-hold.png',
                'tiempo' => '30-45 segundos',
                'series' => 3,
                'descanso' => 75
            ],
            [
                'id' => 4,
                'nombre' => 'Extensión de Tríceps en Banco',
                'descripcion' => 'Fondos entre bancos para aislar y fortalecer tríceps',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio trabaja intensamente los tríceps con el peso corporal, siendo una progresión hacia los fondos en paralelas.',
                    'pasos' => [
                        'Siéntate en el borde de un banco con las manos agarrando el borde a los lados.',
                        'Extiende las piernas hacia adelante con los talones apoyados.',
                        'Desliza el cuerpo fuera del banco manteniendo las manos en el borde.',
                        'Baja el cuerpo flexionando los codos hasta formar un ángulo de 90°.',
                        'Los codos deben ir hacia atrás, no hacia los lados.',
                        'Mantén la espalda cerca del banco durante el descenso.',
                        'Empuja hacia arriba hasta extender completamente los brazos.',
                        'Mantén el core activo para evitar arquear excesivamente la espalda.'
                    ],
                    'consejos' => [
                        'Para más dificultad, eleva los pies en otra superficie',
                        'Puedes añadir peso colocando un disco sobre las piernas',
                        'No bajes demasiado si sientes molestias en los hombros',
                        'Flexionar las rodillas reduce la dificultad'
                    ]
                ],
                'imagen' => 'exercises/push/extension-triceps-banco.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
