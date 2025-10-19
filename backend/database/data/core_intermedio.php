<?php
return [
    [
        'type' => 'core',
        'name' => 'Core Day',
        'level' => 'intermedio',
        'description' => 'Fortalece tu núcleo con ejercicios de dificultad intermedia',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Elevación de Piernas sobre Dumbel',
                'descripcion' => 'Elevación de piernas con apoyo en mancuerna para mayor activación del core inferior',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio intensifica el trabajo del core inferior al añadir un punto de apoyo elevado que requiere mayor control.',
                    'pasos' => [
                        'Coloca una mancuerna o pesa en el suelo de forma horizontal.',
                        'Acuéstate boca arriba con los brazos extendidos coloca la mancuerna entre tus dos pies.',
                        'Mantén las piernas juntas y extendidas.',
                        'Eleva las piernas hasta formar un ángulo de 90° con el torso.',
                        'Baja las piernas de forma controlada sin que toquen el suelo.',
                        'Repite el movimiento con los pies juntos pasando de un lado al otro de la mancuerna.'
                    ],
                    'consejos' => [
                        'Si sientes tensión en la zona lumbar, flexiona ligeramente las rodillas',
                        'Controla la bajada, evita dejar caer las piernas bruscamente'
                    ]
                ],
                'imagen' => 'exercises/core/elevacion-piernas-dumbel.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Zancada en Plancha',
                'descripcion' => 'Transición dinámica de plancha a zancada para trabajar core y movilidad',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio combina la estabilidad de la plancha con el movimiento explosivo de la zancada, trabajando core y piernas simultáneamente.',
                    'pasos' => [
                        'Comienza en posición de plancha alta con brazos extendidos.',
                        'Lleva el pie derecho hacia adelante, colocándolo al lado de tu mano derecha.',
                        'Mantén la cadera baja y el core activo durante la zancada.',
                        'Vuelve el pie a la posición de plancha de forma controlada.',
                        'Alterna con la pierna izquierda.',
                        'Mantén la espalda recta durante todo el movimiento.'
                    ],
                    'consejos' => [
                        'No eleves demasiado las caderas al llevar la pierna adelante',
                        'Mantén los hombros sobre las muñecas para mayor estabilidad',
                        'Respira de forma continua, no contengas el aire'
                    ]
                ],
                'imagen' => 'exercises/core/zancada-plancha.png',
                'repeticiones' => 8/8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Russian Twist',
                'descripcion' => 'Rotación de tronco sentado para fortalecer oblicuos y core rotacional',
                'instrucciones' => [
                    'introduccion' => 'El russian twist es uno de los ejercicios más efectivos para desarrollar fuerza rotacional y trabajar los oblicuos.',
                    'pasos' => [
                        'Siéntate en el suelo con las rodillas flexionadas y los pies apoyados.',
                        'Inclina ligeramente el torso hacia atrás manteniendo la espalda recta.',
                        'Eleva los pies del suelo para mayor dificultad (o mantenlos apoyados si empiezas).',
                        'Junta las manos frente al pecho o sostén un peso.',
                        'Rota el torso hacia la derecha llevando las manos hacia ese lado.',
                        'Vuelve al centro y rota hacia la izquierda.',
                        'Continúa alternando de forma controlada.'
                    ],
                    'consejos' => [
                        'Mantén el pecho elevado, no te encorves',
                        'La rotación debe venir del torso, no solo de los brazos',
                        'Para añadir intensidad, sostén una mancuerna o peso'
                    ]
                ],
                'imagen' => 'exercises/core/russian-twist.png',
                'repeticiones' => 20, 
                'series' => 3,
                'descanso' => 45
            ],
            [
                'id' => 4,
                'nombre' => 'Crunches Elevando Piernas',
                'descripcion' => 'Crunch tradicional con piernas elevadas para mayor activación del core',
                'instrucciones' => [
                    'introduccion' => 'Esta variación del crunch elimina la ayuda de las piernas apoyadas, intensificando el trabajo abdominal.',
                    'pasos' => [
                        'Acuéstate boca arriba con las piernas elevadas y rodillas flexionadas a 90°.',
                        'Los muslos deben estar perpendiculares al suelo y las pantorrillas paralelas.',
                        'Coloca las manos detrás de la cabeza o cruzadas en el pecho.',
                        'Eleva los hombros del suelo contrayendo el abdomen.',
                        'Mantén las piernas estables en su posición.',
                        'Baja de forma controlada sin apoyar completamente los hombros.',
                        'Mantén la zona lumbar presionada contra el suelo.'
                    ],
                    'consejos' => [
                        'No tires del cuello con las manos, la fuerza viene del abdomen',
                        'Exhala al subir, inhala al bajar',
                        'Concéntrate en la contracción abdominal, no en cuánto subes'
                    ]
                ],
                'imagen' => 'exercises/core/crunches-piernas-elevadas.png',
                'repeticiones' => 15,
                'series' => 3,
                'descanso' => 45
            ]
        ]
    ]
];
