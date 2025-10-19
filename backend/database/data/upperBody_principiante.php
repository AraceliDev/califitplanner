<?php
return [
    [
        'type' => 'upper-body',
        'name' => 'Upper Body',
        'level' => 'principiante',
        'description' => 'Tonifica brazos, hombros y pecho',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Dominada Supina Asistida con Goma',
                'descripcion' => 'Dominadas con agarre supino y banda elástica, enfoque en bíceps y dorsal',
                'instrucciones' => [
                    'introduccion' => 'La dominada supina con asistencia desarrolla fuerza en bíceps y espalda con agarre más cómodo para principiantes.',
                    'pasos' => [
                        'Coloca una banda elástica de alta resistencia en la barra de dominadas.',
                        'Agarra la barra con las palmas mirando hacia ti (agarre supino).',
                        'Las manos deben estar separadas al ancho de hombros o ligeramente más juntas.',
                        'Introduce los pies o rodillas en la banda para recibir asistencia.',
                        'Desde colgado, tira hacia arriba llevando el mentón por encima de la barra.',
                        'Mantén el pecho elevado y los hombros hacia abajo.',
                        'Baja controladamente hasta brazos completamente extendidos.',
                        'Evita balancearte o usar impulso.'
                    ],
                    'consejos' => [
                        'El agarre supino es más fácil que el prono para principiantes',
                        'Mantén el core activo durante todo el movimiento',
                        'Exhala al subir, inhala al bajar',
                        'Progresa usando bandas más ligeras gradualmente'
                    ]
                ],
                'imagen' => 'exercises/upper-body/dominada-supina-asistida.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 2,
                'nombre' => 'Flexiones con Piernas Elevadas',
                'descripcion' => 'Flexiones con los pies elevados en banco o cajón para mayor intensidad',
                'instrucciones' => [
                    'introduccion' => 'Las flexiones con pies elevados aumentan la carga en la parte superior del pecho y hombros, siendo una progresión natural de las flexiones estándar.',
                    'pasos' => [
                        'Coloca los pies sobre un banco, cajón o superficie estable de 20-40 cm de altura.',
                        'Adopta posición de flexión con las manos en el suelo al ancho de hombros.',
                        'Mantén el cuerpo en línea recta desde la cabeza hasta los pies.',
                        'Los brazos deben estar extendidos en la posición inicial.',
                        'Baja el pecho hacia el suelo flexionando los codos.',
                        'Los codos deben formar un ángulo de 45° con el cuerpo.',
                        'Desciende hasta que el pecho esté a 2-3 cm del suelo.',
                        'Empuja explosivamente hacia arriba hasta brazos completamente extendidos.'
                    ],
                    'consejos' => [
                        'Mantén el core muy activo para evitar arquear la espalda',
                        'Si es muy difícil, empieza con una superficie más baja',
                        'Cuanto más alta la superficie, mayor la activación de hombros',
                        'No dejes caer las caderas durante el movimiento'
                    ]
                ],
                'imagen' => 'exercises/upper-body/flexiones-piernas-elevadas.png',
                'repeticiones' => 8,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 3,
                'nombre' => 'Plancha',
                'descripcion' => 'Hold isométrico sobre antebrazos para fortalecer core y estabilidad general',
                'instrucciones' => [
                    'introduccion' => 'La plancha es el ejercicio fundamental para desarrollar fuerza de core, estabilidad y resistencia isométrica.',
                    'pasos' => [
                        'Apóyate sobre los antebrazos y las puntas de los pies.',
                        'Coloca los codos directamente debajo de los hombros.',
                        'Los antebrazos paralelos o con las manos juntas.',
                        'Forma una línea completamente recta desde la cabeza hasta los talones.',
                        'Contrae el abdomen como si alguien fuera a golpearte.',
                        'Activa los glúteos para mantener la neutralidad de la pelvis.',
                        'Mantén el cuello neutro mirando un punto fijo en el suelo.',
                        'Respira de forma controlada, no aguantes la respiración.'
                    ],
                    'consejos' => [
                        'No dejes caer las caderas ni las eleves demasiado',
                        'Imagina que empujas el suelo con los antebrazos',
                        'Si pierdes la forma, descansa y vuelve a empezar',
                        'Progresa aumentando el tiempo gradualmente'
                    ]
                ],
                'imagen' => 'exercises/upper-body/plancha.png',
                'tiempo' => '30 segundos',
                'series' => 3,
                'descanso' => 45
            ],
            [
                'id' => 4,
                'nombre' => 'Mástil en Anillas o Barra',
                'descripcion' => 'Colgarse invertido boca abajo con el cuerpo recto, también conocido como German Hang',
                'instrucciones' => [
                    'introduccion' => 'El mástil o German Hang es un ejercicio de movilidad y fuerza que estira intensamente los hombros mientras desarrolla control corporal.',
                    'pasos' => [
                        'Cuelga de la barra o anillas con agarre prono.',
                        'Realiza un movimiento de "skin the cat" llevando las piernas sobre la cabeza.',
                        'Continúa rotando hasta que tu cuerpo quede invertido, boca abajo.',
                        'Extiende completamente el cuerpo en línea recta.',
                        'Los brazos permanecen extendidos por encima (o más bien por debajo) de ti.',
                        'La cabeza mira hacia el suelo.',
                        'Mantén la posición con el cuerpo completamente tenso.',
                        'Los hombros deben estar en máxima extensión.',
                        'Para salir, flexiona y vuelve por el mismo camino controladamente.'
                    ],
                    'consejos' => [
                        'REQUIERE buena movilidad de hombros, no fuerces',
                        'Si duele, NO es bueno, detente inmediatamente',
                        'Practica primero el skin the cat parcial',
                        'Es normal sentir un estiramiento intenso pero no dolor',
                        'En anillas es más fácil porque se ajustan a tu anatomía'
                    ]
                ],
                'imagen' => 'exercises/upper-body/mastil-german-hang.png',
                'tiempo' => '10-15 segundos',
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
