pages['python'] = [
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
  ];
pages["py-01-algoritmes"] = [
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
  ];