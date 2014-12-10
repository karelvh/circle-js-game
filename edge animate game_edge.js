/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Helvetica, Arial, sans-serif': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'circle12',
                            type: 'ellipse',
                            rect: ['560px', '390px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle11',
                            type: 'ellipse',
                            rect: ['560px', '47px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle10',
                            type: 'ellipse',
                            rect: ['197px', '390px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle9',
                            type: 'ellipse',
                            rect: ['197px', '47px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle8',
                            type: 'ellipse',
                            rect: ['380px', '390px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle7',
                            type: 'ellipse',
                            rect: ['380px', '47px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle6',
                            type: 'ellipse',
                            rect: ['28px', '220px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle5',
                            type: 'ellipse',
                            rect: ['734px', '220px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle4',
                            type: 'ellipse',
                            rect: ['734px', '390px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle3',
                            type: 'ellipse',
                            rect: ['734px', '47px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle2',
                            type: 'ellipse',
                            rect: ['28px', '390px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle1',
                            type: 'ellipse',
                            rect: ['28px', '47px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'playerCircle',
                            type: 'ellipse',
                            rect: ['377px', '217px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(210,13,13,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'introSymbol',
                            symbolName: 'introSymbol',
                            type: 'rect',
                            rect: ['377', '217', '45', '45', 'auto', 'auto']
                        },
                        {
                            id: 'scoreText',
                            display: 'none',
                            type: 'text',
                            rect: ['756px', '450px', '44px', '30px', 'auto', 'auto'],
                            text: "0",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'timerText',
                            type: 'text',
                            rect: ['1px', '450px', '216px', '30px', 'auto', 'auto'],
                            text: "00:00:00",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'startScreen',
                            symbolName: 'startScreen',
                            type: 'rect',
                            rect: ['266', '166', '268', '148', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '480px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(234,234,234,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scoreText}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "scoresButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '1px', '268px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'scoresRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,1)']
                        },
                        {
                            rect: ['0px', '0px', '268px', '63px', 'auto', 'auto'],
                            font: ['Helvetica, Arial, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'textScores',
                            text: 'SCORES',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '63px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "playButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '1px', '268px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'playRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,1)']
                        },
                        {
                            font: ['Helvetica, Arial, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'textPlay',
                            text: 'PLAY',
                            align: 'center',
                            rect: ['0px', '1px', '268px', '63px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "startScreen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['111px', '51px', '45px', '45px', 'auto', 'auto'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(210,13,13,1.00)']
                        },
                        {
                            transform: [[], [], [], ['1', '1.01587']],
                            id: 'scoresButton',
                            symbolName: 'scoresButton',
                            rect: ['-583px', '110px', '268', '63', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['-109px', '-139px', '486px', '434px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'scoresDisplay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,0.95)']
                        },
                        {
                            rect: ['-583px', '-24px', '268', '64', 'auto', 'auto'],
                            id: 'playButton',
                            symbolName: 'playButton',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.69063', '0.69063']],
                            id: 'replayButton',
                            symbolName: 'replayButton',
                            rect: ['-583px', '182px', '269', '75', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            font: ['Helvetica, Arial, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'orReplayText',
                            text: 'or replay instead',
                            align: 'center',
                            rect: ['-583px', '156px', '170px', '33px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.6953', '0.80933']],
                            id: 'submitButton',
                            symbolName: 'submitButton',
                            rect: ['-583px', '90px', '268', '64', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'nameTextBoxPlaceholder',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-583px', '0px', '268px', '64px', 'auto', 'auto'],
                            fill: ['rgba(164,164,164,0.77)']
                        },
                        {
                            rect: ['-476px', '235px', '53', '60', 'auto', 'auto'],
                            id: 'backButton',
                            symbolName: 'backButton',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "endscreen": 0,
                        "start": 2000,
                        "startSnel": 4000,
                        "scores": 6000
                    },
                    data: [
                        [
                            "eid182",
                            "left",
                            0,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '-583px',
                            '-583px'
                        ],
                        [
                            "eid158",
                            "left",
                            2000,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '-583px',
                            '-583px'
                        ],
                        [
                            "eid80",
                            "left",
                            4500,
                            500,
                            "easeOutQuart",
                            "${playButton}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid173",
                            "left",
                            6000,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '0px',
                            '-583px'
                        ],
                        [
                            "eid151",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '51px',
                            '-426px'
                        ],
                        [
                            "eid153",
                            "display",
                            2000,
                            0,
                            "easeOutQuart",
                            "${Ellipse}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid155",
                            "top",
                            2000,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '-24px',
                            '-24px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            0,
                            "linear",
                            "${scoresButton}",
                            '-583px',
                            '-583px'
                        ],
                        [
                            "eid82",
                            "left",
                            4500,
                            500,
                            "easeOutQuart",
                            "${scoresButton}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid174",
                            "left",
                            6000,
                            0,
                            "easeOutQuart",
                            "${scoresButton}",
                            '0px',
                            '-583px'
                        ],
                        [
                            "eid180",
                            "left",
                            6500,
                            500,
                            "linear",
                            "${backButton}",
                            '-476px',
                            '-248px'
                        ],
                        [
                            "eid170",
                            "left",
                            1000,
                            500,
                            "easeOutQuart",
                            "${nameTextBoxPlaceholder}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid172",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${nameTextBoxPlaceholder}",
                            '0px',
                            '-583px'
                        ],
                        [
                            "eid149",
                            "width",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '45px',
                            '1000px'
                        ],
                        [
                            "eid177",
                            "left",
                            6500,
                            500,
                            "easeOutQuart",
                            "${scoresDisplay}",
                            '-765px',
                            '-109px'
                        ],
                        [
                            "eid161",
                            "left",
                            1000,
                            500,
                            "easeOutQuart",
                            "${submitButton}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid165",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${submitButton}",
                            '0px',
                            '-583px'
                        ],
                        [
                            "eid148",
                            "height",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '45px',
                            '1000px'
                        ],
                        [
                            "eid197",
                            "left",
                            1000,
                            500,
                            "easeOutQuart",
                            "${replayButton}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid199",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${replayButton}",
                            '0px',
                            '-583px'
                        ],
                        [
                            "eid203",
                            "left",
                            1000,
                            500,
                            "easeOutQuart",
                            "${orReplayText}",
                            '-583px',
                            '49px'
                        ],
                        [
                            "eid206",
                            "left",
                            2000,
                            0,
                            "easeOutQuart",
                            "${orReplayText}",
                            '49px',
                            '-583px'
                        ],
                        [
                            "eid150",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '111px',
                            '-366px'
                        ]
                    ]
                }
            },
            "playerCircleIntro": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-477px', '-477px', '1000px', '1000px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'playerCircle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(201,36,36,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid93",
                            "height",
                            0,
                            1000,
                            "easeOutBounce",
                            "${playerCircle}",
                            '1000px',
                            '45px'
                        ],
                        [
                            "eid92",
                            "width",
                            0,
                            1000,
                            "easeOutBounce",
                            "${playerCircle}",
                            '1000px',
                            '45px'
                        ],
                        [
                            "eid94",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${playerCircle}",
                            '-477px',
                            '0px'
                        ],
                        [
                            "eid95",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${playerCircle}",
                            '-477px',
                            '0px'
                        ]
                    ]
                }
            },
            "introSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle12Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['183px', '173px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle11Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['143px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle10Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle9Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle8Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle7Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle5Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle4Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['3px', '143px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle3Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['311px', '-120px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle2Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-349px', '175px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle1Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-349px', '-180px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['-477px', '-477px', '1000px', '1000px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(210,13,13,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 2200,
                    autoPlay: true,
                    data: [
                        [
                            "eid110",
                            "top",
                            1700,
                            100,
                            "easeOutBounce",
                            "${circle8Copy}",
                            '3px',
                            '173px'
                        ],
                        [
                            "eid111",
                            "left",
                            1700,
                            0,
                            "easeOutBounce",
                            "${circle8Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid102",
                            "top",
                            1300,
                            100,
                            "easeOutBounce",
                            "${circle4Copy}",
                            '3px',
                            '173px'
                        ],
                        [
                            "eid96",
                            "top",
                            1000,
                            100,
                            "easeOutBounce",
                            "${circle1Copy}",
                            '3px',
                            '-170px'
                        ],
                        [
                            "eid113",
                            "left",
                            1800,
                            100,
                            "easeOutBounce",
                            "${circle9Copy}",
                            '3px',
                            '-180px'
                        ],
                        [
                            "eid112",
                            "top",
                            1800,
                            100,
                            "easeOutBounce",
                            "${circle9Copy}",
                            '3px',
                            '-170px'
                        ],
                        [
                            "eid107",
                            "left",
                            1500,
                            100,
                            "easeOutBounce",
                            "${circle6Copy}",
                            '3px',
                            '-349px'
                        ],
                        [
                            "eid119",
                            "top",
                            1900,
                            100,
                            "easeOutBounce",
                            "${circle10Copy}",
                            '3px',
                            '173px'
                        ],
                        [
                            "eid99",
                            "left",
                            1100,
                            100,
                            "easeOutBounce",
                            "${circle2Copy}",
                            '3px',
                            '-349px'
                        ],
                        [
                            "eid106",
                            "top",
                            1500,
                            0,
                            "easeOutBounce",
                            "${circle6Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid128",
                            "height",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '1000px',
                            '45px'
                        ],
                        [
                            "eid105",
                            "top",
                            1400,
                            0,
                            "easeOutBounce",
                            "${circle5Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid103",
                            "left",
                            1300,
                            100,
                            "easeOutBounce",
                            "${circle4Copy}",
                            '3px',
                            '357px'
                        ],
                        [
                            "eid117",
                            "top",
                            2000,
                            100,
                            "easeOutBounce",
                            "${circle11Copy}",
                            '3px',
                            '-170px'
                        ],
                        [
                            "eid116",
                            "left",
                            2000,
                            100,
                            "easeOutBounce",
                            "${circle11Copy}",
                            '3px',
                            '183px'
                        ],
                        [
                            "eid114",
                            "top",
                            2100,
                            100,
                            "easeOutBounce",
                            "${circle12Copy}",
                            '3px',
                            '173px'
                        ],
                        [
                            "eid108",
                            "left",
                            1600,
                            0,
                            "easeOutBounce",
                            "${circle7Copy}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid97",
                            "left",
                            1000,
                            100,
                            "easeOutBounce",
                            "${circle1Copy}",
                            '3px',
                            '-349px'
                        ],
                        [
                            "eid130",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '-477px',
                            '0px'
                        ],
                        [
                            "eid109",
                            "top",
                            1600,
                            100,
                            "easeOutBounce",
                            "${circle7Copy}",
                            '3px',
                            '-170px'
                        ],
                        [
                            "eid129",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '-477px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "width",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '1000px',
                            '45px'
                        ],
                        [
                            "eid98",
                            "top",
                            1100,
                            100,
                            "easeOutBounce",
                            "${circle2Copy}",
                            '3px',
                            '173px'
                        ],
                        [
                            "eid100",
                            "top",
                            1200,
                            100,
                            "easeOutBounce",
                            "${circle3Copy}",
                            '3px',
                            '-170px'
                        ],
                        [
                            "eid115",
                            "left",
                            2100,
                            100,
                            "easeOutBounce",
                            "${circle12Copy}",
                            '3px',
                            '183px'
                        ],
                        [
                            "eid118",
                            "left",
                            1900,
                            100,
                            "easeOutBounce",
                            "${circle10Copy}",
                            '3px',
                            '-180px'
                        ],
                        [
                            "eid104",
                            "left",
                            1400,
                            100,
                            "easeOutBounce",
                            "${circle5Copy}",
                            '3px',
                            '357px'
                        ],
                        [
                            "eid101",
                            "left",
                            1200,
                            100,
                            "easeOutBounce",
                            "${circle3Copy}",
                            '3px',
                            '357px'
                        ]
                    ]
                }
            },
            "submitButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '268px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'submitRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '268px', '64px', 'auto', 'auto'],
                            id: 'submitText',
                            text: 'SUBMIT',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "backButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '4px', '87px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'backRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '15px', '87px', '44px', 'auto', 'auto'],
                            font: ['Helvetica, Arial, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'backText',
                            text: 'BACK',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "replayButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '268px', '75px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'replayRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(234,101,43,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['1px', '8px', '268px', '67px', 'auto', 'auto'],
                            id: 'replayText',
                            text: 'REPLAY',
                            align: 'center',
                            font: ['Helvetica, Arial, sans-serif', [50, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '269px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge%20animate%20game_edgeActions.js");
})("game");
