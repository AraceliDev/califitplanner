<?php
return [
    [
        'type' => 'full-body',
        'name' => 'Full Body',
        'level' => 'principiante',
        'description' => 'Rutina de cuerpo completo para principiantes que combina ejercicios de piernas, empuje, tracción y core',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Sentadilla Básica',
                'descripcion' => 'Ejercicio fundamental para todo el tren inferior',
                'instrucciones' => [
                    'introduccion' => 'La sentadilla es la base de cualquier rutina full body, trabajando los músculos más grandes del cuerpo.',
                    'pasos' => [
                        'Colócate de pie con los pies al ancho de hombros.',
                        'Baja como si fueras a sentarte, empujando las caderas hacia atrás.',
                        'Mantén el pecho erguido y el peso en los talones.',
                        'Baja hasta que los muslos estén paralelos al suelo.',
                        'Empuja con los talones para volver arriba.'
                    ],
                    'consejos' => [
                        'Mantén las rodillas alineadas con los pies',
                        'Respira profundo al bajar y exhala al subir'
                    ]
                ],
                // 'imagen' => 'exercises/full-body/bodyweight-squats.png',
                'repeticiones' => 10,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Flexiones de Rodillas',
                'descripcion' => 'Versión modificada de flexiones para desarrollar fuerza de empuje',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones de rodillas son la progresión perfecta hacia las flexiones completas.',
                    'pasos' => [
                        'Apóyate en el suelo con manos y rodillas.',
                        'Coloca las manos ligeramente más anchas que los hombros.',
                        'Mantén una línea recta desde las rodillas hasta la cabeza.',
                        'Baja el pecho hacia el suelo flexionando los codos.',
                        'Empuja hacia arriba hasta extender completamente los brazos.'
                    ],
                    'consejos' => [
                        'Mantén el core activo durante todo el movimiento',
                        'No dejes caer las caderas'
                    ]
                ],
                // 'imagen' => 'exercises/full-body/knee-push-ups.png',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Dominadas Negativas Asistidas',
                'descripcion' => 'Fase excéntrica de dominadas con banda para desarrollar fuerza de tracción',
                'instrucciones' => [
                    'introduccion' => 'Las negativas asistidas enseñan el patrón de movimiento y desarrollan fuerza excéntrica.',
                    'pasos' => [
                        'Coloca una banda elástica fuerte en la barra de dominadas.',
                        'Con ayuda de la banda, llega a la posición superior (mentón sobre la barra).',
                        'Desde arriba, baja muy lentamente contando 3-5 segundos.',
                        'Controla el descenso usando la fuerza de brazos y espalda.',
                        'Al llegar abajo, usa la banda para subir de nuevo.'
                    ],
                    'consejos' => [
                        'La fase de bajada es lo más importante',
                        'Resiste la gravedad durante todo el descenso'
                    ]
                ],
                // 'imagen' => 'exercises/full-body/negative-pull-ups.png',
                'repeticiones' => 5,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 4,
                'nombre' => 'Remo Invertido',
                'descripcion' => 'Ejercicio horizontal de tracción usando el peso corporal',
                'instrucciones' => [
                    'introduccion' => 'El remo invertido complementa las dominadas trabajando la espalda desde un ángulo diferente.',
                    'pasos' => [
                        'Colócate debajo de una barra horizontal a la altura del pecho.',
                        'Agarra la barra con las palmas hacia adelante.',
                        'Mantén el cuerpo recto desde los talones hasta la cabeza.',
                        'Tira del cuerpo hacia arriba hasta que el pecho toque la barra.',
                        'Baja controladamente hasta brazos extendidos.'
                    ],
                    'consejos' => [
                        'Cuanto más vertical esté tu cuerpo, más fácil será',
                        'Aprieta los omóplatos al subir'
                    ]
                ],
                // 'imagen' => 'exercises/full-body/inverted-rows.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
