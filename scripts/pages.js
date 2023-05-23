/*
block_h1 --> titol
block_h2 --> titol
block_unit --> [img, url, text botó], [img, url, text botó]...
*/

const pages = {
    'unitats': [
        ['block_h1', 'Unitats'],
        ['block_h2', 'PROGRAMACIÓ'],
        ['block_h3', 'Blocs'],
        ['block_unit', ['scratch', 'scratch', 'Scratch'], ['app_inventor', 'app_inventor', 'App Inventor']],
        ['block_h3', 'Python'],
        ['block_unit', ['python', 'python', 'Python'], ['pythonII', 'pythonII', 'Python II']],
        ['block_h3', 'Web'],
        ['block_unit', ['html', 'html', 'HTML'], ['css', 'css', 'CSS'], ['php', 'php', 'PHP']],
        ['block_h3', 'Base de dades'],
        ['block_unit', ['mysql', 'mysql', 'MySQL']],
        ['block_h3', 'Robòtica'],
        ['block_unit', ['microbit', 'microbit', 'Microbit']],
        ['block_h2', 'APLICACIONS WEB'],
        ['block_unit', ['wordpress', 'wordpress', 'Wordpress']],
        ['block_h2', 'INTEL·LIGÈNCIA ARTIFICIAL'],
        ['block_unit', ['inteligencia_artificial', 'inteligencia_artificial', 'Conceptes bàsics IA'], ['inteligencia_artificial', 'inteligencia_artificial', 'Ferramentes IA']],
        ['block_h2', 'OFIMÀTICA'],
        ['block_unit', ['google_calcul', 'google_calcul', 'Full de càlcul']],
    ],
    'microbit': [
        ['block_content', [
            'text_complex',
                ['text', 'Curs extret del'],
                ['link', 'https://sites.google.com/site/migueltecnologia/1%C2%BA-eso/computaci%C3%B3n-y-rob%C3%B3tica-1/tema-4-rob%C3%B3tica-con-maqueen', 'material'],
                ['text', "de Miguel Tecnologia de l'IES José Saramargo"]
            ]
        ],
        ['block_h2', 'Què és?'],
        ['block_content', [
            'text', "La tarjeta microbit és una placa que es pot programar perquè execute instruccions i realitze tasques. A més, es pot connectar al robot Maqueen per tal d'ampliar funcionalitat i donar-li mobilitat",
            ],[
            'img_center', 'img/microbit.jpg'  
            ], [
            'text', "A continuació podrem veure tots els sensors i actuadors que té el robot:"
            ],[
            'img_center', 'img/robotica/microbit/maqueen.png'  
            ]
        ],
        ['block_h2', 'Motors'],
        ['block_content', [
            'text_complex',
                ['text', "Per començar a programar hem d'accedir a"],
                ['link', 'https://makecode.microbit.org/', 'Makecode'],
            ], [
            'text', "Allí afegirem l'extensió Maqueen des de l'apartat Extensions, on buscarem Maqueen"
            ], [
            'cols',
                [['img_center', "img/robotica/microbit/01.png"]],
                [['img_center', "img/robotica/microbit/02.png"]]
            ], [
            'text', "Des d'aleshores tindrem un apartat anomenat Maqueen que tindrà tots els blocs per controlar el robot, tant per rebre informació dels sensors com per enviar-li informació perquè realitze alguna cosa."
            ],[
            'img_center', 'img/robotica/microbit/03.png'  
            ], [
            'text', "El bloc motor ens permet moure o un dels dos motors o els dos a la vegada. A més ens indica si volem avançar o tirar enrere i la velocitat a la que ho volem fer. La velocitat pot tindre un valor entre 0 i 255."
            ], [
            'text', "A més, el bloc Parar ens permetrà para un o els dos motors del robot."
            ], [
            'text', "Amb tot açò podem fer diferents accions:"
            ], [
            'list_group', [
                ['text', "Moure avant: posar els dos motors en marxa"],
                ['text', "Tirar enrere: posar els dos motors en marxa cap enrere"],
                ['text', "Parar: posar els dos motors en pausa"],
                ['text', "Girar: podem posar només un motor en marxa o un en marxa cap endavant i l'altre cap enrere"]
                ]
            ]
        ],
    ]
};