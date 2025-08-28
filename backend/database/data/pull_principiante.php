<?php
return [
    [
        'type' => 'pull',
        'name' => 'Pull Day',
        'level' => 'principiante',
        'description' => 'Rutina básica de tracción para principiantes enfocada en desarrollar fuerza de espalda y bíceps',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominada Asistida con Banda',
                'descripcion' => 'Dominadas con ayuda de banda elástica para reducir el peso corporal',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas asistidas son la mejor progresión hacia dominadas completas.',
                    'pasos' => [
                        'Coloca una banda elástica de alta resistencia en la barra de dominadas.',
                        'Introduce los pies o rodillas en la banda para recibir asistencia.',
                        'Agarra la barra con las palmas mirando hacia adelante (agarre prono).',
                        'Desde colgado, tira hacia arriba llevando el pecho hacia la barra.',
                        'Mantén la posición superior un segundo y baja controladamente.'
                    ],
                    'consejos' => [
                        'Mantén los hombros hacia abajo y atrás durante todo el movimiento',
                        'Evita balancearte o usar impulso'
                    ]
                ],
                // 'imagen' => 'exercises/pull/assisted-pull-ups.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 2,
                'nombre' => 'Remo Invertido (Australian Pull-ups)',
                'descripcion' => 'Remo horizontal usando el peso corporal, excelente para principiantes',
                'instrucciones' => [
                    'introduccion' => 'El remo invertido es una progresión perfecta hacia las dominadas.',
                    'pasos' => [
                        'Colócate debajo de una barra horizontal a la altura del pecho.',
                        'Agarra la barra con las palmas hacia adelante, brazos extendidos.',
                        'Mantén el cuerpo recto desde los talones hasta la cabeza.',
                        'Tira del cuerpo hacia arriba hasta que el pecho toque la barra.',
                        'Baja controladamente hasta la posición inicial.'
                    ],
                    'consejos' => [
                        'Cuanto más vertical esté tu cuerpo, más fácil será el ejercicio',
                        'Mantén el core activo durante todo el movimiento'
                    ]
                ],
                // 'imagen' => 'exercises/pull/inverted-rows.png',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Dead Hang (Colgarse)',
                'descripcion' => 'Ejercicio isométrico para fortalecer el agarre y los antebrazos',
                'instrucciones' => [
                    'introduccion' => 'El dead hang desarrolla la fuerza de agarre necesaria para dominadas.',
                    'pasos' => [
                        'Agarra la barra de dominadas con ambas manos.',
                        'Cuélgate con los brazos completamente extendidos.',
                        'Mantén los hombros activos (no completamente relajados).',
                        'Permanece colgado el mayor tiempo posible.',
                        'Cuando no puedas más, baja controladamente.'
                    ],
                    'consejos' => [
                        'Respira normalmente durante el ejercicio',
                        'Progresa aumentando gradualmente el tiempo'
                    ]
                ],
                // 'imagen' => 'exercises/pull/dead-hang.png',
                'tiempo' => '15-30 segundos',
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 4,
                'nombre' => 'Scapular Pull-ups',
                'descripcion' => 'Ejercicio de activación de escápulas colgado de la barra',
                'instrucciones' => [
                    'introduccion' => 'Los scapular pull-ups enseñan el movimiento inicial de las dominadas y fortalecen los músculos de la espalda.',
                    'pasos' => [
                        'Cuélgate de la barra con los brazos completamente extendidos.',
                        'Sin flexionar los brazos, eleva el cuerpo usando solo el movimiento de las escápulas.',
                        'Junta las escápulas hacia abajo y hacia atrás (como si quisieras meter los omóplatos en los bolsillos traseros).',
                        'Mantén la posición superior por 1-2 segundos.',
                        'Relaja las escápulas para volver a la posición inicial, manteniendo siempre el agarre.'
                    ],
                    'consejos' => [
                        'El movimiento es pequeño pero muy importante para el desarrollo de las dominadas',
                        'Mantén los brazos rectos durante todo el ejercicio',
                        'Imagina que estás "empujando" la barra hacia abajo'
                    ]
                ],
                // 'imagen' => 'exercises/pull/scapular-pull-ups.png',
                'repeticiones' => 10,
                'series' => 3,
                'descanso' => 45
            ]
        ]
    ]
];
