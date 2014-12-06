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
                            rect: ['520px', '360px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle11',
                            type: 'ellipse',
                            rect: ['520px', '80px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle10',
                            type: 'ellipse',
                            rect: ['237px', '360px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle9',
                            type: 'ellipse',
                            rect: ['237px', '80px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle8',
                            type: 'ellipse',
                            rect: ['380px', '360px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle7',
                            type: 'ellipse',
                            rect: ['380px', '80px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle6',
                            type: 'ellipse',
                            rect: ['100px', '220px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle5',
                            type: 'ellipse',
                            rect: ['660px', '220px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle4',
                            type: 'ellipse',
                            rect: ['660px', '360px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle3',
                            type: 'ellipse',
                            rect: ['660px', '80px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle2',
                            type: 'ellipse',
                            rect: ['100px', '360px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circle1',
                            type: 'ellipse',
                            rect: ['100px', '80px', '40px', '40px', 'auto', 'auto'],
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
                            type: 'text',
                            rect: ['0px', '0px', '268px', '63px', 'auto', 'auto'],
                            id: 'textScores',
                            text: 'SCORES',
                            align: 'center',
                            font: ['Helvetica, Arial, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
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
                            rect: ['111px', '51px', '45px', '45px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(210,13,13,1.00)']
                        },
                        {
                            rect: ['-583px', '110px', '268', '63', 'auto', 'auto'],
                            id: 'scoresButton',
                            symbolName: 'scoresButton',
                            type: 'rect',
                            transform: [[], [], [], ['1', '1.01587']]
                        },
                        {
                            rect: ['-583px', '-117px', '268px', '372px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'scoresDisplay',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,0.77)']
                        },
                        {
                            type: 'rect',
                            id: 'playButton',
                            symbolName: 'playButton',
                            rect: ['-583px', '-24px', '268', '64', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'submitButton',
                            symbolName: 'submitButton',
                            rect: ['-583px', '163px', '268', '64', 'auto', 'auto']
                        },
                        {
                            rect: ['-583px', '69px', '268px', '64px', 'auto', 'auto'],
                            id: 'nameTextBoxPlaceholder',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(164,164,164,0.77)']
                        },
                        {
                            type: 'rect',
                            id: 'backButton',
                            symbolName: 'backButton',
                            rect: ['-476px', '235px', '53', '60', 'auto', 'auto']
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
                            "eid143",
                            "left",
                            1000,
                            500,
                            "easeOutQuart",
                            "${playButton}",
                            '-583px',
                            '0px'
                        ],
                        [
                            "eid158",
                            "left",
                            2000,
                            0,
                            "easeOutQuart",
                            "${playButton}",
                            '0px',
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
                            "eid150",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '111px',
                            '-366px'
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
                            "eid177",
                            "left",
                            6500,
                            500,
                            "easeOutQuart",
                            "${scoresDisplay}",
                            '-583px',
                            '0px'
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
                            "eid151",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '51px',
                            '-426px'
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
                            "eid95",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${playerCircle}",
                            '-477px',
                            '0px'
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
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle11Copy',
                            opacity: '1',
                            rect: ['143px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle10Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle9Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle8Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle7Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle6Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle5Copy',
                            opacity: '1',
                            rect: ['3px', '3px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle4Copy',
                            opacity: '1',
                            rect: ['3px', '143px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle3Copy',
                            opacity: '1',
                            rect: ['283px', '-137px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle2Copy',
                            opacity: '1',
                            rect: ['-277px', '163px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle1Copy',
                            opacity: '1',
                            rect: ['-277px', '-137px', '40px', '40px', 'auto', 'auto'],
                            overflow: 'visible',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
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
                            '143px'
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
                            "eid118",
                            "left",
                            1900,
                            100,
                            "easeOutBounce",
                            "${circle10Copy}",
                            '3px',
                            '-140px'
                        ],
                        [
                            "eid104",
                            "left",
                            1400,
                            100,
                            "easeOutBounce",
                            "${circle5Copy}",
                            '3px',
                            '283px'
                        ],
                        [
                            "eid113",
                            "left",
                            1800,
                            100,
                            "easeOutBounce",
                            "${circle9Copy}",
                            '3px',
                            '-140px'
                        ],
                        [
                            "eid100",
                            "top",
                            1200,
                            100,
                            "easeOutBounce",
                            "${circle3Copy}",
                            '3px',
                            '-137px'
                        ],
                        [
                            "eid96",
                            "top",
                            1000,
                            100,
                            "easeOutBounce",
                            "${circle1Copy}",
                            '3px',
                            '-137px'
                        ],
                        [
                            "eid119",
                            "top",
                            1900,
                            100,
                            "easeOutBounce",
                            "${circle10Copy}",
                            '3px',
                            '143px'
                        ],
                        [
                            "eid99",
                            "left",
                            1100,
                            100,
                            "easeOutBounce",
                            "${circle2Copy}",
                            '3px',
                            '-277px'
                        ],
                        [
                            "eid102",
                            "top",
                            1300,
                            100,
                            "easeOutBounce",
                            "${circle4Copy}",
                            '3px',
                            '143px'
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
                            "eid103",
                            "left",
                            1300,
                            100,
                            "easeOutBounce",
                            "${circle4Copy}",
                            '3px',
                            '283px'
                        ],
                        [
                            "eid117",
                            "top",
                            2000,
                            100,
                            "easeOutBounce",
                            "${circle11Copy}",
                            '3px',
                            '-137px'
                        ],
                        [
                            "eid101",
                            "left",
                            1200,
                            100,
                            "easeOutBounce",
                            "${circle3Copy}",
                            '3px',
                            '283px'
                        ],
                        [
                            "eid114",
                            "top",
                            2100,
                            100,
                            "easeOutBounce",
                            "${circle12Copy}",
                            '3px',
                            '143px'
                        ],
                        [
                            "eid98",
                            "top",
                            1100,
                            100,
                            "easeOutBounce",
                            "${circle2Copy}",
                            '3px',
                            '143px'
                        ],
                        [
                            "eid97",
                            "left",
                            1000,
                            100,
                            "easeOutBounce",
                            "${circle1Copy}",
                            '3px',
                            '-277px'
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
                            '-137px'
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
                            "eid116",
                            "left",
                            2000,
                            100,
                            "easeOutBounce",
                            "${circle11Copy}",
                            '3px',
                            '143px'
                        ],
                        [
                            "eid115",
                            "left",
                            2100,
                            100,
                            "easeOutBounce",
                            "${circle12Copy}",
                            '3px',
                            '143px'
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
                            "eid107",
                            "left",
                            1500,
                            100,
                            "easeOutBounce",
                            "${circle6Copy}",
                            '3px',
                            '-277px'
                        ],
                        [
                            "eid112",
                            "top",
                            1800,
                            100,
                            "easeOutBounce",
                            "${circle9Copy}",
                            '3px',
                            '-137px'
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
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'submitText',
                            text: 'SUBMIT',
                            align: 'center',
                            rect: ['0px', '0px', '268px', '64px', 'auto', 'auto']
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
                            type: 'text',
                            rect: ['0px', '15px', '87px', '44px', 'auto', 'auto'],
                            id: 'backText',
                            text: 'BACK',
                            align: 'center',
                            font: ['Helvetica, Arial, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge%20animate%20game_edgeActions.js");
})("game");
