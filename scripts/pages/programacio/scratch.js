pages['scratch'] = [
    ["block_h1", "SCRATCH"],
    [
        "block_content",
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Contingut extret de "
            ],
            [
                "link",
                "https://www.programoergosum.es/",
                "Programa Ergo Sum"
            ]
        ]
    ],
    [
        "block_unit",
        [
            "unitats/programacio/scratch/scr-01-laberint.html",
            "img/unitats/programacio/scratch/laberint.png",
            "Laberint"
        ],
        [
            "unitats/programacio/scratch/scr-02-flappy-bird.html",
            "img/unitats/programacio/scratch/flappy_bird.png",
            "Flappy Bird"
        ],
        [
            "unitats/programacio/scratch/scr-03-space-invaders.html",
            "img/unitats/programacio/scratch/space_invaders.png",
            "Space Invaders"
        ],
        [
            "unitats/programacio/scratch/scr-04-pong.html",
            "img/unitats/programacio/scratch/pong.png",
            "Pong"
        ]
    ],
    [
        "block_h2",
        "Projecte Final"
    ],
    [
        "block_content",
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Després d'haver creat els anteriors videojocs, has de pensar en el teu videojoc propi. Pot combinar diferents jocs vists anteriorment o ser totalment nou. Consulta abans de començar per no passar-se d'ambiciós o quedar-se curt amb el projecte."
            ]
        ],
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Recorda que es valorarà "
            ],
            [
                "bold",
                "la creativitat, el acabat final i la jugabilitat"
            ]
        ]
    ]
];
pages['scr-01-laberint'] = [
    [
        "block_h1",
        "Laberint"
    ],
    [
        "block_h2",
        "Introducció"
    ],
    [
        "block_content",
        [
            {
                "type": "cols"
            },
            [
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "Anem a crear un videojoc d'un laberint on un personatge haurà d'arribar al final d'ell. El personatge es mourà evitant els obstacles i tornarà al principi si els toca."
                    ]
                ],
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "En primer lloc, abans de començar hauràs d'obrir "
                    ],
                    [
                        "link",
                        "https://scratch.mit.edu",
                        "Scratch"
                    ],
                    [
                        "text",
                        "i crear un projecte nou. En fer-ho, carrega la plantilla que trobaràs en el "
                    ],
                    [
                        "link",
                        "https://drive.google.com/file/d/1PaEuF9tjuYbmXW3BkmtPkp60BfFyAAIN/view?usp=drive_link",
                        "següent enllaç"
                    ]
                ]
            ],
            [
                [
                    {
                        "type": "img_center"
                    },
                    "img/unitats/programacio/scratch/laberint.png"
                ]
            ],
        ]
    ],
    [
        "block_h2",
        "Moviment del personatge"
    ],
    [
        "block_content",
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "El primer que haurem de fer és fer que el personatge es quede a la posició inicial X i Y de l'escenari. Per fer-ho hem d'utilitzar un bloc "
            ],
            [
                "bold",
                "Al presionar bandera verda"
            ],
            [
                "text",
                "(en esdeveniments) que seran les accions que s'executaran quan comencem el joc. "
            ]
        ],
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "A continuació afegirem el bloc d'"
            ],
            [
                "bold",
                "anar a x: __ y: __"
            ],
            [
                "text",
                "i ahí serà on posarem la posició x i y del personatge. Per fer-ho, posa el personatge en la posició inicial i comprova la posició."
            ]
        ],
        [
            {
                "type": "img_center"
            },
            "img/unitats/programacio/scratch/scr-01-laberint-01.png"
        ],
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Ara farem que es moga quan polsem les "
            ],
            [
                "bold",
                "fletxes cap amunt, avall, dreta i esquerra"
            ],
            [
                "text",
                " Per fer-ho has de buscar l'esdeveniment de "
            ],
            [
                "bold",
                "Al presionar una tecla"
            ],
            [
                "text",
                "i de moment, anem a seleccionar cap a "
            ],
            [
                "bold",
                "l'esquerra"
            ]
        ],
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Just després anem a posar 2 instruccions: la primera serà "
            ],
            [
                "bold",
                "Apuntar en direcció -90º"
            ],
            [
                "text",
                "i després "
            ],
            [
                "bold",
                "Moure 10 passos"
            ]
        ],
        [
            {
                "type": "text_complex"
            },
            [
                "text",
                "Prova que al pressionar la tecla de la fletxa esquerra es mou cap a l'esquerra i després fes el mateix però per a les altres 3 fletxes que falten, pensant en els graus que has d'aplicar."
            ]
        ],
        [
            {
                "type": "cols"
            },
            [
                [
                    {
                        "type": "img_center"
                    },
                    "img/unitats/programacio/scratch/scr-01-laberint-02.png"
                ]
            ],
            [
                [
                    {
                        "type": "img_center"
                    },
                    "img/unitats/programacio/scratch/scr-01-laberint-03.png"
                ]
            ]
        ]
    ],
    [
        "block_h2",
        "Sensors"
    ],
    [
        "block_content",
        [
            {
                "type": "cols"
            },
            [
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "Anem a utilitzar els sensors per detectar les parets i que el personatge no les puga atravessar."
                    ]
                ],
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "Per fer-ho necessitem posar un bucle "
                    ],
                    [
                        "bold",
                        "Per sempre"
                    ],
                    [
                        "text",
                        "que estiga tota l'estona comprovant si es toca una paret o no."
                    ]
                ],
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "Per tant, dins del bucle "
                    ],
                    [
                        "bold",
                        "Per sempre"
                    ],
                    [
                        "text",
                        "afegeix un control "
                    ],
                    [
                        "bold",
                        "si __ llavors"
                    ],
                    [
                        "text",
                        " on afegiràs la comprovació "
                    ],
                    [
                        "bold",
                        "si tocant color negre"
                    ],
                    [
                        "text",
                        "que podràs trobar a la secció "
                    ],
                    [
                        "bold",
                        "sensors"
                    ]
                ],
                [
                    {
                        "type": "text_complex"
                    },
                    [
                        "text",
                        "En el moment en què estiga tocant el color negre, hauràs de fer que es "
                    ],
                    [
                        "bold",
                        "moga fins la posició inicial lliscant durant 2s"
                    ],
                    [
                        "text",
                        " Aquesta instrucció la trobaràs en la secció "
                    ],
                    [
                        "bold",
                        "moviment"
                    ]
                ]
            ],
            [
                [
                    {
                        "type": "img_center"
                    },
                    "img/unitats/programacio/scratch/scr-01-laberint-04.png"
                ]
            ],
            [
                [
                    {
                        "type": "img_center"
                    },
                    "img/unitats/programacio/scratch/scr-01-laberint-05.gif"
                ]
            ]
        ]
    ],
    [
        "block_h2",
        "Obstacles"
      ],
      [
        "block_content",
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Els obstacles han d'acabar movent-se per l'escenari però abans anem a canviar-li la disfressa al 2 i al 3."
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Per fer-ho has de seleccionar l'Obstacle 2, després la pestanya "
          ],
          [
            "bold",
            "Vestits"
          ],
          [
            "text",
            "i per últim el botó de "
          ],
          [
            "bold",
            "Tria un vestit"
          ]
        ],
        [
          {
            "type": "img_center"
          },
          "img/unitats/programacio/scratch/scr-01-laberint-06.png"
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Després buscarem "
          ],
          [
            "bold",
            "ball"
          ],
          [
            "text",
            "i seleccionarem la blava. Veuràs que s'ha afegit una nova disfressa, així que canvia el tamany i centra-ho al mig."
          ]
        ],
        [
          {
            "type": "cols"
          },
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-07.png"
            ]
          ],
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-08.gif"
            ]
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Fes el mateix amb "
          ],
          [
            "bold",
            "l'obstacle 3"
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Per últim anem a fer que es moguen. Selecciona l'obstacle número 1 i afegim l'esdeveniment "
          ],
          [
            "bold",
            "Quan la bandera verda es cliqui"
          ],
          [
            "text",
            " La primera acció serà moure-ho a la posició inicial."
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "A continuació haurem de tindre un "
          ],
          [
            "bold",
            "per sempre"
          ],
          [
            "text",
            "perquè repetisca tota la estona dos accions: lliscar cap a la posició final i lliscar cap a la posició inicial."
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Ací tens el resultat amb el codi de l'obstacle 1. Fes el mateix amb el 2 i el 3."
          ]
        ],
        [
          {
            "type": "img_center"
          },
          "img/unitats/programacio/scratch/scr-01-laberint-09.png"
        ],
        [
          {
            "type": "cols"
          },
          [
            [
              {
                "type": "text_simple"
              },
              "El resultat de que els 3 obstacles es moguen."
            ]
          ],
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-10.gif"
            ]
          ]
        ]
      ],
      [
        "block_h2",
        "Xocar i acabar joc"
      ],
      [
        "block_content",
        [
          {
            "type": "cols"
          },
          [
            [
              {
                "type": "text_complex"
              },
              [
                "text",
                "Ara necessitem que al tocar els obstacles, el personatge torne a la posició inicial lliscant."
              ]
            ],
            [
              {
                "type": "text_complex"
              },
              [
                "text",
                "Per tant, dins del personatge, en el bucle "
              ],
              [
                "bold",
                "per sempre"
              ],
              [
                "text",
                "has d'afegir una condició de "
              ],
              [
                "bold",
                "si __ llavors"
              ],
              [
                "text",
                "on hauràs d'incloure 3 condicions amb o: tocant obstacle 1 "
              ],
              [
                "bold",
                "o"
              ],
              [
                "text",
                "tocant obstacle 2 "
              ],
              [
                "bold",
                "o"
              ],
              [
                "text",
                "tocant obstacle 3. I en cas que ocòrrega, ha de lliscar a la posició inicial (com quan tocava una paret). "
              ]
            ],
            [
              {
                "type": "text_complex"
              },
              [
                "text",
                "Recorda que el "
              ],
              [
                "bold",
                "o"
              ],
              [
                "text",
                "es troba a la secció "
              ],
              [
                "bold",
                "operadors"
              ]
            ]
          ],
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-11.png"
            ]
          ]
        ],
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Ara fes que quan toque el color roig de la meta el personatge "
          ],
          [
            "bold",
            "diga durant 2 segons que HA GUANYAT!!"
          ]
        ],
        [
          {
            "type": "img_center"
          },
          "img/unitats/programacio/scratch/scr-01-laberint-12.gif"
        ]
      ],
      [
        "block_h2",
        "Millores a realitzar"
      ],
      [
        "block_content",
        [
          {
            "type": "text_complex"
          },
          [
            "text",
            "Per tal d'acabar el joc has de fer les següents millores:"
          ]
        ],
        [
          {
            "type": "ulist"
          },
          [
            [
              "text",
              "-Que no torne a la posició inicial al tocar una paret"
            ],
            [
              "text",
              "-Que al tocar una paret torne enrere en lloc d'anar a la posició inicial"
            ],
            [
              "text",
              "--Pista: ha de ser al pressionar les fletxes"
            ],
            [
              "text",
              "-Afegeix un temporitzador que comence en 0 i que es pare quan toque la meta"
            ]
          ]
        ],
        [
          {
            "type": "cols"
          },
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-13.gif"
            ]
          ],
          [
            [
              {
                "type": "img_center"
              },
              "img/unitats/programacio/scratch/scr-01-laberint-14.gif"
            ]
          ]
        ]
      ],
      [
        "block_content",
        [
          {
            "type": "iframe",
            "height": "80vh",
            "width": "100%"
          },
          "https://learningapps.org/watch?app=30998038"
        ]
      ]
];