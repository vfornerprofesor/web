pages['microbit'] = [
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
  ];