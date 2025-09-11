<?php
return [
    [
        'type' => 'push',
        'name' => 'Push Day',
        'level' => 'principiante',
        'description' => 'Empuja tu cuerpo, eleva tu potencial',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Wall Push-ups',
                'descripcion' => 'Flexiones contra la pared, perfectas para principiantes',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones de pared son la progresión más básica de push-ups.',
                    'pasos' => [
                        'Colócate de pie frente a una pared, aproximadamente a un brazo de distancia.',
                        'Apoya las palmas contra la pared a la altura del pecho.',
                        'Inclínate hacia la pared flexionando los codos.',
                        'Empuja para volver a la posición inicial.'
                    ],
                    'consejos' => ['Mantén el cuerpo recto como una tabla']
                ],
                'imagen' => 'exercises/push/pushupWall.jpg',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Push-ups en rodillas',
                'descripcion' => 'Flexiones modificadas apoyando las rodillas en el suelo',
                'instrucciones' => [
                    'introduccion' => 'Versión modificada de push-ups que reduce la carga corporal.',
                    'pasos' => [
                        'Apóyate en el suelo con manos y rodillas.',
                        'Cruza los pies por detrás para mayor estabilidad.',
                        'Baja el pecho hacia el suelo flexionando los codos.',
                        'Empuja hacia arriba manteniendo la línea recta del cuerpo.'
                    ]
                ],
                'imagen' => 'exercises/push/pushupsRodillas.jpg',
                'repeticiones' => 10,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Incline Push-ups',
                'descripcion' => 'Flexiones en superficie elevada que reducen la dificultad',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones inclinadas son una progresión intermedia entre wall push-ups y push-ups normales.',
                    'pasos' => [
                        'Busca una superficie elevada como un banco, silla o escalón.',
                        'Coloca las manos en el borde, separadas a la anchura de los hombros.',
                        'Mantén el cuerpo recto desde la cabeza hasta los talones.',
                        'Baja el pecho hacia la superficie flexionando los codos.',
                        'Empuja hacia arriba hasta extender completamente los brazos.'
                    ],
                    'consejos' => [
                        'Cuanto más alta la superficie, más fácil será el ejercicio',
                        'Mantén el abdomen contraído durante todo el movimiento'
                    ]
                ],
                'imagen' => 'exercises/push/pushIncline.jpg',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 4,
                'nombre' => 'Press de pecho cerrado',
                'descripcion' => 'Ejercicio con mancuernas tumbado en el suelo o en banca que trabaja principalmente la parte interna e inferior del pectoral',
                'instrucciones' => [
                    'introduccion' => 'Un press con mancuernas que, al mantener un agarre cerrado, activa con más intensidad el pecho interno y los tríceps.',
                    'pasos' => [
                        'Túmbate boca arriba en el suelo, con las rodillas flexionadas y los pies apoyados.',
                        'Sujeta una mancuerna en cada mano (4–6 kg recomendado para principiantes).',
                        'Coloca las mancuernas juntas sobre el pecho, con las palmas enfrentadas y los codos pegados al torso.',
                        'Empuja las mancuernas hacia arriba hasta extender los brazos completamente, manteniéndolas siempre juntas.',
                        'Desciende lentamente hasta que los brazos vuelvan a 90° o hasta que los codos toquen ligeramente el suelo.',
                        'Repite el movimiento manteniendo el control en todo momento.'
                    ],
                    'consejos' => [
                        'No separes las mancuernas durante la ejecución, mantenlas siempre juntas.',
                        'Evita arquear la espalda; el contacto con el suelo ayuda a proteger los hombros.',
                        'Exhala al subir las pesas e inhala al bajarlas.',
                        'Elige un peso que te permita una técnica correcta en todas las repeticiones.'
                    ]
                ],
                'imagen' => 'exercises/push/pushupWall.jpg',
                'repeticiones' => 10,
                'series' => 3,
                'descanso' => 90
            ]
        ]
    ]
];
