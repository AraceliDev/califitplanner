<?php
return [
    [
        'type' => 'lower-body',
        'name' => 'Lower Body',
        'level' => 'principiante',
        'description' => 'Rutina de tren inferior para principiantes, enfocada en desarrollar fuerza y estabilidad en piernas y glúteos',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Sentadilla Clásica',
                'descripcion' => 'Ejercicio fundamental para fortalecer cuádriceps, glúteos y core',
                'instrucciones' => [
                    'introduccion' => 'La sentadilla es el ejercicio base para el desarrollo de fuerza en tren inferior.',
                    'pasos' => [
                        'Colócate de pie con los pies separados al ancho de hombros.',
                        'Baja como si fueras a sentarte en una silla, empujando las caderas hacia atrás.',
                        'Mantén el pecho erguido y el peso en los talones.',
                        'Baja hasta que los muslos estén paralelos al suelo.',
                        'Empuja con los talones para volver a la posición inicial.'
                    ],
                    'consejos' => [
                        'Las rodillas deben seguir la dirección de los pies',
                        'Mantén la espalda recta durante todo el movimiento'
                    ]
                ],
                // 'imagen' => 'exercises/lower-body/bodyweight-squats.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Zancada Estática',
                'descripcion' => 'Ejercicio unilateral para fortalecer piernas y mejorar el equilibrio',
                'instrucciones' => [
                    'introduccion' => 'Las zancadas estáticas trabajan cada pierna independientemente, mejorando la estabilidad.',
                    'pasos' => [
                        'Da un paso grande hacia adelante, manteniendo ambos pies plantados.',
                        'Baja el cuerpo flexionando ambas rodillas a 90 grados.',
                        'La rodilla trasera debe casi tocar el suelo.',
                        'Empuja con la pierna delantera para subir sin cambiar la posición de los pies.',
                        'Completa todas las repeticiones antes de cambiar de pierna.'
                    ],
                    'consejos' => [
                        'Mantén el torso erguido durante todo el movimiento',
                        'La rodilla delantera no debe sobrepasar la punta del pie'
                    ]
                ],
                // 'imagen' => 'exercises/lower-body/static-lunges.png',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Puente de Glúteo',
                'descripcion' => 'Ejercicio isométrico para activar y fortalecer glúteos e isquiotibiales',
                'instrucciones' => [
                    'introduccion' => 'El puente de glúteo es esencial para activar la cadena posterior y mejorar la postura.',
                    'pasos' => [
                        'Acuéstate boca arriba con las rodillas flexionadas y pies apoyados.',
                        'Coloca los brazos a los lados del cuerpo para mayor estabilidad.',
                        'Aprieta los glúteos y levanta las caderas del suelo.',
                        'Forma una línea recta desde las rodillas hasta los hombros.',
                        'Mantén la posición 2 segundos y baja controladamente.'
                    ],
                    'consejos' => [
                        'No arquees la espalda al subir, el movimiento viene de los glúteos',
                        'Presiona con los talones para mayor activación'
                    ]
                ],
                // 'imagen' => 'exercises/lower-body/glute-bridges.png',
                'repeticiones' => 15,
                'series' => 3,
                'descanso' => 45
            ],
            [
                'id' => 4,
                'nombre' => 'Sentadilla Sumo',
                'descripcion' => 'Variación de sentadilla con piernas más abiertas, enfoque en glúteos y aductores',
                'instrucciones' => [
                    'introduccion' => 'La sentadilla sumo trabaja más los glúteos y músculos internos del muslo.',
                    'pasos' => [
                        'Colócate con los pies más abiertos que el ancho de hombros.',
                        'Gira ligeramente las puntas de los pies hacia afuera.',
                        'Baja empujando las caderas hacia atrás y separando las rodillas.',
                        'Mantén el torso erguido y baja hasta donde te permita la flexibilidad.',
                        'Empuja con los talones para volver arriba, apretando los glúteos.'
                    ],
                    'consejos' => [
                        'Las rodillas deben seguir la dirección de los pies',
                        'Mantén el peso distribuido en toda la planta del pie'
                    ]
                ],
                // 'imagen' => 'exercises/lower-body/sumo-squats.png',
                'repeticiones' => 10,
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
