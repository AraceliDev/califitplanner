<?php
return [
    [
        'type' => 'lower-body',
        'name' => 'Lower Body',
        'level' => 'intermedio',
        'description' => 'Intensifica el entrenamiento de piernas con mayor resistencia y control',
        'exercises' => [
            [
                'id' => 1,
                'nombre' => 'Sentadilla Búlgara con Mancuernas',
                'descripcion' => 'Sentadilla unilateral elevada con peso adicional para máxima activación',
                'instrucciones' => [
                    'introduccion' => 'La sentadilla búlgara es uno de los mejores ejercicios para desarrollar fuerza y masa muscular en piernas de forma unilateral.',
                    'pasos' => [
                        'Coloca un banco o superficie elevada detrás de ti a 60-90 cm.',
                        'Apoya el empeine del pie trasero sobre el banco.',
                        'Sostén una mancuerna en cada mano a los lados del cuerpo.',
                        'Mantén el torso erguido con el pecho hacia adelante.',
                        'Baja flexionando la rodilla delantera hasta formar un ángulo de 90°.',
                        'La rodilla trasera desciende hacia el suelo sin tocarlo.',
                        'Empuja con el talón de la pierna delantera para subir.',
                        'Mantén el equilibrio durante todo el movimiento.',
                        'Completa todas las repeticiones antes de cambiar de pierna.'
                    ],
                    'consejos' => [
                        'Empieza sin peso para dominar el equilibrio',
                        'La rodilla delantera no debe sobrepasar la punta del pie',
                        'Si pierdes el equilibrio, acerca el banco un poco más',
                        'Mantén el core activo para estabilizar el torso'
                    ]
                ],
                'imagen' => 'exercises/lower-body/sentadilla-bulgara.png',
                'repeticiones' => 10/10,
                'series' => 3,
                'descanso' => 75
            ],
            [
                'id' => 2,
                'nombre' => 'Saltos Explosivos',
                'descripcion' => 'Sentadillas con salto para desarrollar potencia y explosividad',
                'instrucciones' => [
                    'introduccion' => 'Los saltos explosivos desarrollan la potencia de las piernas y mejoran la velocidad de contracción muscular.',
                    'pasos' => [
                        'Colócate de pie con los pies al ancho de hombros.',
                        'Realiza una sentadilla bajando hasta que los muslos estén paralelos al suelo.',
                        'Desde la posición baja, impulsa explosivamente hacia arriba.',
                        'Salta lo más alto posible extendiendo completamente caderas, rodillas y tobillos.',
                        'Balancea los brazos hacia arriba para ganar altura.',
                        'Aterriza suavemente con las rodillas flexionadas.',
                        'Absorbe el impacto volviendo a la posición de sentadilla.',
                        'Encadena el siguiente salto de forma fluida.'
                    ],
                    'consejos' => [
                        'Aterriza con suavidad, no de golpe sobre los talones',
                        'Intenta llevar las rodillas al pecho cuando estes arriba',
                        'Mantén el pecho erguido durante todo el movimiento',
                        'La potencia viene de las piernas, no solo de los brazos',
                        'Si sientes dolor en rodillas, reduce la intensidad'
                    ]
                ],
                'imagen' => 'exercises/lower-body/saltos-explosivos.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 75
            ],
            [
                'id' => 3,
                'nombre' => 'Sentadilla Estática Contra Pared',
                'descripcion' => 'Hold isométrico de sentadilla contra la pared para resistencia muscular',
                'instrucciones' => [
                    'introduccion' => 'La sentadilla en pared desarrolla resistencia isométrica excepcional en cuádriceps y glúteos.',
                    'pasos' => [
                        'Apoya tu espalda completamente contra una pared.',
                        'Los pies deben estar a unos 60 cm de la pared, separados al ancho de hombros.',
                        'Deslízate hacia abajo por la pared hasta formar un ángulo de 90° con las rodillas.',
                        'Los muslos deben estar paralelos al suelo.',
                        'Las rodillas alineadas con los tobillos, no sobrepasando los pies.',
                        'Mantén los brazos cruzados en el pecho o a los lados.',
                        'La espalda permanece completamente pegada a la pared.',
                        'Mantén la posición respirando de forma controlada.',
                        'Cuando termine el tiempo, desliza hacia arriba lentamente.'
                    ],
                    'consejos' => [
                        'Si 45-60 segundos es muy difícil, empieza con 30 segundos',
                        'Mantén el peso distribuido uniformemente en ambos pies',
                        'No aguantes la respiración, respira profundo y constante',
                        'Los cuádriceps deben quemar intensamente, es normal'
                    ]
                ],
                'imagen' => 'exercises/lower-body/sentadilla-estatica-pared.png',
                'tiempo' => '45-60 segundos',
                'series' => 3,
                'descanso' => 90
            ],
            [
                'id' => 4,
                'nombre' => 'Caminata Cangrejo',
                'descripcion' => 'Desplazamiento lateral en sentadilla con peso para glúteos y estabilizadores',
                'instrucciones' => [
                    'introduccion' => 'La caminata cangrejo trabaja intensamente los glúteos medios y mejora la estabilidad lateral, crucial para deportes y movimientos funcionales.',
                    'pasos' => [
                        'Sostén una mancuerna o kettlebell con ambas manos frente al pecho.',
                        'Adopta una posición de sentadilla con los muslos paralelos al suelo.',
                        'Mantén el torso erguido y el core activo.',
                        'Da un paso lateral con el pie derecho manteniendo la sentadilla.',
                        'Junta el pie izquierdo sin salir de la posición de sentadilla.',
                        'Continúa moviéndote lateralmente durante varias repeticiones.',
                        'Cambia de dirección y vuelve hacia el otro lado.',
                        'Nunca te ergugas completamente, mantén la tensión constante.'
                    ],
                    'consejos' => [
                        'Mantén las rodillas alineadas con los pies, no las dejes caer hacia dentro',
                        'El movimiento debe ser controlado, no rápido',
                        'Empieza con poco peso y enfócate en la técnica',
                        'Puedes usar banda elástica alrededor de los muslos para mayor activación'
                    ]
                ],
                'imagen' => 'exercises/lower-body/caminata-cangrejo.png',
                'repeticiones' => 12,
                'series' => 3,
                'descanso' => 60
            ]
        ]
    ]
];
