<?php
return [
    [
        'type' => 'full-body',
        'name' => 'Full Body',
        'level' => 'intermedio',
        'description' => 'Desafía todo tu cuerpo con ejercicios de nivel intermedio',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Wall Ball',
                'descripcion' => 'Lanzamiento de balón medicinal contra la pared combinado con sentadilla',
                'instrucciones' => [
                    'introduccion' => 'El wall ball es un ejercicio explosivo que combina fuerza de piernas, potencia de lanzamiento y resistencia cardiovascular.',
                    'pasos' => [
                        'Colócate frente a una pared a un metro de distancia, sosteniendo un balón medicinal.',
                        'Sostén el balón a la altura del pecho con ambas manos.',
                        'Realiza una sentadilla completa manteniendo el balón pegado al pecho.',
                        'Al subir de la sentadilla, utiliza el impulso para lanzar el balón hacia arriba contra la pared.',
                        'Apunta a un punto de la pared a unos 3 metros de altura.',
                        'Recibe el balón con ambas manos al rebotar.',
                        'Inmediatamente inicia otra sentadilla al recibir el balón.',
                        'Mantén un ritmo fluido y continuo.'
                    ],
                    'consejos' => [
                        'Usa la potencia de las piernas para el lanzamiento, no solo los brazos',
                        'Mantén el core activo para proteger la espalda',
                        'Empieza con un balón de 4-6 kg y progresa gradualmente',
                        'Asegúrate de tener espacio seguro y una pared resistente'
                    ]
                ],
                'imagen' => 'exercises/full-body/wall-ball.png',
                'repeticiones' => 15,
                'series' => 3,
                'descanso' => 60
            ],
            [
                'id' => 2,
                'nombre' => 'Squat Jump Lateral',
                'descripcion' => 'Salto lateral sobre banco con sentadilla, desarrolla potencia y agilidad',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio pliométrico combina fuerza de piernas con coordinación lateral y potencia explosiva.',
                    'pasos' => [
                        'Colócate de pie a un lado de un banco o step bajo.',
                        'Realiza una sentadilla parcial para tomar impulso.',
                        'Salta lateralmente sobre el banco con ambos pies.',
                        'Aterriza suavemente en el otro lado con las rodillas flexionadas.',
                        'Absorbe el impacto con una sentadilla controlada.',
                        'Inmediatamente salta de vuelta al lado inicial.',
                        'Mantén el pecho erguido durante todo el movimiento.',
                        'Los brazos ayudan en el balance y propulsión.'
                    ],
                    'consejos' => [
                        'Empieza con un banco bajo y aumenta altura progresivamente',
                        'Aterriza con suavidad, no de forma brusca',
                        'Mantén las rodillas alineadas con los pies al aterrizar',
                        'Si es muy intenso, reduce la velocidad entre saltos'
                    ]
                ],
                'imagen' => 'exercises/full-body/squat-jump-lateral.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 75
            ],
            [
                'id' => 3,
                'nombre' => 'Dominadas Supinas',
                'descripcion' => 'Dominadas con agarre supino para mayor activación de bíceps y dorsales',
                'instrucciones' => [
                    'introduccion' => 'Las dominadas supinas son más accesibles que las pronas y permiten mayor desarrollo de fuerza de tracción.',
                    'pasos' => [
                        'Cuelga de la barra con agarre supino (palmas hacia ti).',
                        'Manos separadas aproximadamente al ancho de hombros.',
                        'Deja los brazos completamente extendidos en la posición inicial.',
                        'Activa los dorsales y tira hacia arriba.',
                        'Sube hasta que tu mentón supere la barra.',
                        'Mantén el pecho elevado durante todo el movimiento.',
                        'Baja de forma controlada hasta brazos completamente extendidos.',
                        'Evita balancear el cuerpo usando impulso.'
                    ],
                    'consejos' => [
                        'Si no puedes hacer muchas, usa banda elástica para asistencia',
                        'Mantén los hombros deprimidos, no los subas hacia las orejas',
                        'Exhala al subir, inhala al bajar',
                        'El agarre supino facilita el movimiento comparado con prono'
                    ]
                ],
                'imagen' => 'exercises/full-body/dominadas-supinas.png',
                'repeticiones' => 6,
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 4,
                'nombre' => 'Plancha en Flexión',
                'descripcion' => 'Hold isométrico en la fase inferior de una flexión',
                'instrucciones' => [
                    'introduccion' => 'Este ejercicio desarrolla tremenda fuerza isométrica de pecho, tríceps, hombros y core.',
                    'pasos' => [
                        'Adopta la posición inicial de una flexión estándar.',
                        'Manos ligeramente más anchas que los hombros.',
                        'Baja lentamente como en una flexión regular.',
                        'Detente cuando estés a 5-10 cm del suelo.',
                        'Mantén esta posición con todo el cuerpo tenso.',
                        'El cuerpo debe formar una línea recta desde cabeza a pies.',
                        'No dejes caer las caderas ni arquees la espalda.',
                        'Mantén la posición durante el tiempo establecido.',
                        'Respira de forma controlada y constante.'
                    ],
                    'consejos' => [
                        'Si 30 segundos es muy difícil, empieza con 15-20 segundos',
                        'Mantén los codos a 45° del cuerpo, no pegados ni muy abiertos',
                        'Cada músculo del cuerpo debe estar activo',
                        'Si empiezas a temblar es normal, mantén la tensión'
                    ]
                ],
                'imagen' => 'exercises/full-body/plancha-flexion.png',
                'tiempo' => '30 segundos',
                'series' => 3,
                'descanso' => 90
            ]
        ]
    ]
];
