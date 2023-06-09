/*
block_h1 --> titol
block_h2 --> titol
block_unit --> [img, url, text botó], [img, url, text botó]...

['accordeon',
    'id_accordeon',
    [
      [
        ["block_h2", "PrimerObjecte"], 
        [
          ["block_h3", "Element1"],
          ["block_h3", "Element2"],
          ["block_h3", "Element3"]
        ]
      ],
      [
        ["block_h2", "SegonObjecte"], 
        [
          ["block_h3", "Element4"],
          ["block_h3", "Element5"],
          ["block_h3", "Element6"]
        ]
      ]
    ]
  ],
*/

const pages = {
  unitats: [
    ["block_h1", "Unitats"],
    ["block_h2", "PROGRAMACIÓ"],
    ["block_h3", "Blocs"],
    [
      "block_unit",
      ["scratch", "scratch", "Scratch"],
      ["app_inventor", "app_inventor", "App Inventor"],
      [],
    ],
    ["block_h3", "Python"],
    [
      "block_unit",
      ["python", "python", "Python"],
      ["pythonII", "pythonII", "Python II"],
      [],
    ],
    ["block_h3", "Web"],
    [
      "block_unit",
      ["html", "html", "HTML"],
      ["css", "css", "CSS"],
      ["php", "php", "PHP"],
    ],
    ["block_h3", "Base de dades"],
    ["block_unit", ["mysql", "mysql", "MySQL"], [], []],
    ["block_h3", "Robòtica"],
    ["block_unit", ["microbit", "microbit", "Microbit"], [], []],
    ["block_h2", "APLICACIONS WEB"],
    ["block_unit", ["wordpress", "wordpress", "Wordpress"], [], []],
    ["block_h2", "INTEL·LIGÈNCIA ARTIFICIAL"],
    [
      "block_unit",
      [
        "inteligencia_artificial",
        "inteligencia_artificial",
        "Conceptes bàsics IA",
      ],
      ["inteligencia_artificial", "inteligencia_artificial", "Ferramentes IA"], []
    ],
    ["block_h2", "OFIMÀTICA"],
    ["block_unit", ["google_calcul", "google_calcul", "Full de càlcul"], [], []],
  ],
  unitats2: [

    ["block_h1", "Unitats"],
    ['accordeon',
      'unitats',
      [
        [
          ["block_h2", "PROGRAMACIÓ"],
          [
            ['accordeon',
              'programacio_accordeon',
              [
                [
                  ["block_h3", "Blocs"],
                  [
                    [
                      "block_unit",
                      ["scratch", "scratch", "Scratch"],
                      ["app_inventor", "app_inventor", "App Inventor"],
                      [],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Python"],
                  [
                    [
                      "block_unit",
                      ["python", "python", "Python"],
                      ["pythonII", "pythonII", "Python II"],
                      [],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Web"],
                  [
                    [
                      "block_unit",
                      ["html", "html", "HTML"],
                      ["css", "css", "CSS"],
                      ["php", "php", "PHP"],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Base de dades"],
                  [
                    ["block_unit", ["mysql", "mysql", "MySQL"], [], []],
                  ]
                ],
                [
                  ["block_h3", "Robòtica"],
                  [
                    ["block_unit", ["microbit", "microbit", "Microbit"], [], []],
                  ]
                ]
              ]
            ]
          ]
        ],
        [
          ["block_h2", "APLICACIONS WEB"],
          [
            ["block_unit", ["wordpress", "wordpress", "Wordpress"], [], []],
          ]
        ],
        [
          ["block_h2", "INTEL·LIGÈNCIA ARTIFICIAL"],
          [
            [
              "block_unit",
              [
                "inteligencia_artificial",
                "inteligencia_artificial",
                "Conceptes bàsics IA",
              ],
              ["inteligencia_artificial", "inteligencia_artificial", "Ferramentes IA"], []
            ]
          ]
        ],
        [
          ["block_h2", "OFIMÀTICA"],
          [
            ["block_unit", ["google_calcul", "google_calcul", "Full de càlcul"], [], []],
          ]
        ]
      ]
    ],
    
  ],
  microbit: [
    ["block_h1", "MICROBIT"],
    [
      "block_content",
      [
        { type: "text_complex" },
        [{ type: "text" }, "Curs extret del"],
        [
          { type: "link" },
          "https://sites.google.com/site/migueltecnologia/1%C2%BA-eso/computaci%C3%B3n-y-rob%C3%B3tica-1/tema-4-rob%C3%B3tica-con-maqueen",
          "material",
        ],
        [{ type: "text" }, "de Miguel Tecnologia de l'IES José Saramargo"],
      ],
    ],
    ["block_h2", "Què és?"],
    [
      "block_content",
      [
        { type: "text_simple" },
        "La tarjeta microbit és una placa que es pot programar perquè execute instruccions i realitze tasques. A més, es pot connectar al robot Maqueen per tal d'ampliar funcionalitat i donar-li mobilitat",
      ],
      [{ type: "img_center" }, "img/microbit.jpg"],
      [
        { type: "text_simple" },
        "A continuació podrem veure tots els sensors i actuadors que té el robot:",
      ],
      [{ type: "img_center" }, "img/unitats/robotica/microbit/maqueen.png"],
    ],
    ["block_h2", "Motors"],
    [
      "block_content",
      [
        { type: "text_complex" },
        [{ type: "text" }, "Per començar a programar hem d'accedir a"],
        [{ type: "link" }, "https://makecode.microbit.org/", "Makecode"],
      ],
      [
        { type: "text_simple" },
        "Allí afegirem l'extensió Maqueen des de l'apartat Extensions, on buscarem Maqueen",
      ],
      [
        { type: "cols" },
        [[{ type: "img_center" }, "img/unitats/robotica/microbit/01.png"]],
        [[{ type: "img_center" }, "img/unitats/robotica/microbit/02.png"]],
      ],
      [
        { type: "text_simple" },
        "Des d'aleshores tindrem un apartat anomenat Maqueen que tindrà tots els blocs per controlar el robot, tant per rebre informació dels sensors com per enviar-li informació perquè realitze alguna cosa.",
      ],
      [{ type: "img_center" }, "img/unitats/robotica/microbit/03.png"],
      [
        { type: "text_simple" },
        "El bloc motor ens permet moure o un dels dos motors o els dos a la vegada. A més ens indica si volem avançar o tirar enrere i la velocitat a la que ho volem fer. La velocitat pot tindre un valor entre 0 i 255.",
      ],
      [
        { type: "text_simple" },
        "A més, el bloc Parar ens permetrà para un o els dos motors del robot.",
      ],
      [{ type: "text_simple" }, "Amb tot açò podem fer diferents accions:"],
      [
        { type: "list_group" },
        [
          [{ type: "text" }, "Moure avant: posar els dos motors en marxa"],
          [{ type: "text" }, "Tirar enrere: posar els dos motors en marxa cap enrere"],
          [{ type: "text" }, "Parar: posar els dos motors en pausa"],
          [
            { type: "text" },
            "Girar: podem posar només un motor en marxa o un en marxa cap endavant i l'altre cap enrere",
          ],
        ],
      ],
    ],
    ["block_h3", "Activitats"],
    [
      "block_content",
      [{ type: "h4" }, "Activitat 1"],
      [
        { type: "text_simple" },
        "Fes que el robot Maqueen es moga avant 2 segons, després enrere 2 segons. A continuació 3 segons avant, que gire 180º i que torne 3 segons cap a la posició inicial. Després que gire i que faça un quadrat com el de la imatge.",
      ],
      [
        { type: "cols" },
        [[{ type: "img_center" }, "img/unitats/robotica/microbit/04.png"]],
        [[{ type: "img_center" }, "img/unitats/robotica/microbit/05.png"]],
        [[{ type: "img_center" }, "img/unitats/robotica/microbit/06.png"]],
      ],
    ],
    [
      "block_content",
      [{ type: "h4" }, "Activitat 2"],
      [
        { type: "text_simple" },
        "Fes que el robot Maqueen realitze el següent cami esquivant objectes:",
      ],
      [{ type: "img_center" }, "img/unitats/robotica/microbit/07.png"],
    ],
    ["block_h1", "MICROBIT - LED"],
    ["block_h2", "Activitat 1"],
    ["block_content", [
      { "type": "text_simple" },
      "Realitza les següents seqüències en els LEDs de la tauleta microbit. Recorda que l'eix de les X va en horitzontal, l'Y va en vertical i que sempre es comença per la posició 0."
    ], [{
      "type": "cols"
    },
    [
      [{
        "type": "h4",
        "center": true,
      }, "Tasca 1"],
      [{
        "type": "img_center"
      }, "img/unitats/robotica/microbit/microbit_led_1.png"]
    ],
    [
      [{
        "type": "h4",
        "center": true,
      }, "Tasca 2"],
      [{
        "type": "img_center"
      }, "img/unitats/robotica/microbit/microbit_led_2.png"]
    ],
    [
      [{
        "type": "h4",
        "center": true,
      }, "Tasca 3"],
      [{
        "type": "img_center"
      }, "img/unitats/robotica/microbit/microbit_led_3.png"]
    ],
    [
      [{
        "type": "h4",
        "center": true,
      }, "Tasca 4"],
      [{
        "type": "img_center"
      }, "img/unitats/robotica/microbit/microbit_led_4.png"]
    ]
      ]],
    ["block_h2", "Activitat 2"],
    ["block_content",
      [{ "type": "text_simple" },
        "Fes un cronòmetre en la tauleta microbit amb els LEDs. Les condicions són les següents"
      ],
      [
        { type: "olist" },
        [
          [{ type: "text" }, "-Ha de començar mostrant un 0"],
          [{ type: "text" }, "-Al presionar la tecla A s'ha d'iniciar el temps. Si la tornes a presionar es pararà"],
          [{ type: "text" }, "-Al presionar la tecla B es reiniciarà el temps a 0"],
          [{ type: "text" }, "-Si el temps està parat no es sumarà a temps, si NO està parat es sumarà"],
          [{ type: "text" }, "-PISTA: Necessites dos variables, una per anar sumant el temps i una altra per saber si el cronòmetre està parat o no"],
        ],
      ],
      [
        {
          type: "iframe",
          height: "300px",
          center: true
        },
        "https://drive.google.com/file/d/1HJgy41HMrpjI6miEdyP4SouYEwLJ315u/preview"
      ]

    ]
  ],
  python: [
    ["block_h1", "Python"],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "img_center" }, "img/python.png"],
          [{ type: "btn" }, "unitats/programacio/python/py-00-xuleta.html", "Xuleta"],
        ],
        [
          [
            { type: "btn" },
            "unitats/programacio/python/py-01-algoritmes.html",
            "01 - Algoritmes",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-02-variables.html",
            "02 - Variables",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-03-operacions-text.html",
            "03 - Operacions amb text",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-04-llistes.html",
            "04 - Llistes",
          ],
        ],
        [
          [
            { type: "btn" },
            "unitats/programacio/python/py-05-interaccio.html",
            "05 - Interacció amb l'usuari",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-06-condicionals.html",
            "06 - Condicionals",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-07-bucles.html",
            "07 - Bucles",
          ],
          [
            { type: "btn" },
            "unitats/programacio/python/py-08-projectes.html",
            "PROJECTES",
          ],
        ],
      ],
    ],
  ],
  "py-01-algoritmes": [
    ["block_h1", "Algoritmes"],
    ["block_h2", "Algoritmes"],
    [
      "block_content",
      [
        { type: "text_complex" },
        [{ type: "text" }, "Un"],
        [{ type: "bold" }, "programa informàtic"],
        [
          { type: "text" },
          "és aquell text que inclou les instruccions necessàries perquè un ordinador execute una tasca o resolga un problema. Estos programes informàtics formen el",
        ],
        [{ type: "bold" }, "software"],
        [{ type: "text" }, "d'un ordinador."],
      ],
      [
        { type: "text_complex" },
        [{ type: "text" }, "Els programes informàtics estan formats per"],
        [{ type: "bold" }, "algoritmes"],
        [
          { type: "text" },
          "que són els passos concrets que s'han de seguir per realitzar una tasca concreta. Les característiques dels algoritmes són les següents:",
        ],
      ],
      [
        { type: "ulist" },
        [
          [
            { type: "text" },
            "Descripció no ambigua: les instruccions no han de presentar diferents sentits, han de ser clares",
          ],
          [
            { type: "text" },
            "S'han de definir les entrades del programa, és a dir, els valors que necessita el programa per treballar",
          ],
          [
            { type: "text" },
            "S'han de definir les eixides del programa, és a dir, els valors finals que s'han d'obtindre",
          ],
          [{ type: "text" }, "No ha de donar mai error"],
        ],
      ],
      [
        { type: "text_simple" },
        "Exemple d'algoritme: donada una llista de números positius, s'ha de tornar el major.",
      ],
      [
        { type: "ulist" },
        [
          [{ type: "text" }, "-Entrada: Llista L amb els números positius"],
          [{ type: "text" }, "-Eixida: Una caixa que s'anomene max"],
          [{ type: "text" }, "-Algoritme:"],
          [{ type: "text" }, "--max serà 0"],
          [{ type: "text" }, "--Recorrer la llista"],
          [
            { type: "text" },
            "---Si el número que estem llegint és major que max, assignem a max el valor del número",
          ],
          [{ type: "text" }, "--Mostrar per pantalla el contingut de la variable max"],
        ],
      ],
    ],
    ["block_h2", "Diagrames de flux"],
    [
      "block_content",
      [
        { type: "cols" },
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes01.png"]],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes02.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "text_simple" },
        "Un diagrama de flux és la representació gràfica d'un algoritme a través de símbols.",
      ],
      [
        { type: "text_simple" },
        "Ens permeten crear l'estructura de l'algoritme i interpretar-la de manera fàcil. A més, és el primer pas abans d'escriure un algoritme en un llenguatge de programació que interprete l'ordinador.",
      ],
      [{ type: "text_simple" }, "Els principals elements d'un diagrama de flux són:"],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "h4" }, "Terminal"],
          [
            { type: "text_simple" },
            "S'utilitza per indicar l'inici i el final de l'algoritme",
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes03.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "h4" }, "Entrada i eixida de dades"],
          [
            { type: "text_simple" },
            "S'utilitza per aportar-li dades a l'algoritme perquè puga treballar i executar les instruccions i també per mostrar el resultat final del programa. Es pot diferenciar per colors l'entrada i l'eixida",
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes04.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "h4" }, "Procés"],
          [
            { type: "text_simple" },
            "Executa una ordre, assignació, calcular una operació o un altre tipus d'instrucció.",
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes05.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "h4" }, "Decisió"],
          [
            { type: "text_simple" },
            "Serveix perquè partint d'una condició puga'm fer que isquen diferents camins, un positiu i un negatiu.",
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes06.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [{ type: "h4" }, "Línies o fletxes"],
          [{ type: "text_simple" }, "Serveixen per unir tots els anteriors elements"],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes07.png"]]
      ],
    ],
    ["block_h3", "Característiques dels diagrames de flux"],
    [
      "block_content",
      [{ type: "text_simple" }, "Tot diagrama de flux ha de seguir les següents regles:"],
      [
        { type: "olist" },
        [
          [{ type: "text" }, "-Ha de tindre un inici i un final"],
          [{ type: "text" }, "-Tots els símbols han d'estar connectats"],
          [{ type: "text" }, "-A un procés pot arribar-li varies linies"],
          [
            { type: "text" },
            "-A un símbol de desició poden arribar-li varies linies però només eixiran 2, Si o No",
          ],
          [{ type: "text" }, "-A un símbol d'inici mai li arriben linies"],
          [{ type: "text" }, "-D'un símbol de final mai eixiran linies"],
          [
            { type: "text" },
            "-Les linies de connexió són rectes verticals o horitzontals",
          ],
          [
            { type: "text" },
            "-Per dibuixar els símbols es comença de dalt a l'esquerra cap a baix a la dreta",
          ],
        ],
      ],
    ],
    ["block_h3", "Exemples"],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [
            { type: "text_complex" },
            [{ type: "bold" }, "Algoritme per cuinar un ou per a una altra persona."],
          ],
          [
            { type: "olist" },
            [
              [{ type: "text" }, "Pregunte si el vol fregit."],
              [{ type: "text" }, "Si diu que si, es frig, sinó es bull."],
              [{ type: "text" }, "Preguntar si vol sal."],
              [{ type: "text" }, "Si vol sal, tirar-ne, sinó res."],
              [{ type: "text" }, "Servir-lo al plat."],
            ],
          ],
        ],
        [
          [{ type: "img_center" }, "img/unitats/programacio/python/algoritmes08.png"],
        ],
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [
            { type: "text_complex" },
            [{ type: "bold" }, "Algoritme que sume dos números i mostre el resultat."],
          ],
          [
            { type: "olist" },
            [
              [{ type: "text" }, "Llegir el primer número en la variable A"],
              [{ type: "text" }, "Llegir el segon número en la variable B"],
              [{ type: "text" }, "Calcular suma de A i B i guardar-ho en SUMA"],
              [
                { type: "text" },
                'Mostrar "El resultat és " i el valor de la variable SUMA',
              ],
            ],
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes09.png"]]
      ],
    ],
    [
      "block_content",
      [
        { type: "cols" },
        [
          [
            { type: "text_complex" },
            [
              { type: "bold" },
              "Algoritme que comprova si has d'eixir de festa el cap de setmana o quedar-te estudiant.",
            ],
          ],
        ],
        [[{ type: "img_center" }, "img/unitats/programacio/python/algoritmes10.png"]]
      ],
    ],
    ["block_h2", "Activitats"],
    [
      "block_content",
      [
        { type: "text_complex" },
        [{ type: "text" }, "Utilitzarem la ferramenta"],
        [{ type: "link" }, "https://draw.io", "draw.io"],
        [
          { type: "text" },
          "per representar els algoritmes dels exercicis. Després, recorda pujar-los a aules.",
        ],
      ],
      [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 1:"],
        [{ type: "text" }, "Mostra el resultat de l'àrea d'un triangle per pantalla"],
      ],
      [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 2:"],
        [{ type: "text" }, "Indica si un número que s'indica és parell o imparell"],
      ],
      [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 3:"],
        [{ type: "text" }, "Mostra la suma dels 50 primers números positius (inclou la REPETICIÓ, és a dir, ha de tornar enrere amb fletxes)"],
      ], [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 4:"],
        [{ type: "text" }, "Escriu un programa que obtinga una llista de números i diga quin és el major"],
      ], [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 5:"],
        [{ type: "text" }, "Escriu un algoritme que llija 100 números i que mostre la suma"],
      ], [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 6:"],
        [{ type: "text" }, "Escriu un programa que simule el funcionament d'un rellotge"],
      ], [
        { type: "text_complex" },
        [{ type: "bold" }, "Exercici 7:"],
        [{ type: "text" }, "Escriu un programa que comprove si un any que escriu l'usuari és bisiest:"],
      ],
      [
        { type: "ulist" },
        [
          [{ type: "text" }, "-Un any és bisiest si:"],
          [{ type: "text" }, "--És múltiple de 4 però no de 100 ni de 400"],
          [{ type: "text" }, "--És múltiple de 4 i també de 100 i de 400"],
          [{ type: "text" }, "-No serà bisiest si:"],
          [{ type: "text" }, "--No és múltiple de 4"],
          [{ type: "text" }, "--És múltiple de 4 i de 100 però no de 400"],
        ],
      ],
    ],
  ],
  'php': [
    ["block_h1", "PHP"],
    ["block_content", [{
      "type": "cols"
    },
    [
      [{
        "type": "h4"
      }, "PHP Basic concepts"],
      [{
        "type": "text_simple"
      }, "Including PHP code in a PHP file"],
      [{
        "type": "text_simple"
      }, "Writing comments in PHP"],
      [{
        "type": "text_simple"
      }, "Outputting data in PHP"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-01-basic-concepts.html", "Get it!"]
    ],
    [
      [{
        "type": "h4"
      }, "Variables"],
      [{
        "type": "text_simple"
      }, "Introduction to PHP Variables"],
      [{
        "type": "text_simple"
      }, "Manipulating String Variables in PHP"],
      [{
        "type": "text_simple"
      }, "Working with Arrays in PHP"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-02-variables.html", "Get it!"]
    ],
    [
      [{
        "type": "h4"
      }, "Operators"],
      [{
        "type": "text_simple"
      }, "Arithmetic operators"],
      [{
        "type": "text_simple"
      }, "Comparison operators"],
      [{
        "type": "text_simple"
      }, "Logical operators"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-03-operators.html", "Get it!"]
    ]
    ]],
    ["block_content", [{
      "type": "cols"
    },
    [
      [{
        "type": "h4"
      }, "PHP Control structures"],
      [{
        "type": "text_simple"
      }, "Conditional sentences"],
      [{
        "type": "text_simple"
      }, "Loops"],
      [{
        "type": "text_simple"
      }, "Functions"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-04-control-structures.html", "Get it!"]
    ], [
      [{
        "type": "h4"
      }, "Forms and redirection files"],
      [{
        "type": "text_simple"
      }, "Forms and handling fields"],
      [{
        "type": "text_simple"
      }, "Redirection to navigate"],
      [{
        "type": "text_simple"
      }, "Session"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-05-forms.html", "Get it!"]
    ], [
      [{
        "type": "h4"
      }, "Work with a Mysql Database"],
      [{
        "type": "text_simple"
      }, "Create and finish connection"],
      [{
        "type": "text_simple"
      }, "Get data from database"],
      [{
        "type": "text_simple"
      }, "Insert, update and delete data from database"],
      [{
        "type": "btn"
      }, "unitats/programacio/php/php-06-mysql.html", "Get it!"]
    ]
    ]]
  ],
  'php-01-basic-concepts': [
    ["block_h1", "PHP Basic concepts"],
    ["block_h2", "Including PHP code in a PHP file"],
    ["block_content", [{
      "type": "text_simple"
    }, "One of the key features of PHP is its ability to be embedded directly into HTML code. This means that you can include PHP code directly in your HTML files, which allows you to easily add dynamic content to your web pages. In this tutorial, we will explore how to include PHP code in a PHP file using simple examples."],
      [{
        "type": "text_simple"
      }, "Example code:"],
      [{
        "type": "code",
        "language": "php",
      }, "<?php\n// This is a PHP file\n\n// Here is some PHP code that will output a message\n$message = \"Hello, World!\";\necho $message;\n\n// You can also include HTML code in a PHP file\n?>\n<!DOCTYPE html>\n<html>\n <head>\n <title>My PHP Web Page</title>\n </head>\n <body>\n <h1><?php echo $message; ?></h1>\n <p>This is a paragraph of text.</p>\n </body>\n</html>"],
      [{
        "type": "text_complex"
      },
      ["text", "To include PHP code in a PHP file, you simply need to open a PHP tag ("],
      ["bold", "<?php"],
      ["text", ") and write your PHP code inside it. In the example code above, we define a variable "],
      ["bold", "$message"],
      ["text", "that contains the string \"Hello, World!\", and then use the"],
      ["bold", "echo"],
      ["text", "statement to output the message to the webpage."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "In addition to PHP code, you can also include HTML code in a PHP file. To do this, you simply close the PHP tag ("],
      ["bold", "?>"],
      ["text", ") and write your HTML code like you would normally. When you want to include PHP code within your HTML code, you just need to open another PHP tag ("],
      ["bold", "<?php"],
      ["text", ") and write your PHP code, and then close it again with "],
      ["bold", "?>."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "In the example code above, we use this technique to include the variable"],
      ["bold", "$message"],
      ["text", "in an HTML heading element ("],
      ["bold", "<h1>"],
      ["text", "), which will output the message \"Hello, World!\" as the page heading. We also include a paragraph element ("],
      ["bold", "<p>"],
      ["text", ") to demonstrate how you can mix HTML and PHP code in the same file."]
      ],
      [{
        "type": "text_complex"
      }]
    ],
    ["block_h2", "Writing comments in PHP"],
    ["block_content", [{
      "type": "text_simple"
    }, "Comments are lines of code that are not executed by the PHP engine, but are instead used to document the code and provide context for other developers. In this tutorial, we will explore how to write comments in PHP using examples."],
      [{
        "type": "text_simple"
      }, "Example code:"],
      [{
        "type": "code",
        "language": "php",
      }, "<?php\n// This is a single-line comment\n\n/*\nThis is a multi-line comment\nIt can span multiple lines\n*/\n\n# This is another way to write a single-line comment\n\n// The following line of code will output \"Hello, World!\"\necho \"Hello, World!\";\n?>"],
      [{
        "type": "text_simple"
      }, "In PHP, there are two types of comments: single-line comments and multi-line comments."],
      [{
        "type": "text_simple"
      }, "Single-line comments start with two forward slashes (//) and can be used to comment out a single line of code. In the example code above, the first line of code is a single-line comment that explains what the comment is."],
      [{
        "type": "text_simple"
      }, "Multi-line comments start with /* and end with */. They can be used to comment out multiple lines of code. In the example code above, we use a multi-line comment to comment out three lines of code."],
      [{
        "type": "text_simple"
      }, "In addition to these two types of comments, there is also a third way to write comments in PHP, which is the hash symbol (#). This is similar to a single-line comment, but starts with a hash symbol instead of two forward slashes."],
      [{
        "type": "text_simple"
      }, "Comments are useful for documenting your code and providing context for other developers who may be working with your code. They can also be used to temporarily disable lines of code while you're testing or debugging your code."],
      [{
        "type": "text_simple"
      }, "In the example code above, we use comments to explain what the code is doing and to provide context for other developers who may be looking at the code. The last line of code is not commented out, so it will be executed by the PHP engine and output \"Hello, World!\" to the webpage."]
    ],
    ["block_h2", "Outputting data in PHP"],
    ["block_content", [{
      "type": "text_simple"
    }, "One of the most common tasks in PHP is outputting data to the webpage. In this tutorial, we will explore how to output data in PHP using examples."],
      [{
        "type": "text_simple"
      }, "Example code:"],
      [{
        "type": "code",
        "language": "php",
      }, "<?php\n// This is a variable containing some data\n$name = \"John Doe\";\n\n// This will output the data\necho \"Hello, \" . $name . \"!\";\n\n// You can also output data using the print statement\nprint \"Welcome to my website, \" . $name . \"!\";\n?>"],
      [{
        "type": "text_complex"
      },
      ["text", "In PHP, there are several ways to output data to the webpage. The most common way is to use the "],
      ["bold", "echo"],
      ["text", "statement, which allows you to output a string of text to the webpage."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "In the example code above, we first define a variable"],
      ["bold", "$name"],
      ["text", "that contains the string \"John Doe\". We then use the"],
      ["bold", "echo"],
      ["text", "statement to output a greeting message that includes the value of the"],
      ["bold", "$name"],
      ["text", "variable."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "You can also use the "],
      ["bold", "print"],
      ["text", "statement to output data in PHP. The syntax for the print statement is similar to that of the"],
      ["bold", "echo"],
      ["text", "statement, and both are used for the same purpose of outputting data to the webpage."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "In the example code above, we use the"],
      ["bold", "print"],
      ["text", "statement to output a welcome message that includes the value of the "],
      ["bold", "$name"],
      ["text", "variable."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Overall, outputting data in PHP is a simple task that allows you to display dynamic content on your web pages. By using variables and the"],
      ["bold", "echo"],
      ["text", "or"],
      ["bold", "print"],
      ["text", "statement, you can easily output data to the webpage and create engaging user experiences."]
      ]
    ]
  ],
  'php-02-variables': [
    ["block_h1", "Variables"],
    ["block_h2", "Introduction to PHP Variables"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore the fundamentals of PHP variables. Variables are essential elements in programming that allow us to store and manipulate data. In PHP, we have various types of variables, including strings, integers, floats, and booleans. We will cover how to declare variables, assign values to them, and perform basic operations using these variable types. "],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// String Variable\n$name = \"John Doe\";\necho \"Name: \" . $name . \"<br>\";\n\n// Integer Variable\n$age = 25;\necho \"Age: \" . $age . \"<br>\";\n\n// Float Variable\n$price = 9.99;\necho \"Price: $\" . $price . \"<br>\";\n\n// Boolean Variable\n$isLogged = true;\necho \"Logged in: \" . ($isLogged ? 'Yes' : 'No') . \"<br>\";\n\n// Basic Operations\n$num1 = 10;\n$num2 = 5;\n\n$sum = $num1 + $num2;\necho \"Sum: \" . $sum . \"<br>\";\n\n$diff = $num1 - $num2;\necho \"Difference: \" . $diff . \"<br>\";\n\n$product = $num1 * $num2;\necho \"Product: \" . $product . \"<br>\";\n\n$quotient = $num1 / $num2;\necho \"Quotient: \" . $quotient . \"<br>\";\n\n$remainder = $num1 % $num2;\necho \"Remainder: \" . $remainder . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we start by declaring and assigning values to variables of different types: string, integer, float, and boolean. We then demonstrate how to perform basic operations using these variables, such as addition, subtraction, multiplication, division, and finding the remainder. The results are displayed using the "],
      ["bold", "echo"],
      ["text", "statement. Feel free to modify the values and experiment with different operations to deepen your understanding of PHP variables."]
      ]
    ],
    ["block_h2", "Manipulating String Variables in PHP"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore the world of string variables and learn how to manipulate them using various operations in PHP. Strings are a fundamental data type in programming that represent text and are used for storing and manipulating textual data. In PHP, we have a rich set of functions and operations to work with strings. We will cover how to declare string variables, concatenate them, find their length, extract substrings, convert cases, and more. "],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// String Variable\n$greeting = \"Hello,\";\n$name = \"John\";\n\n// Concatenation\n$fullGreeting = $greeting . \" \" . $name;\necho $fullGreeting . \"<br>\";\n\n// Length of a String\n$length = strlen($fullGreeting);\necho \"Length: \" . $length . \"<br>\";\n\n// Extracting Substrings\n$substring = substr($fullGreeting, 7, 4);\necho \"Substring: \" . $substring . \"<br>\";\n\n// Converting Case\n$lowercase = strtolower($fullGreeting);\necho \"Lowercase: \" . $lowercase . \"<br>\";\n\n$uppercase = strtoupper($fullGreeting);\necho \"Uppercase: \" . $uppercase . \"<br>\";\n\n// Replacing Text\n$replaced = str_replace(\"John\", \"Jane\", $fullGreeting);\necho \"Replaced: \" . $replaced . \"<br>\";\n\n// Finding Position\n$position = strpos($fullGreeting, \"John\");\necho \"Position: \" . $position . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we begin by declaring two string variables,"],
      ["bold", "$greeting"],
      ["text", "and"],
      ["bold", "$name"],
      ["text", ", and then concatenate them to form the "],
      ["bold", "$fullGreeting"],
      ["text", ". We demonstrate how to find the length of a string using the "],
      ["bold", "strlen()"],
      ["text", "function and extract a substring using the"],
      ["bold", "substr()"],
      ["text", "function. We also showcase converting the string to lowercase and uppercase using the"],
      ["bold", "strtolower()"],
      ["text", "and"],
      ["bold", "strtoupper()"],
      ["text", "functions respectively. Furthermore, we learn how to replace specific text within a string using the"],
      ["bold", "str_replace()"],
      ["text", "function and find the position of a substring using the"],
      ["bold", "strpos()"],
      ["text", "function. Modify the variables and explore other string functions to expand your understanding of string manipulation in PHP. "]
      ]
    ],
    ["block_h2", "Working with Arrays in PHP"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore the concept of arrays and how to work with them in PHP. Arrays are powerful data structures that allow us to store and organize multiple values under a single variable. In PHP, arrays can hold elements of different types, such as strings, integers, floats, and even other arrays. We will cover how to declare arrays, access their elements, add and remove elements, iterate over them, and perform essential operations like sorting and searching. "],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Numeric Array\n$numbers = [1, 2, 3, 4, 5];\n\n// Accessing Array Elements\necho \"First Element: \" . $numbers[0] . \"<br>\";\necho \"Second Element: \" . $numbers[1] . \"<br>\";\n\n// Associative Array\n$person = [\n \"name\" => \"John Doe\",\n \"age\" => 25,\n \"email\" => \"johndoe@example.com\"\n];\n\n// Accessing Associative Array Elements\necho \"Name: \" . $person[\"name\"] . \"<br>\";\necho \"Age: \" . $person[\"age\"] . \"<br>\";\n\n// Adding Elements to an Array\n$fruits = [\"apple\", \"banana\"];\n$fruits[] = \"orange\";\necho \"Fruits: \" . implode(\", \", $fruits) . \"<br>\";\n\n// Removing Elements from an Array\nunset($fruits[1]);\necho \"Updated Fruits: \" . implode(\", \", $fruits) . \"<br>\";\n\n// Looping through an Array\nforeach ($fruits as $fruit) {\n echo $fruit . \"<br>\";\n}\n\n// Array Operations\n$numbers = [4, 2, 1, 5, 3];\n\n// Sorting\nsort($numbers);\necho \"Sorted Numbers: \" . implode(\", \", $numbers) . \"<br>\";\n\n// Searching\n$index = array_search(3, $numbers);\necho \"Index of 3: \" . $index . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we start by declaring a numeric array,"],
      ["bold", "$numbers"],
      ["text", ", and an associative array,"],
      ["bold", "$person"],
      ["text", ". We demonstrate how to access elements in both types of arrays using their indices or keys. Next, we explore adding elements to an array using the "],
      ["bold", "[]"],
      ["text", "syntax and removing elements using the"],
      ["bold", "unset()"],
      ["text", "function. We then showcase how to iterate over an array using the"],
      ["bold", "foreach"],
      ["text", "loop. Furthermore, we perform common array operations, such as sorting the elements using the"],
      ["bold", "sort()"],
      ["text", "function and searching for a specific value using the"],
      ["bold", "array_search()"],
      ["text", "function. Modify the arrays and experiment with different array operations to enhance your understanding of array manipulation in PHP."]
      ]
    ]
  ],
  'php-03-operators': [
    ["block_h1", "Operators"],
    ["block_h2", "Arithmetic Operators"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore arithmetic operators in PHP. Arithmetic operators are fundamental tools for performing mathematical calculations in your PHP code. We will cover various arithmetic operators, including addition, subtraction, multiplication, division, and modulo. We will provide examples and explain the functionality of each operator."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n$num1 = 10;\n$num2 = 5;\n\n// Addition\n$sum = $num1 + $num2;\necho \"Sum: \" . $sum . \"<br>\";\n\n// Subtraction\n$diff = $num1 - $num2;\necho \"Difference: \" . $diff . \"<br>\";\n\n// Multiplication\n$product = $num1 * $num2;\necho \"Product: \" . $product . \"<br>\";\n\n// Division\n$quotient = $num1 / $num2;\necho \"Quotient: \" . $quotient . \"<br>\";\n\n// Modulo\n$remainder = $num1 % $num2;\necho \"Remainder: \" . $remainder . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we showcase the usage of arithmetic operators in PHP. We start with addition ("],
      ["bold", "+"],
      ["text", "), where the"],
      ["bold", "$num1"],
      ["text", "and"],
      ["bold", "$num2"],
      ["text", "are added together to calculate the sum. Then, we demonstrate subtraction ("],
      ["bold", "-"],
      ["text", "), multiplication ("],
      ["bold", "*"],
      ["text", "), division ("],
      ["bold", "/"],
      ["text", "), and modulo ("],
      ["bold", "%"],
      ["text", "). The difference, product, quotient, and remainder are calculated and displayed using the echo statement."]
      ]
    ],
    ["block_h2", "Comparison operators"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore comparison operators in PHP. Comparison operators allow us to compare values and evaluate conditions in our PHP code. We will cover various comparison operators, including greater than, less than, equal to, not equal to, greater than or equal to, and less than or equal to. We will provide examples and explain the functionality of each operator."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n$num1 = 10;\n$num2 = 5;\n\n// Greater Than\n$isGreater = ($num1 > $num2);\necho \"Is num1 greater than num2? \" . ($isGreater ? 'Yes' : 'No') . \"<br>\";\n\n// Less Than\n$isLess = ($num1 < $num2);\necho \"Is num1 less than num2? \" . ($isLess ? 'Yes' : 'No') . \"<br>\";\n\n// Equal To\n$isEqual = ($num1 == $num2);\necho \"Are num1 and num2 equal? \" . ($isEqual ? 'Yes' : 'No') . \"<br>\";\n\n// Not Equal To\n$isNotEqual = ($num1 != $num2);\necho \"Are num1 and num2 not equal? \" . ($isNotEqual ? 'Yes' : 'No') . \"<br>\";\n\n// Greater Than or Equal To\n$isGreaterOrEqual = ($num1 >= $num2);\necho \"Is num1 greater than or equal to num2? \" . ($isGreaterOrEqual ? 'Yes' : 'No') . \"<br>\";\n\n// Less Than or Equal To\n$isLessOrEqual = ($num1 <= $num2);\necho \"Is num1 less than or equal to num2? \" . ($isLessOrEqual ? 'Yes' : 'No') . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we showcase the usage of comparison operators in PHP. We start with the greater than ("],
      ["bold", ">"],
      ["text", "), less than ("],
      ["bold", "<"],
      ["text", "), equal to ("],
      ["bold", "=="],
      ["text", "), and not equal to ("],
      ["bold", "!="],
      ["text", ") operators to compare the values of"],
      ["bold", "$num1"],
      ["text", "and"],
      ["bold", "$num2"],
      ["text", ". The results of the comparisons are stored in variables ("],
      ["bold", "$isGreater, $isLess, $isEqual, $isNotEqual"],
      ["text", ") and displayed using the echo statement. Additionally, we demonstrate the greater than or equal to ("],
      ["bold", ">="],
      ["text", ") and less than or equal to ("],
      ["bold", "<="],
      ["text", ") operators to check if a value is greater than or equal to another value, and if a value is less than or equal to another value, respectively."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Feel free to modify the values of "],
      ["bold", "$num1"],
      ["text", "and"],
      ["bold", "$num2"]
      ]
    ],
    ["block_h2", "Logical Operators"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore logical operators in PHP. Logical operators allow us to combine and negate conditions in our PHP code. We will cover three main logical operators: logical AND, logical OR, and logical NOT. We will provide examples and explain the functionality of each operator."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n$isTrue = true;\n$isFalse = false;\n\n// Logical AND\n$logicalAnd = $isTrue && $isFalse;\necho \"Logical AND: \" . ($logicalAnd ? 'True' : 'False') . \"<br>\";\n\n// Logical OR\n$logicalOr = $isTrue || $isFalse;\necho \"Logical OR: \" . ($logicalOr ? 'True' : 'False') . \"<br>\";\n\n// Logical NOT\n$logicalNot = !$isTrue;\necho \"Logical NOT: \" . ($logicalNot ? 'True' : 'False') . \"<br>\";\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we showcase the usage of logical operators in PHP. We start with the logical AND ("],
      ["bold", "&&"],
      ["text", ") operator, which evaluates to true if both conditions on either side of the operator are true. We demonstrate the logical OR ("],
      ["bold", "||"],
      ["text", ") operator, which evaluates to true if at least one of the conditions on either side of the operator is true. Finally, we explore the logical NOT ("],
      ["bold", "!"],
      ["text", ") operator, which negates a condition."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "The results of the logical operations are stored in variables ("],
      ["bold", "$logicalAnd, $logicalOr, $logicalNot"],
      ["text", ") and displayed using the echo statement."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Feel free to modify the values of"],
      ["bold", "$isTrue"],
      ["text", "and"],
      ["bold", "$isFalse"],
      ["text", "and experiment with different combinations of logical operators to deepen your understanding of logical operators in PHP. Logical operators are essential for combining conditions and making complex decisions in your PHP code."]
      ]
    ]
  ],
  'php-04-control-structures': [
    ["block_h1", "Control structures"],
    ["block_h2", "Conditional Statements"],
    ["block_content", [{
      "type": "text_complex"
    },
    ["text", "In this lesson, we will explore conditional statements and their usage in PHP. Conditional statements allow us to make decisions and execute different blocks of code based on certain conditions. In PHP, we have several conditional statements, including "],
    ["bold", "if, if-else, if-elseif-else"],
    ["text", ",and the switch statement. We will cover the syntax and usage of these statements, provide examples, and explain their functionality."]
    ],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// If Statement\n$temperature = 25;\n\nif ($temperature > 30) {\n echo \"It's a hot day!\";\n}\n\n// If-Else Statement\n$isRaining = true;\n\nif ($isRaining) {\n echo \"Remember to take an umbrella.\";\n} else {\n echo \"No need for an umbrella.\";\n}\n\n// If-Elseif-Else Statement\n$time = 13;\n\nif ($time < 12) {\n echo \"Good morning!\";\n} elseif ($time < 18) {\n echo \"Good afternoon!\";\n} else {\n echo \"Good evening!\";\n}\n\n// Switch Statement\n$dayOfWeek = \"Monday\";\n\nswitch ($dayOfWeek) {\n case \"Monday\":\n echo \"It's Monday!\";\n break;\n case \"Tuesday\":\n echo \"It's Tuesday!\";\n break;\n case \"Wednesday\":\n echo \"It's Wednesday!\";\n break;\n default:\n echo \"It's another day of the week.\";\n break;\n}\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we provide examples of different conditional statements in PHP. We start with the "],
      ["bold", "if"],
      ["text", "statement, which executes a block of code if the given condition is true. Next, we demonstrate the"],
      ["bold", "if-else"],
      ["text", "statement, where one block of code is executed if the condition is true and another block is executed if the condition is false. Following that, we showcase the"],
      ["bold", "if-elseif-else"],
      ["text", "statement, which allows for multiple conditions to be checked sequentially. Finally, we present the"],
      ["bold", "switch"],
      ["text", "statement, which provides an alternative way to handle multiple conditions based on different cases. Each case is checked, and the corresponding block of code is executed. The"],
      ["bold", "break"],
      ["text", "statement is used to exit the switch block after a case is matched."]
      ],
      [{
        "type": "text_simple"
      }, "Feel free to modify the conditions and statements to experiment with different scenarios. Conditional statements are essential tools for controlling the flow of your program based on specific conditions."]
    ],
    ["block_h2", "Loops"],
    ["block_content", [{
      "type": "text_complex"
    },
    ["text", "In this lesson, we will explore loops in PHP. Loops allow us to execute a block of code repeatedly based on certain conditions. They are essential for performing repetitive tasks and iterating over collections of data. In PHP, we have different types of loops, including the"],
    ["bold", "for"],
    ["text", "loop, the"],
    ["bold", "while"],
    ["text", "loop, and the"],
    ["bold", "foreach"],
    ["text", "loop. We will provide examples and explain the functionality of each loop. "]
    ],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// For Loop\necho \"For Loop: \";\nfor ($i = 1; $i <= 5; $i++) {\n echo $i . \" \";\n}\necho \"<br>\";\n\n// While Loop\necho \"While Loop: \";\n$j = 1;\nwhile ($j <= 5) {\n echo $j . \" \";\n $j++;\n}\necho \"<br>\";\n\n// Foreach Loop\necho \"Foreach Loop: \";\n$fruits = [\"Apple\", \"Banana\", \"Orange\"];\nforeach ($fruits as $fruit) {\n echo $fruit . \" \";\n}\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we showcase the usage of different types of loops in PHP. We start with the"],
      ["bold", "for"],
      ["text", "loop, which allows us to specify an initialization, a condition, and an increment/decrement. The loop will execute the block of code as long as the condition is true. In the example, we use a"],
      ["bold", "for"],
      ["text", "loop to display numbers from 1 to 5."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Next, we demonstrate the"],
      ["bold", "while"],
      ["text", "loop, which executes the block of code as long as the condition is true. We initialize a variable outside the loop, and within the loop, we update the variable. In the example, we use a"],
      ["bold", "while"],
      ["text", "loop to display numbers from 1 to 5."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Lastly, we explore the"],
      ["bold", "foreach"],
      ["text", "loop, which is used specifically for iterating over arrays or other iterable objects. It allows us to iterate through each element in the array and perform operations on them. In the example, we use a"],
      ["bold", "foreach"],
      ["text", "loop to iterate over an array of fruits and display each fruit."]
      ],
      [{
        "type": "text_complex"
      }]
    ],
    ["block_h2", "Functions"], ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore functions in PHP. Functions are reusable blocks of code that perform specific tasks. They allow us to organize our code, improve code reusability, and make our programs more modular. In PHP, we can define our own functions and also use built-in functions provided by PHP. We will provide examples and explain the functionality of functions."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// User-defined Function\nfunction greet() {\n echo \"Hello, welcome to our website!\";\n}\n\n// Function Call\ngreet();\n\n// Function with Parameters\nfunction add($num1, $num2) {\n $sum = $num1 + $num2;\n return $sum;\n}\n\n// Function Call with Arguments\n$result = add(5, 3);\necho \"Sum: \" . $result;\n?>\n"],
      [{
        "type": "text_complex"
      },
      ["text", "In this example, we showcase the usage of functions in PHP. We start with a user-defined function called "],
      ["bold", "greet()"],
      ["text", " which simply echoes a greeting message. We then call the "],
      ["bold", "greet()"],
      ["text", "function to execute the code inside it and display the greeting message."]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "Next, we demonstrate a function called "],
      ["bold", "add()"],
      ["text", "that takes two parameters, "],
      ["bold", "$num1"],
      ["text", "and "],
      ["bold", "$num2"],
      ["text", " adds them together, and returns the sum. We call the "],
      ["bold", "add()"],
      ["text", "function with arguments "],
      ["bold", "(5, 3)"],
      ["text", "to perform the addition and store the result in the variable "],
      ["bold", "$result"],
      ["text", " We then display the result using the "],
      ["bold", "echo"],
      ["text", "statement.\n\n"]
      ],
      [{
        "type": "text_simple"
      }, "Feel free to define your own functions and call them with different arguments to suit your specific needs. Functions are essential for code organization, reusability, and modularization in PHP."]
    ]
  ],
  'php-05-forms': [
    ["block_h1", "Forms and redirections"],
    ["block_h2", "Forms and User Input"],
    ["block_content", [{
      "type": "text_simple"
    }, " In this lesson, we will dive into the topic of Forms and User Input in PHP. Forms play a crucial role in web development, allowing users to interact with websites by submitting data. We will explore how to handle form submissions, retrieve and process user input, and implement form validation and security measures. By the end of this lesson, you'll have a solid understanding of working with forms in PHP and ensuring a secure user experience."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Handling form submission\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n // Retrieve user input\n $name = $_POST[\"name\"];\n $email = $_POST[\"email\"];\n $message = $_POST[\"message\"];\n\n // Process user input\n // ... perform desired operations or save data to a database\n\n // Form validation\n $errors = array();\n\n // Validate name field\n if (empty($name)) {\n $errors[] = \"Name is required.\";\n }\n\n // Validate email field\n if (empty($email)) {\n $errors[] = \"Email is required.\";\n } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n $errors[] = \"Invalid email format.\";\n }\n\n // Validate message field\n if (empty($message)) {\n $errors[] = \"Message is required.\";\n }\n\n // Display validation errors or success message\n if (!empty($errors)) {\n foreach ($errors as $error) {\n echo $error . \"<br>\";\n }\n } else {\n echo \"Form submitted successfully!\";\n // ... additional actions or redirect to a thank you page\n }\n}\n?>\n\n<!-- HTML Form -->\n<form method=\"POST\" action=\"<?php echo htmlspecialchars($_SERVER[\"PHP_SELF\"]); ?>\">\n <label for=\"name\">Name:</label>\n <input type=\"text\" name=\"name\" required><br>\n\n <label for=\"email\">Email:</label>\n <input type=\"email\" name=\"email\" required><br>\n\n <label for=\"message\">Message:</label>\n <textarea name=\"message\" required></textarea><br>\n\n <input type=\"submit\" value=\"Submit\">\n</form>\n"],
      [{
        "type": "text_simple"
      }, "In this example, we demonstrate the process of handling form submissions, retrieving and processing user input, and implementing form validation and security measures."],
      [{
        "type": "olist"
      },
      [
        ["text", "-Handling Form Submission:"],
        ["text", "--We check if the HTTP request method is POST using $_SERVER[\"REQUEST_METHOD\"]."],
        ["text", "--If it is a POST request, we retrieve the user input from the $_POST superglobal array."],
        ["text", "-Processing User Input:"],
        ["text", "--We can perform desired operations or save the submitted data to a database."],
        ["text", "-Form Validation:"],
        ["text", "--We define an empty $errors array to collect validation errors."],
        ["text", "--We validate each input field and add corresponding error messages to the $errors array if necessary."],
        ["text", "-Displaying Validation Errors or Success Message:"],
        ["text", "--If the $errors array is not empty, we iterate through it and display each error message."],
        ["text", "--If the $errors array is empty, we display a success message indicating that the form was submitted successfully."]
      ]
      ],
      [{
        "type": "text_complex"
      },
      ["text", "The HTML form uses the "],
      ["bold", "POST"],
      ["text", "method to submit data to the same PHP script ("],
      ["bold", "$_SERVER[\"PHP_SELF\"]"],
      ["text", " for processing. Each input field includes the "],
      ["bold", "required"],
      ["text", "attribute to enforce client-side validation. The "],
      ["bold", "htmlspecialchars()"],
      ["text", "function is used to prevent cross-site scripting (XSS) attacks by sanitizing user input."]
      ],
      [{
        "type": "text_simple"
      }, "Feel free to modify the form fields, validation rules, and processing logic to fit your specific requirements. Remember to always validate and sanitize user input to ensure data integrity and enhance security."]
    ],
    ["block_h2", "Redirecting and Passing Parameters"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore the process of redirecting from one PHP file to another and sending parameters along with the redirection. Redirection is a common technique used to navigate users to different pages within a web application. We will learn how to trigger a redirect using a button click and pass parameters to the destination page. "],
      [{
        "type": "text_simple"
      }, "Example Code redirect.php"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Handle button click\nif (isset($_POST['submit'])) {\n $username = $_POST['username'];\n $email = $_POST['email'];\n\n // Redirect with parameters\n header(\"Location: destination.php?username=$username&email=$email\");\n exit();\n}\n?>\n\n<!-- HTML Form -->\n<form method=\"POST\" action=\"<?php echo htmlspecialchars($_SERVER[\"PHP_SELF\"]); ?>\">\n <!-- Form fields -->\n <label for=\"username\">Username:</label>\n <input type=\"text\" name=\"username\"><br>\n\n <label for=\"email\">Email:</label>\n <input type=\"email\" name=\"email\"><br>\n\n <!-- Submit button -->\n <input type=\"submit\" name=\"submit\" value=\"Submit\">\n</form>\n"],
      [{
        "type": "text_simple"
      }, "Example Code destination.php"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Retrieve parameters from URL\nif (isset($_GET['username']) && isset($_GET['email'])) {\n $username = $_GET['username'];\n $email = $_GET['email'];\n\n // Display parameter values\n echo \"Welcome, $username! Your email is $email.\";\n}\n?>\n"],
      [{
        "type": "text_simple"
      }, "In this example, we demonstrate how to redirect from one PHP file (redirect.php) to another (destination.php) upon clicking a submit button."],
      [{
        "type": "olist"
      },
      [
        ["text", "-redirect.php:"],
        ["text", "--The form includes input fields for the username and email."],
        ["text", "--Upon submitting the form, the $_POST superglobal array is used to retrieve the values entered by the user."],
        ["text", "--The header() function is used to trigger the redirection to the destination.php file."],
        ["text", "--We pass the username and email as parameters in the URL using the query string format (?username=$username&email=$email)."],
        ["text", "-destination.php:"],
        ["text", "--In the destination.php file, we use the $_GET superglobal array to retrieve the parameters from the URL."],
        ["text", "--We check if the username and email parameters are set and display a personalized message using the retrieved values."]
      ]
      ],
      [{
        "type": "text_simple"
      }, "By clicking the submit button on the redirect.php page, the form data is submitted, and the user is redirected to the destination.php page. The username and email parameters are passed in the URL, allowing us to retrieve and use them on the destination page."],
      [{
        "type": "text_simple"
      }, "Feel free to customize the form fields and the destination page logic according to your specific requirements. Redirecting and passing parameters are fundamental techniques for building dynamic web applications in PHP."]
    ],
    ["block_h2", "Sessions"], ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will explore the concept of sessions in PHP. Sessions allow you to store and retrieve user-specific data across multiple requests, enabling personalized and stateful interactions on your website. In this lesson, we will learn how to start a session, set and retrieve session variables, and destroy sessions when they are no longer needed."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Start a session\nsession_start();\n\n// Set session variables\n$_SESSION['username'] = 'John';\n$_SESSION['email'] = 'john@example.com';\n\n// Retrieve session variables\n$username = $_SESSION['username'];\n$email = $_SESSION['email'];\n\n// Display session data\necho \"Welcome, $username! Your email is $email.\";\n\n// Destroy the session\nsession_destroy();\n?>\n"],
      [{
        "type": "text_simple"
      }, "In this example, we demonstrate the usage of sessions in PHP to store and retrieve user-specific data."],
      [{
        "type": "olist"
      },
      [
        ["text", "-Starting a Session:"],
        ["text", "--We begin by calling the session_start() function, which initializes a session or resumes an existing one."],
        ["text", "-Setting Session Variables:"],
        ["text", "--We assign values to session variables using the $_SESSION superglobal array. In this example, we set the username and email as session variables."],
        ["text", "-Retrieving Session Variables:"],
        ["text", "--We can access session variables by using the $_SESSION superglobal array. In this case, we retrieve the username and email and assign them to local variables."],
        ["text", "-Displaying Session Data:"],
        ["text", "--We use the retrieved session variables to display a personalized message to the user."],
        ["text", "-Destroying the Session:"],
        ["text", "--After we have finished working with the session, we can destroy it using the session_destroy() function. This clears all session data and ends the session."]
      ]
      ],
      [{
        "type": "text_simple"
      }, "Sessions allow you to store and access data across multiple pages and requests, making it easier to maintain user-specific information and create personalized experiences. Remember to start the session at the beginning of each PHP file where you want to use session variables."],
      [{
        "type": "text_simple"
      }, "Feel free to utilize sessions for storing other user-related data or custom application-specific information. Sessions are a powerful tool for building dynamic and interactive PHP applications."]
    ]
  ],
  'php-06-mysql': [
    ["block_h1", "Connect with database"],
    ["block_content", [{
      "type": "text_simple"
    }, "In this lesson, we will dive into various MySQL database operations using PHP. We will cover essential CRUD (Create, Read, Update, Delete) operations, including selecting data, selecting with the WHERE clause, inserting new records, updating existing records, and deleting records from a MySQL database. Understanding these operations is crucial for building dynamic and data-driven PHP applications."]],
    ["block_h2", "Connection"],
    ["block_content", [{
      "type": "text_simple"
    }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Establish a database connection\n$servername = \"localhost\";\n$username = \"your_username\";\n$password = \"your_password\";\n$dbname = \"your_database\";\n\n$conn = new mysqli($servername, $username, $password, $dbname);\n\n// Check the connection\nif ($conn->connect_error) {\n die(\"Connection failed: \" . $conn->connect_error);\n}\n>?"],
      [{
        "type": "text_simple"
      }, "Remember to replace the placeholder values (your_username, your_password, and your_database) with your actual MySQL credentials. With this code we can stablish a connection between our PHP files and our database."]
    ],
    ["block_h2", "Get data (SELECT)"],
    ["block_content", [{
      "type": "text_simple"
    }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// SELECT - Retrieve all records from a table\n$sql = \"SELECT * FROM users\";\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n while ($row = $result->fetch_assoc()) {\n echo \"ID: \" . $row[\"id\"] . \"<br>\";\n echo \"Name: \" . $row[\"name\"] . \"<br>\";\n echo \"Email: \" . $row[\"email\"] . \"<br><br>\";\n }\n} else {\n echo \"No results found.\";\n}\n\n// SELECT with WHERE - Retrieve specific records from a table\n$sql = \"SELECT * FROM users WHERE age > 25\";\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n while ($row = $result->fetch_assoc()) {\n echo \"ID: \" . $row[\"id\"] . \"<br>\";\n echo \"Name: \" . $row[\"name\"] . \"<br>\";\n echo \"Email: \" . $row[\"email\"] . \"<br>\";\n echo \"Age: \" . $row[\"age\"] . \"<br><br>\";\n }\n} else {\n echo \"No results found.\";\n}\n\n?>"],
      [{
        "type": "text_simple"
      }, "With these two examples we can get all information that are stored in a table and filtered data."],
      [{
        "type": "olist"
      },
      [
        ["text", "-SELECT - Retrieving All Records:"],
        ["text", "--We execute a SELECT query to retrieve all records from the \"users\" table."],
        ["text", "--If there are results, we loop through each row and display the data."],
        ["text", "-SELECT with WHERE - Retrieving Specific Records:"],
        ["text", "--We execute a SELECT query with a WHERE clause to retrieve records where the age is greater than 25."],
        ["text", "--If there are matching results, we display the corresponding data."]
      ]
      ]
    ],
    ["block_h2", "Insert data into table (INSERT)"],
    ["block_content", [{
      "type": "text_simple"
    }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// INSERT - Insert a new record into a table\n$sql = \"INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30)\";\n\nif ($conn->query($sql) === TRUE) {\n echo \"New record inserted successfully.\";\n} else {\n echo \"Error: \" . $sql . \"<br>\" . $conn->error;\n}\n?>"],
      [{
        "type": "text_simple"
      }, "We execute an INSERT query to add a new record to the \"users\" table. If the query is successful, we display a success message; otherwise, we display an error message."]
    ],
    ["block_h2", "Update data from table (UPDATE)"],
    ["block_content", [{
      "type": "text_simple"
    }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// UPDATE - Update an existing record in a table\n$sql = \"UPDATE users SET age = 35 WHERE id = 1\";\n\nif ($conn->query($sql) === TRUE) {\n echo \"Record updated successfully.\";\n} else {\n echo \"Error updating record: \" . $conn->error;\n}\n?>"],
      [{
        "type": "text_simple"
      }, "We execute an UPDATE query to modify the age of a record with a specific ID in the \"users\" table. If the update is successful, we display a success message; otherwise, we display an error message."]
    ],
    ["block_h2", "Delete data from table (DELETE)"],
    ["block_content", [{
      "type": "text_simple"
    }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// DELETE - Delete a record from a table\n$sql = \"DELETE FROM users WHERE id = 2\";\n\nif ($conn->query($sql) === TRUE) {\n echo \"Record deleted successfully.\";\n} else {\n echo \"Error deleting record: \" . $conn->error;\n}\n?>"],
      [{
        "type": "text_simple"
      }, "We execute a DELETE query to remove a record with a specific ID from the \"users\" table. If the deletion is successful, we display a success message; otherwise, we display an error message."]
    ],
    ["block_h2", "Close connection"],
    ["block_content", [{
      "type": "text_simple"
    }, "When we finish to work with a database we must close connection between PHP and MySQL."],
      [{
        "type": "text_simple"
      }, "Example Code:"],
      [{
        "type": "code",
        "language": "php"
      }, "<?php\n// Close the database connection\n$conn->close();\n?>"]
    ]
  ],
  'test': [
    ["block_h1", "titol1"], ["block_h2", "titol2"], ["block_h3", "titol3"], ["block_unit", ["microbit", "microbit", "MICROGIT"]], ["block_content", [{ "type": "text_simple" }, "texto 1"], [{ "type": "text_complex" }, ["text", "texto1"], ["link", "www.google.es", "Google"]], [{ "type": "code" }, "var a = 3;\nvar b = 4;\nconsole.log(a+b);"], [{ "type": "img_center" }, "img/microbit.jpg"], [{ "type": "cols" }, [[{ "type": "text_simple" }, "col1"]], [[{ "type": "text_simple" }, "col2"]]], [{ "type": "ulist" }, [["text", "1"], ["text", "2"], ["text", "3"]]], [{ "type": "olist" }, [["text", "a"], ["text", "b"], ["text", "c"]]], [{ "type": "list_group" }, [["text", "asdf"], ["text", "asdff"], ["text", "asdfff"]]], [{ "type": "h4" }, "titol5"], [{ "type": "btn" }, "unitats/programacio/python/python.html", "Python"]], ["block_content", [{ "type": "text_complex" }, ["text", "hola esto es un text en "], ["bold", "negreta"], ["text", "i segueix i té una altra "], ["bold", "negreta2 amb espais"], ["text", "i també un enllaç "], ["link", "www.google.es", "google"], ["text", "i acaba"]]]
  ]
};
