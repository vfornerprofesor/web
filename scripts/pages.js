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
  unitats2: [
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
  unitats: [

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
                  ["block_h3", "Bàsic"],
                  [
                    [
                      "block_unit",
                      ["pensament-computacional", "pensament-computacional", "Pensament computacional"],
                      [],
                      [],
                    ]
                  ]
                ],
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

  
  'test': [
    ["block_h1", "titol1"], ["block_h2", "titol2"], ["block_h3", "titol3"], ["block_unit", ["microbit", "microbit", "MICROGIT"]], ["block_content", [{ "type": "text_simple" }, "texto 1"], [{ "type": "text_complex" }, ["text", "texto1"], ["link", "www.google.es", "Google"]], [{ "type": "code" }, "var a = 3;\nvar b = 4;\nconsole.log(a+b);"], [{ "type": "img_center" }, "img/microbit.jpg"], [{ "type": "cols" }, [[{ "type": "text_simple" }, "col1"]], [[{ "type": "text_simple" }, "col2"]]], [{ "type": "ulist" }, [["text", "1"], ["text", "2"], ["text", "3"]]], [{ "type": "olist" }, [["text", "a"], ["text", "b"], ["text", "c"]]], [{ "type": "list_group" }, [["text", "asdf"], ["text", "asdff"], ["text", "asdfff"]]], [{ "type": "h4" }, "titol5"], [{ "type": "btn" }, "unitats/programacio/python/python.html", "Python"]], ["block_content", [{ "type": "text_complex" }, ["text", "hola esto es un text en "], ["bold", "negreta"], ["text", "i segueix i té una altra "], ["bold", "negreta2 amb espais"], ["text", "i també un enllaç "], ["link", "www.google.es", "google"], ["text", "i acaba"]]]
  ]
};
