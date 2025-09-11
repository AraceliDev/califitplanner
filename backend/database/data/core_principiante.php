<?php
return [
    [
        'type' => 'core',
        'name' => 'Core Day',
        'level' => 'principiante',
        'description' => 'Fortalece tu núcleo, controla tu fuerza',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Mountain Climbers',
                'descripcion' => 'Ejercicio dinámico que combina cardio con fortalecimiento de core',
                'instrucciones' => [
                    'introduccion' => 'Los mountain climbers son excelentes para activar todo el core mientras mejoran la resistencia cardiovascular.',
                    'pasos' => [
                        'Adopta posición de plancha alta con brazos extendidos.',
                        'Lleva la rodilla derecha hacia el pecho manteniendo la plancha.',
                        'Vuelve la pierna derecha a la posición inicial.',
                        'Inmediatamente lleva la rodilla izquierda hacia el pecho.',
                        'Alterna las piernas de forma rápida pero controlada.'
                    ],
                    'consejos' => [
                        'Mantén las caderas estables, sin balancearlas',
                        'Respira de forma continua durante el ejercicio'
                    ]
                ],
                'imagen' => 'exercises/core/mountain-climbers.png',
                'repeticiones' => 20, // 10 por cada pierna
                'series' => 3,
                'descanso' => 45
            ],
            [
                'id' => 2,
                'nombre' => 'Plancha con Toque de Pie Alterno',
                'descripcion' => 'Plancha dinámica tocando los pies alternadamente para trabajar core y flexibilidad',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio combina la estabilidad de la plancha con rotación de tronco y flexibilidad.',
                    'pasos' => [
                        'Desde posición de plancha alta, lleva la mano derecha hacia el pie izquierdo.',
                        'Gira el tronco ligeramente para alcanzar el pie.',
                        'Vuelve a la posición de plancha.',
                        'Alterna llevando la mano izquierda hacia el pie derecho.',
                        'Mantén las caderas lo más estables posible.'
                    ],
                    'consejos' => [
                        'No fuerces el toque si no llegas, mejorará con la práctica',
                        'Mantén el core activo para evitar arquear la espalda'
                    ]
                ],
                'imagen' => 'exercises/core/plank-toe-touches.png',
                'repeticiones' => 12, // 6 por cada lado
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Hollow Body Hold',
                'descripcion' => 'Ejercicio isométrico que fortalece profundamente el core anterior',
                'instrucciones' => [
                    'introduccion' => 'El hollow body es la base de muchos movimientos avanzados de gimnasia y calistenia.',
                    'pasos' => [
                        'Acuéstate boca arriba con brazos extendidos sobre la cabeza.',
                        'Presiona la zona lumbar contra el suelo.',
                        'Levanta simultáneamente hombros y piernas del suelo.',
                        'Forma una posición de "banana" o "C" con tu cuerpo.',
                        'Mantén la posición respirando de forma controlada.'
                    ],
                    'consejos' => [
                        'Si es muy difícil, flexiona las rodillas o cruza los brazos en el pecho',
                        'La zona lumbar debe mantenerse pegada al suelo'
                    ]
                ],
                'imagen' => 'exercises/core/hollow-body-hold.png',
                'tiempo' => '15-20 segundos',
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 4,
                'nombre' => 'Crunch Unilateral en Plancha',
                'descripcion' => 'Combinación de plancha con crunch lateral para trabajar oblicuos',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio desafía la estabilidad mientras trabaja intensamente los oblicuos.',
                    'pasos' => [
                        'Adopta posición de plancha alta con brazos extendidos.',
                        'Lleva la rodilla derecha hacia el codo derecho, contrayendo el oblicuo.',
                        'Mantén la contracción por un segundo.',
                        'Vuelve la pierna a la posición de plancha.',
                        'Realiza todas las repeticiones de un lado antes de cambiar.'
                    ],
                    'consejos' => [
                        'Evita rotar demasiado las caderas',
                        'Concéntrate en la contracción del oblicuo al llevar rodilla al codo'
                    ]
                ],
                'imagen' => 'exercises/core/unilateral-plank-crunch.png',
                'repeticiones' => 8, // Por cada lado
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
