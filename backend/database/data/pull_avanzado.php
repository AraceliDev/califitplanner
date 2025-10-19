<?php
return [
    [
        'type' => 'pull',
        'name' => 'Pull Day',
        'level' => 'avanzado',
        'description' => 'Domina la tracción con los ejercicios más exigentes',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominadas a una Mano',
                'descripcion' => 'Dominada completa usando solo un brazo, máxima fuerza unilateral',
                'instrucciones' => [
                    'introduccion' => 'La dominada a una mano es uno de los ejercicios de tracción más difíciles que existen, requiriendo fuerza excepcional y técnica refinada.',
                    'pasos' => [
                        'Cuelga de la barra con una mano en agarre prono o supino.',
                        'El brazo libre puede extenderse lateralmente o agarrar la muñeca del brazo activo.',
                        'Mantén el cuerpo lo más alineado posible, evitando rotación excesiva.',
                        'Tira hacia arriba concentrando toda la fuerza en el brazo de trabajo.',
                        'Es normal que el cuerpo rote ligeramente hacia el lado que trabaja.',
                        'Sube hasta que tu mentón supere claramente la barra.',
                        'Mantén un segundo en la parte superior.',
                        'Baja de forma muy controlada hasta brazo completamente extendido.',
                        'Completa todas las repeticiones antes de cambiar de brazo.'
                    ],
                    'consejos' => [
                        'Progresión: archer pull-ups → assisted one arm → full one arm',
                        'Practica negativas (solo la bajada) primero',
                        'El agarre supino suele ser más fácil que el prono',
                        'Usa agarre neutro si está disponible para mayor comodidad articular',
                        'La mayoría necesita años de entrenamiento para lograr este movimiento'
                    ]
                ],
                'imagen' => 'exercises/pull/dominadas-una-mano.png',
                'repeticiones' => 3 / 3,
                'series' => 3,
                'descanso' => 180
            ],
            [
                'id' => 2,
                'nombre' => 'Back Lever',
                'descripcion' => 'Hold horizontal invertido con el pecho hacia arriba, espalda hacia el suelo',
                'instrucciones' => [
                    'introduccion' => 'El back lever es el hold opuesto al front lever, requiriendo tremenda flexibilidad de hombros y fuerza de control.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono.',
                        'Realiza una "skin the cat" invirtiendo el cuerpo hacia atrás.',
                        'Controla el descenso hasta que tu cuerpo quede horizontal.',
                        'La espalda mira hacia el suelo, el pecho hacia arriba.',
                        'Los brazos permanecen completamente extendidos.',
                        'El cuerpo debe formar una línea recta horizontal.',
                        'Mantén los hombros en máxima flexión.',
                        'Mantén la posición con control total.'
                    ],
                    'consejos' => [
                        'Progresión: tuck → straddle → full back lever',
                        'Requiere muy buena flexibilidad de hombros',
                        'Practica "skin the cat" antes de intentar el back lever',
                        'Usa protección en las muñecas si sientes molestias',
                        'El movimiento de entrada y salida es tan importante como el hold'
                    ]
                ],
                'imagen' => 'exercises/pull/back-lever.png',
                'tiempo' => '8-12 segundos',
                'series' => 3,
                'descanso' => 120
            ],
            [
                'id' => 3,
                'nombre' => 'L-sit Pull-ups',
                'descripcion' => 'Dominadas manteniendo las piernas en posición L horizontal',
                'instrucciones' => [
                    'introduccion' => 'Las L-sit pull-ups combinan la dificultad de las dominadas con la exigencia isométrica del L-sit, trabajando simultáneamente tracción y core.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono.',
                        'Eleva las piernas extendidas hasta formar un ángulo de 90° con el torso.',
                        'Mantén las piernas completamente rectas y paralelas al suelo.',
                        'Desde esta posición en L, realiza una dominada.',
                        'Tira hacia arriba manteniendo las piernas en L durante todo el movimiento.',
                        'Sube hasta que el mentón supere la barra.',
                        'Baja controladamente sin bajar las piernas.',
                        'Mantén la posición L durante toda la serie.'
                    ],
                    'consejos' => [
                        'Si no puedes mantener la L completa, flexiona ligeramente las rodillas',
                        'Los flexores de cadera trabajarán tanto como la espalda',
                        'Empieza con pocas repeticiones, es muy demandante',
                        'Practica el L-sit por separado si es muy difícil',
                        'Este ejercicio requiere fuerza extrema de core'
                    ]
                ],
                'imagen' => 'exercises/pull/l-sit-pull-ups.png',
                'repeticiones' => 4,
                'series' => 3,
                'descanso' => 120
            ],
            [
                'id' => 4,
                'nombre' => 'Archer Pull-ups',
                'descripcion' => 'Dominadas con desplazamiento lateral, progresión hacia dominadas a una mano',
                'instrucciones' => [
                    'introduccion' => 'Las archer pull-ups son la progresión ideal hacia las dominadas a una mano, trabajando más intensamente un brazo mientras el otro asiste.',
                    'pasos' => [
                        'Cuelga de la barra con agarre prono, manos muy separadas (más del doble del ancho de hombros).',
                        'Tira hacia arriba desplazando el cuerpo hacia un lado.',
                        'El brazo hacia el que te desplazas se flexiona completamente.',
                        'El otro brazo se extiende casi completamente pero ayuda en el movimiento.',
                        'Lleva el hombro lo más cerca posible de la mano del lado activo.',
                        'Mantén el cuerpo tan vertical como sea posible.',
                        'Baja controladamente al centro.',
                        'Alterna hacia el otro lado en la siguiente repetición.'
                    ],
                    'consejos' => [
                        'Cuanto más se extienda el brazo asistente, más difícil será',
                        'Trabaja hacia un brazo completamente recto (asistente)',
                        'Mantén el core activo para minimizar el balanceo',
                        'Esta es la mejor progresión antes de la dominada a una mano',
                        'Practica también aguantes en la posición superior'
                    ]
                ],
                'imagen' => 'exercises/pull/archer-pull-ups.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ]
        ]
    ]
];
