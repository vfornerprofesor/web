
/**
 * Constant principal de pages, conté el nom de la pàgina
 * i els blocs que van dins d'ella
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
                      ["unitats/programacio/basic/pensament-computacional.html", "img/pensament-computacional.jpg", "Pensament computacional"],
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
                      ["unitats/programacio/scratch/scratch.html", "img/scratch.png", "Scratch"],
                      ["unitats/programacio/app-inventor/app-inventor.html", "img/app_inventor.png", "App Inventor"],
                      [],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Python"],
                  [
                    [
                      "block_unit",
                      ["unitats/programacio/python/python.html", "img/python.png", "Python"],
                      ["unitats/programacio/pythonII/pythonII.html", "img/pythonII.png", "Python II"],
                      [],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Web"],
                  [
                    [
                      "block_unit",
                      ["unitats/programacio/html/html.html", "img/html.png", "HTML"],
                      ["unitats/programacio/css/css.html", "img/css.png", "CSS"],
                      ["unitats/programacio/php/php.html", "img/php.png", "PHP"],
                    ]
                  ]
                ],
                [
                  ["block_h3", "Base de dades"],
                  [
                    ["block_unit", ["unitats/programacio/mysql/mysql.html", "img/mysql.png", "MySQL"], [], []],
                  ]
                ],
                [
                  ["block_h3", "Robòtica"],
                  [
                    ["block_unit", ["unitats/robotica/microbit/microbit.html", "img/microbit.jpg", "Microbit"], [], []],
                  ]
                ]
              ]
            ]
          ]
        ],
        [
          ["block_h2", "APLICACIONS WEB"],
          [
            ["block_unit", ["unitats/aplicacions-web/wordpress/wordpress.html", "img/wordpress.png", "Wordpress"], [], []],
          ]
        ],
        [
          ["block_h2", "INTEL·LIGÈNCIA ARTIFICIAL"],
          [
            [
              "block_unit",
              [
                "unitats/ia/basics/ia.html",
                "img/inteligencia_artificial.jpeg",
                "Conceptes bàsics IA",
              ],
              ["unitats/ia/ferramentes/ferramentes.html", "img/inteligencia_artificial.jpeg", "Ferramentes IA"], []
            ]
          ]
        ],
        [
          ["block_h2", "OFIMÀTICA"],
          [
            ["block_unit", ["unitats/ofimatica/google-spreadsheet/google-spreadsheet.html", "img/google_calcul.png", "Full de càlcul"], [], []],
          ]
        ]
      ]
    ],

  ],
  'test': [
    [
      "block_content",
      [
        {
          "type": "text_complex"
        },
        [
          "text",
          "Esta és una primera fila que conté una "
        ],
        [
          "bold",
          "negreta"
        ],
        [
          "text",
          "i un enllaç "
        ],
        [
          "link",
          "www.google.es",
          "Google"
        ],
        [
          "text",
          "i que s'allarga fins que salte en una altra fila asdf asdf asd fad sfa sdf asdfa sdfas dfas df sdf a sdfa sdf asd fas dfads fasd fasd fa dsfa sdfasdf asdf."
        ]
      ],
      [
        {
          "type": "text_complex"
        },
        [
          "text",
          "Esta és una segona fila que conté una "
        ],
        [
          "bold",
          "negreta"
        ],
        [
          "text",
          "i un enllaç "
        ],
        [
          "link",
          "www.google.es",
          "Google"
        ],
        [
          "text",
          "i que s'allarga fins que salte en una altra fila asdf asdf asd fad sfa sdf asdfa sdfas dfas df sdf a sdfa sdf asd fas dfads fasd fasd fa dsfa sdfasdf asdf."
        ]
      ]
    ]
  ]
};


/**
 * ****************** TÍTOLS *********************
 * ["block_h1", "Unitats"] --> Tipus block_h1 i el títol
 * ["block_h2", "Programació"] --> Tipus block_h2 i el títol
 * ["block_h3", "Blocs"] --> Tipus block_h3 i el títol
 * 
 * 
 * 
 * 
 * ****************** UNITAT *********************
 * [
 *  "block_unit",
 *    ["scratch", "scratch", "Scratch"],
 *    ["app_inventor", "app_inventor", "App Inventor"],
 *    [],
 * ]
 * Tipus, columna1, columna2 i columna 3
 * Cada columna té 3: enllaç a la pàgina (de urls.js), imatge (de imgs.js) i el text que va al botó
 * 
 * 
 * 
 * 
 * ****************** CONTINGUT *********************
 * ["block_content", [], [], etc ]
 * El tipus block_content va seguit de cada element de tipus contingut
 * 
 * 
 * 
 * 
 * ****************** Text simple *********************
 * [
 *  {"type": "text_simple"}, 
 *  "Ací va el text"
 * ]
 * Té el type que inclou totes les propietats extra de css però la propietat principal és type
 * El segon element de la llista és el text
 * 
 * 
 * 
 * 
 * ****************** Text complex *********************
 * 
 * 
 * 
 * 
 * 
 * 
 * ****************** Codi *********************
 * [
 *  {"type": "code", "language": "php"},
 *  "<?php echo 'hola' ?>"
 * ]
 * Primer element array que ha de contindre type:code i language:el_que_siga
 * Segon element el codi entre cometes se poden escapar les cometes amb \"
 * 
 * 
 * 
 * 
 * ****************** H4 *********************
 * 
 * 
 * 
 * ****************** OLIST, ULIST *********************
 * [
 *  { "type": "olist" },
 *  [
 *    ["text", "-Element 1"],
 *    ["text", "--Element 1.1"],
 *    ["text", "--Element 1.2"],
 *    ["text", "-Element 2"],
 *    ["text", "-Element 3"],
 *  ]
 * ]
 * El primer element és un array amb type:olist o type:ulist
 * El segon element és una llista de llistes i cada una té en el primer element text
 * i en el segon el text seguit del nivell de la llista
 * 
 * 
 * 
 * 
 * ****************** TEXT COMPLEX *********************
 * [
 *  { "type": "text_complex" },
 *  ["text", "Text normal"],
 *  ["bold", "Text en negreta"],
 *  ["link", "enllaç", "text"],
 * ]
 * Primer element un array amb type:text_complex
 * Els següents elements ja són els que formen part del text:
 * - Bold: text en negreta
 * - Text: text normal
 * - Link: enllaç
 * 
 * 
 * 
 * 
 */