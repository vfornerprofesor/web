/*
block_h1 --> titol
block_h2 --> titol
block_unit --> [img, url, text botó], [img, url, text botó]...
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
    ],
    ["block_h3", "Python"],
    [
      "block_unit",
      ["python", "python", "Python"],
      ["pythonII", "pythonII", "Python II"],
    ],
    ["block_h3", "Web"],
    [
      "block_unit",
      ["html", "html", "HTML"],
      ["css", "css", "CSS"],
      ["php", "php", "PHP"],
    ],
    ["block_h3", "Base de dades"],
    ["block_unit", ["mysql", "mysql", "MySQL"]],
    ["block_h3", "Robòtica"],
    ["block_unit", ["microbit", "microbit", "Microbit"]],
    ["block_h2", "APLICACIONS WEB"],
    ["block_unit", ["wordpress", "wordpress", "Wordpress"]],
    ["block_h2", "INTEL·LIGÈNCIA ARTIFICIAL"],
    [
      "block_unit",
      [
        "inteligencia_artificial",
        "inteligencia_artificial",
        "Conceptes bàsics IA",
      ],
      ["inteligencia_artificial", "inteligencia_artificial", "Ferramentes IA"],
    ],
    ["block_h2", "OFIMÀTICA"],
    ["block_unit", ["google_calcul", "google_calcul", "Full de càlcul"]],
  ],
  microbit: [
    ["block_h1", "MICROBIT"],
    [
      "block_content",
      [
        "text_complex",
        ["text", "Curs extret del"],
        [
          "link",
          "https://sites.google.com/site/migueltecnologia/1%C2%BA-eso/computaci%C3%B3n-y-rob%C3%B3tica-1/tema-4-rob%C3%B3tica-con-maqueen",
          "material",
        ],
        ["text", "de Miguel Tecnologia de l'IES José Saramargo"],
      ],
    ],
    ["block_h2", "Què és?"],
    [
      "block_content",
      [
        "text_simple",
        "La tarjeta microbit és una placa que es pot programar perquè execute instruccions i realitze tasques. A més, es pot connectar al robot Maqueen per tal d'ampliar funcionalitat i donar-li mobilitat",
      ],
      ["img_center", "img/microbit.jpg"],
      [
        "text_simple",
        "A continuació podrem veure tots els sensors i actuadors que té el robot:",
      ],
      ["img_center", "img/robotica/microbit/maqueen.png"],
    ],
    ["block_h2", "Motors"],
    [
      "block_content",
      [
        "text_complex",
        ["text", "Per començar a programar hem d'accedir a"],
        ["link", "https://makecode.microbit.org/", "Makecode"],
      ],
      [
        "text_simple",
        "Allí afegirem l'extensió Maqueen des de l'apartat Extensions, on buscarem Maqueen",
      ],
      [
        "cols",
        [["img_center", "img/robotica/microbit/01.png"]],
        [["img_center", "img/robotica/microbit/02.png"]],
      ],
      [
        "text_simple",
        "Des d'aleshores tindrem un apartat anomenat Maqueen que tindrà tots els blocs per controlar el robot, tant per rebre informació dels sensors com per enviar-li informació perquè realitze alguna cosa.",
      ],
      ["img_center", "img/robotica/microbit/03.png"],
      [
        "text_simple",
        "El bloc motor ens permet moure o un dels dos motors o els dos a la vegada. A més ens indica si volem avançar o tirar enrere i la velocitat a la que ho volem fer. La velocitat pot tindre un valor entre 0 i 255.",
      ],
      [
        "text_simple",
        "A més, el bloc Parar ens permetrà para un o els dos motors del robot.",
      ],
      ["text_simple", "Amb tot açò podem fer diferents accions:"],
      [
        "list_group",
        [
          ["text", "Moure avant: posar els dos motors en marxa"],
          ["text", "Tirar enrere: posar els dos motors en marxa cap enrere"],
          ["text", "Parar: posar els dos motors en pausa"],
          [
            "text",
            "Girar: podem posar només un motor en marxa o un en marxa cap endavant i l'altre cap enrere",
          ],
        ],
      ],
    ],
    ["block_h3", "Activitats"],
    [
      "block_content",
      ["h4", "Activitat 1"],
      [
        "text_simple",
        "Fes que el robot Maqueen es moga avant 2 segons, després enrere 2 segons. A continuació 3 segons avant, que gire 180º i que torne 3 segons cap a la posició inicial. Després que gire i que faça un quadrat com el de la imatge.",
      ],
      [
        "cols",
        [["img_center", "img/robotica/microbit/04.png"]],
        [["img_center", "img/robotica/microbit/05.png"]],
        [["img_center", "img/robotica/microbit/06.png"]],
      ],
    ],
    [
      "block_content",
      ["h4", "Activitat 2"],
      [
        "text_simple",
        "Fes que el robot Maqueen realitze el següent cami esquivant objectes:",
      ],
      ["img_center", "img/robotica/microbit/07.png"],
    ],
  ],
  python: [
    ["block_h1", "Python"],
    [
      "block_content",
      [
        "cols",
        [
          ["img_center", "img/python.png"],
          ["btn", "unitats/programacio/python/py-00-xuleta.html", "Xuleta"],
        ],
        [
          [
            "btn",
            "unitats/programacio/python/py-01-algoritmes.html",
            "01 - Algoritmes",
          ],
          [
            "btn",
            "unitats/programacio/python/py-02-variables.html",
            "02 - Variables",
          ],
          [
            "btn",
            "unitats/programacio/python/py-03-operacions-text.html",
            "03 - Operacions amb text",
          ],
          [
            "btn",
            "unitats/programacio/python/py-04-llistes.html",
            "04 - Llistes",
          ],
        ],
        [
          [
            "btn",
            "unitats/programacio/python/py-05-interaccio.html",
            "05 - Interacció amb l'usuari",
          ],
          [
            "btn",
            "unitats/programacio/python/py-06-condicionals.html",
            "06 - Condicionals",
          ],
          [
            "btn",
            "unitats/programacio/python/py-07-bucles.html",
            "07 - Bucles",
          ],
          [
            "btn",
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
        "text_complex",
        ["text", "Un"],
        ["bold", "programa informàtic"],
        [
          "text",
          "és aquell text que inclou les instruccions necessàries perquè un ordinador execute una tasca o resolga un problema. Estos programes informàtics formen el",
        ],
        ["bold", "software"],
        ["text", "d'un ordinador."],
      ],
      [
        "text_complex",
        ["text", "Els programes informàtics estan formats per"],
        ["bold", "algoritmes"],
        [
          "text",
          "que són els passos concrets que s'han de seguir per realitzar una tasca concreta. Les característiques dels algoritmes són les següents:",
        ],
      ],
      [
        "ulist",
        [
          [
            "text",
            "Descripció no ambigua: les instruccions no han de presentar diferents sentits, han de ser clares",
          ],
          [
            "text",
            "S'han de definir les entrades del programa, és a dir, els valors que necessita el programa per treballar",
          ],
          [
            "text",
            "S'han de definir les eixides del programa, és a dir, els valors finals que s'han d'obtindre",
          ],
          ["text", "No ha de donar mai error"],
        ],
      ],
      [
        "text_simple",
        "Exemple d'algoritme: donada una llista de números positius, s'ha de tornar el major.",
      ],
      [
        "ulist",
        [
          ["text", "-Entrada: Llista L amb els números positius"],
          ["text", "-Eixida: Una caixa que s'anomene max"],
          ["text", "-Algoritme:"],
          ["text", "--max serà 0"],
          ["text", "--Recorrer la llista"],
          [
            "text",
            "---Si el número que estem llegint és major que max, assignem a max el valor del número",
          ],
          ["text", "--Mostrar per pantalla el contingut de la variable max"],
        ],
      ],
    ],
    ["block_h2", "Diagrames de flux"],
    [
      "block_content",
      [
        "cols",
        [["img_center", "img/unitats/programacio/python/algoritmes01.png"]],
        [["img_center", "img/unitats/programacio/python/algoritmes02.png"]]
      ],
    ],
    [
      "block_content",
      [
        "text_simple",
        "Un diagrama de flux és la representació gràfica d'un algoritme a través de símbols.",
      ],
      [
        "text_simple",
        "Ens permeten crear l'estructura de l'algoritme i interpretar-la de manera fàcil. A més, és el primer pas abans d'escriure un algoritme en un llenguatge de programació que interprete l'ordinador.",
      ],
      ["text_simple", "Els principals elements d'un diagrama de flux són:"],
    ],
    [
      "block_content",
      [
        "cols",
        [
          ["h4", "Terminal"],
          [
            "text_simple",
            "S'utilitza per indicar l'inici i el final de l'algoritme",
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes03.png"]]
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          ["h4", "Entrada i eixida de dades"],
          [
            "text_simple",
            "S'utilitza per aportar-li dades a l'algoritme perquè puga treballar i executar les instruccions i també per mostrar el resultat final del programa. Es pot diferenciar per colors l'entrada i l'eixida",
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes04.png"]]
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          ["h4", "Procés"],
          [
            "text_simple",
            "Executa una ordre, assignació, calcular una operació o un altre tipus d'instrucció.",
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes05.png"]]
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          ["h4", "Decisió"],
          [
            "text_simple",
            "Serveix perquè partint d'una condició puga'm fer que isquen diferents camins, un positiu i un negatiu.",
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes06.png"]]
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          ["h4", "Línies o fletxes"],
          ["text_simple", "Serveixen per unir tots els anteriors elements"],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes07.png"]]
      ],
    ],
    ["block_h3", "Característiques dels diagrames de flux"],
    [
      "block_content",
      ["text_simple", "Tot diagrama de flux ha de seguir les següents regles:"],
      [
        "olist",
        [
          ["text", "-Ha de tindre un inici i un final"],
          ["text", "-Tots els símbols han d'estar connectats"],
          ["text", "-A un procés pot arribar-li varies linies"],
          [
            "text",
            "-A un símbol de desició poden arribar-li varies linies però només eixiran 2, Si o No",
          ],
          ["text", "-A un símbol d'inici mai li arriben linies"],
          ["text", "-D'un símbol de final mai eixiran linies"],
          [
            "text",
            "-Les linies de connexió són rectes verticals o horitzontals",
          ],
          [
            "text",
            "-Per dibuixar els símbols es comença de dalt a l'esquerra cap a baix a la dreta",
          ],
        ],
      ],
    ],
    ["block_h3", "Exemples"],
    [
      "block_content",
      [
        "cols",
        [
          [
            "text_complex",
            ["bold", "Algoritme per cuinar un ou per a una altra persona."],
          ],
          [
            "olist",
            [
              ["text", "Pregunte si el vol fregit."],
              ["text", "Si diu que si, es frig, sinó es bull."],
              ["text", "Preguntar si vol sal."],
              ["text", "Si vol sal, tirar-ne, sinó res."],
              ["text", "Servir-lo al plat."],
            ],
          ],
        ],
        [
          ["img_center", "img/unitats/programacio/python/algoritmes08.png"],
        ],
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          [
            "text_complex",
            ["bold", "Algoritme que sume dos números i mostre el resultat."],
          ],
          [
            "olist",
            [
              ["text", "Llegir el primer número en la variable A"],
              ["text", "Llegir el segon número en la variable B"],
              ["text", "Calcular suma de A i B i guardar-ho en SUMA"],
              [
                "text",
                'Mostrar "El resultat és " i el valor de la variable SUMA',
              ],
            ],
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes09.png"]]
      ],
    ],
    [
      "block_content",
      [
        "cols",
        [
          [
            "text_complex",
            [
              "bold",
              "Algoritme que comprova si has d'eixir de festa el cap de setmana o quedar-te estudiant.",
            ],
          ],
        ],
        [["img_center", "img/unitats/programacio/python/algoritmes10.png"]]
      ],
    ],
    ["block_h2", "Activitats"],
    [
      "block_content",
      [
        "text_complex",
        ["text", "Utilitzarem la ferramenta"],
        ["link", "https://draw.io", "draw.io"],
        [
          "text",
          "per representar els algoritmes dels exercicis. Després, recorda pujar-los a aules.",
        ],
      ],
      [
        "text_complex",
        ["bold", "Exercici 1:"],
        ["text", "Mostra el resultat de l'àrea d'un triangle per pantalla"],
      ],
      [
        "text_complex",
        ["bold", "Exercici 2:"],
        ["text", "Indica si un número que s'indica és parell o imparell"],
      ],
      [
        "text_complex",
        ["bold", "Exercici 3:"],
        ["text", "Mostra la suma dels 50 primers números positius (inclou la REPETICIÓ, és a dir, ha de tornar enrere amb fletxes)"],
      ],[
        "text_complex",
        ["bold", "Exercici 4:"],
        ["text", "Escriu un programa que obtinga una llista de números i diga quin és el major"],
      ],[
        "text_complex",
        ["bold", "Exercici 5:"],
        ["text", "Escriu un algoritme que llija 100 números i que mostre la suma"],
      ],[
        "text_complex",
        ["bold", "Exercici 6:"],
        ["text", "Escriu un programa que simule el funcionament d'un rellotge"],
      ],[
        "text_complex",
        ["bold", "Exercici 7:"],
        ["text", "Escriu un programa que comprove si un any que escriu l'usuari és bisiest:"],
      ],
      [
        "ulist",
        [
          ["text", "-Un any és bisiest si:"],
          ["text", "--És múltiple de 4 però no de 100 ni de 400"],
          ["text", "--És múltiple de 4 i també de 100 i de 400"],
          ["text", "-No serà bisiest si:"],
          ["text", "--No és múltiple de 4"],
          ["text", "--És múltiple de 4 i de 100 però no de 400"],
        ],
      ],
    ],
  ],
  test: [
    ["block_h1", "TEST"],
    ["block_h2", "Subtitol"],
    ["block_unit", ["microbit", "microbit", "Microbit"]],
    [
      "block_content",
      ["text_simple", "Este es un paràgraf"],
      [
        "olist",
        [
          ["text", "1"],
          ["text", "2"],
          ["text", "3"],
        ],
      ],
      ["img_center", "img/microbit.jpg"],
    ],
  ],
};
