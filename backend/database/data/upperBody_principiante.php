<?php
return [
    [
        'type' => 'upper-body',
        'name' => 'Upper Body',
        'level' => 'principiante',
        'description' => 'Rutina completa de tren superior para principiantes, combinando movimientos de empuje y tracción',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominada Supina Asistida',
                'descripcion' => 'Dominadas con agarre supino y banda elástica, enfoque en bíceps y dorsal',
                'instrucciones' => [
                    'introduccion' => 'La dominada supina con asistencia desarrolla fuerza en bíceps y espalda con agarre más cómodo.',
                    'pasos' => [
                        'Coloca una banda elástica en la barra de dominadas.',
                        'Agarra la barra con las palmas mirando hacia ti, manos más juntas que el ancho de hombros.',
                        'Introduce los pies o rodillas en la banda para asistencia.',
                        'Tira hacia arriba llevando el mentón por encima de la barra.',
                        'Baja controladamente hasta brazos extendidos.'
                    ],
                    'consejos' => [
                        'El agarre supino es más fácil para principiantes',
                        'Mantén el pecho hacia afuera durante el movimiento'
                    ]
                ],
                // 'imagen' => 'exercises/upper-body/chin-ups-assisted.png',
                'repeticiones' => 5,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 2,
                'nombre' => 'Flexiones con Elevación',
                'descripcion' => 'Flexiones con los pies elevados en una superficie para mayor dificultad',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones con pies elevados aumentan la carga en la parte superior del cuerpo.',
                    'pasos' => [
                        'Coloca los pies en un banco, silla o superficie estable de 20-30cm.',
                        'Adopta posición de flexión con manos en el suelo.',
                        'Mantén el cuerpo recto desde cabeza hasta pies.',
                        'Baja el pecho hacia el suelo flexionando los codos.',
                        'Empuja hacia arriba hasta extender completamente los brazos.'
                    ],
                    'consejos' => [
                        'Mantén el core activo para evitar arquear la espalda',
                        'Si es muy difícil, usa una superficie más baja'
                    ]
                ],
                // 'imagen' => 'exercises/upper-body/elevated-push-ups.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Plancha en Antebrazos',
                'descripcion' => 'Posición isométrica sobre antebrazos para fortalecer core y estabilidad',
                'instrucciones' => [
                    'introduccion' => 'La plancha en antebrazos es fundamental para desarrollar fuerza de core y estabilidad.',
                    'pasos' => [
                        'Apóyate sobre los antebrazos y las puntas de los pies.',
                        'Mantén los codos directamente bajo los hombros.',
                        'Forma una línea recta desde la cabeza hasta los talones.',
                        'Contrae abdomen y glúteos durante toda la posición.',
                        'Respira normalmente mientras mantienes la posición.'
                    ],
                    'consejos' => [
                        'No dejes caer las caderas ni las levantes demasiado',
                        'Mira un punto fijo en el suelo para mantener el cuello neutro'
                    ]
                ],
                // 'imagen' => 'exercises/upper-body/forearm-plank.png',
                'tiempo' => '20-30 segundos',
                'series' => 3,
                'descanso' => 45
            ],
            [
                'id' => 4,
                'nombre' => 'Pike Push-ups',
                'descripcion' => 'Flexiones en posición de V invertida para trabajar hombros y tríceps',
                'instrucciones' => [
                    'introduccion' => 'Los pike push-ups son una progresión hacia las flexiones verticales (handstand push-ups).',
                    'pasos' => [
                        'Adopta posición de flexión normal y camina con los pies hacia las manos.',
                        'Forma una V invertida con tu cuerpo, caderas hacia arriba.',
                        'Mantén las piernas lo más rectas posible.',
                        'Baja la cabeza hacia el suelo flexionando los brazos.',
                        'Empuja hacia arriba volviendo a la posición inicial.'
                    ],
                    'consejos' => [
                        'Cuanto más camines los pies hacia las manos, más difícil será',
                        'Mantén el peso principalmente en las manos'
                    ]
                ],
                // 'imagen' => 'exercises/upper-body/pike-push-ups.png',
                'repeticiones' => 5,
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
