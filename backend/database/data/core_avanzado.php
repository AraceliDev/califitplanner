<?php
return [
    [
        'type' => 'core',
        'name' => 'Core Day',
        'level' => 'avanzado',
        'description' => 'Desafía tu core con ejercicios de alto nivel y control corporal',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Shoulder Tap Oso',
                'descripcion' => 'Plancha con rodillas flexionadas y toques de hombro alternos para máxima estabilidad',
                'instrucciones' => [
                    'introduccion' => 'Esta variación de la posición del oso combina estabilidad anti-rotacional con control del core en una posición menos familiar.',
                    'pasos' => [
                        'Adopta una posición de plancha pero con las rodillas flexionadas a 90°.',
                        'Las rodillas deben estar a unos centímetros del suelo, sin tocarlo.',
                        'Mantén la espalda plana y el core completamente activado.',
                        'Levanta la mano derecha y toca el hombro izquierdo.',
                        'Vuelve la mano al suelo con control.',
                        'Alterna tocando el hombro derecho con la mano izquierda.',
                        'Minimiza el balanceo de las caderas durante el movimiento.'
                    ],
                    'consejos' => [
                        'Las rodillas nunca deben tocar el suelo durante el ejercicio',
                        'Mantén el peso distribuido equilibradamente',
                        'Si las caderas se balancean mucho, ralentiza el movimiento',
                        'Respira de forma continua y controlada'
                    ]
                ],
                'imagen' => 'exercises/core/shoulder-tap-oso.png',
                'repeticiones' => 20,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Dragon Flag',
                'descripcion' => 'Elevación de cuerpo completo manteniendo solo la espalda superior apoyada',
                'instrucciones' => [
                    'introduccion' => 'El dragon flag es uno de los ejercicios de core más difíciles, popularizado por Bruce Lee. Requiere tremenda fuerza del core anterior.',
                    'pasos' => [
                        'Acuéstate en un banco o superficie elevada y agarra firmemente un soporte detrás de tu cabeza.',
                        'Eleva todo tu cuerpo manteniendo solo la parte superior de la espalda y hombros apoyados.',
                        'Forma una línea recta desde los hombros hasta los pies.',
                        'Baja el cuerpo de forma controlada manteniendo la rigidez total.',
                        'Detente antes de que la zona lumbar toque el banco.',
                        'Vuelve a elevar el cuerpo manteniendo la forma recta.'
                    ],
                    'consejos' => [
                        'Este es un ejercicio MUY avanzado, progresa gradualmente',
                        'Empieza con dragon flag negativas (solo la bajada)',
                        'Puedes flexionar las rodillas al principio para reducir dificultad',
                        'Mantén todo el cuerpo tenso como una tabla',
                        'No arquees la espalda en ningún momento'
                    ]
                ],
                'imagen' => 'exercises/core/dragon-flag.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 3,
                'nombre' => 'Straddle Planche',
                'descripcion' => 'Posición estática horizontal con piernas abiertas, solo apoyo de manos',
                'instrucciones' => [
                    'introduccion' => 'El straddle planche es una progresión de gimnasia avanzada que requiere fuerza extrema de core, hombros y compresión corporal.',
                    'pasos' => [
                        'Coloca las manos en el suelo a la anchura de los hombros, dedos hacia adelante.',
                        'Inclínate hacia adelante desplazando el peso a las manos.',
                        'Eleva las caderas y extiende las piernas abiertas en V.',
                        'Mantén el cuerpo paralelo al suelo formando una línea horizontal.',
                        'Los hombros deben estar deprimidos y protruidos (redondeados hacia adelante).',
                        'Mantén la posición con todo el cuerpo en tensión.',
                        'La mirada debe ir ligeramente hacia adelante.'
                    ],
                    'consejos' => [
                        'Progresión recomendada: tuck planche → straddle planche → full planche',
                        'Trabaja primero la fuerza de empuje y los leans (inclinaciones)',
                        'Las piernas abiertas facilitan el equilibrio y reducen la palanca',
                        'Mantén los codos totalmente bloqueados',
                        'Practica en paralelas o con bloques para mayor altura'
                    ]
                ],
                'imagen' => 'exercises/core/straddle-planche.png',
                'tiempo' => '5-10 segundos',
                'series' => 3,
                'descanso' => 120
            ],
            [
                'id' => 4,
                'nombre' => 'Front Lever',
                'descripcion' => 'Posición horizontal suspendida de una barra, cuerpo paralelo al suelo',
                'instrucciones' => [
                    'introduccion' => 'El front lever es un hold de gimnasia que requiere fuerza extrema de dorsales, core y control corporal total.',
                    'pasos' => [
                        'Cuelga de una barra con agarre prono (palmas hacia adelante).',
                        'Las manos separadas aproximadamente al ancho de hombros.',
                        'Activa fuertemente los dorsales tirando de la barra hacia abajo.',
                        'Eleva las piernas y el torso hasta que tu cuerpo quede horizontal.',
                        'Forma una línea recta desde la cabeza hasta los pies.',
                        'Mantén la posición con tensión total en todo el cuerpo.',
                        'Los brazos deben permanecer completamente extendidos.',
                        'Mantén la mirada hacia la barra o ligeramente hacia adelante.'
                    ],
                    'consejos' => [
                        'Progresión: tuck → advanced tuck → one leg → straddle → full',
                        'Los dorsales hacen la mayor parte del trabajo, no solo el core',
                        'Imagina que empujas la barra hacia los pies',
                        'Practica aguantes progresivos aumentando la extensión gradualmente',
                        'La depresión escapular es crucial para mantener la posición'
                    ]
                ],
                'imagen' => 'exercises/core/front-lever.png',
                'tiempo' => '5-10 segundos',
                'series' => 3,
                'descanso' => 120
            ]
        ]
    ]
];
