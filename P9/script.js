var calcul = new Phaser.Game(410, 520, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    calcul.load.spritesheet('button', 'but.png', 90,90);
    calcul.load.spritesheet('button2', 'but2.png', 90,90);
    calcul.load.spritesheet('button3', 'but3.png', 90,90);
    

}

var button;
var value=0;
var operador;
var display="";
var sol;
var text_button, text_calcul;

function create() {


    calcul.stage.backgroundColor = "black";
    var x1=10;
    var x2=x1+100;
    var x3=x2+100;
    var x4=x3+100;

    var y1=125;
    var y2=y1+100;
    var y3=y2+100;
    var y4=y3+100;

    var style = { font: "55px Times New Roman", fill: "white", };
    text_calcul = calcul.add.text(10, 10, display, style);



    //PRIMERA FILA

    button_7 = calcul.add.button(x1, y1, 'button3', actionOnClick, {keyname:7});
    text_button = calcul.add.text(x1+30, y1+20, "7", style);

    button_8 = calcul.add.button(x2, y1, 'button3', actionOnClick, {keyname:8});
    text_button = calcul.add.text(x2+30, y1+20, "8", style);

    button_9 = calcul.add.button(x3, y1, 'button3', actionOnClick, {keyname:9});
    text_button = calcul.add.text(x3+30, y1+20, "9", style);

    button_div = calcul.add.button(x4, y1, 'button2', actionOperador, {keyname:'/'});
    text_button = calcul.add.text(x4+30, y1+20, "/", style);


    //SEGUNDA FILA

    button_4 = calcul.add.button(x1, y2, 'button3', actionOnClick, {keyname:4});
    text_button = calcul.add.text(x1+30, y2+20, "4", style);

    button_5 = calcul.add.button(x2, y2, 'button3', actionOnClick, {keyname:5});
    text_button = calcul.add.text(x2+30, y2+20, "5", style);

    button_6 = calcul.add.button(x3, y2, 'button3', actionOnClick, {keyname:6});
    text_button = calcul.add.text(x3+30, y2+20, "6", style);

    button_multiply = calcul.add.button(x4, y2, 'button2', actionOperador, {keyname:'*'});
    text_button = calcul.add.text(x4+30, y2+20, "X", style);


    //TERCERA FILA

    button_1 = calcul.add.button(x1, y3, 'button3', actionOnClick, {keyname:1});
    text_button = calcul.add.text(x1+30, y3+20, "1", style);

    button_2 = calcul.add.button(x2, y3, 'button3', actionOnClick, {keyname:2});
    text_button = calcul.add.text(x2+30, y3+20, "2", style);

    button_3 = calcul.add.button(x3, y3, 'button3', actionOnClick, {keyname:3});
    text_button = calcul.add.text(x3+30, y3+20, "3", style);

    button_minus = calcul.add.button(x4, y3, 'button2', actionOperador, {keyname:'-'});
    text_button = calcul.add.text(x4+30, y3+20, "-", style);


    //CUARTA FILA

    button_C = calcul.add.button(x1, y4, 'button', actionEsborra, this);
    text_button = calcul.add.text(x1+30, y4+20, "C", style);

    button_0 = calcul.add.button(x2, y4, 'button3', actionOnClick, {keyname:0});
    text_button = calcul.add.text(x2+30, y4+20, "0", style);

    button_equal = calcul.add.button(x3, y4, 'button', actionCalcula, this);
    text_button = calcul.add.text(x3+30, y4+20, "=", style);

    button_plus = calcul.add.button(x4, y4, 'button2', actionOperador, {keyname:'+'});
    text_button = calcul.add.text(x4+30, y4+20, "+", style);


    //OPERACIONES

}


function actionOnClick () {


    text_calcul.destroy();
    display+=(this.keyname);
    create();
}

function actionOperador(){
    if(value!=0){actionOperador();}
    value=display;
    display="";
    text_calcul.destroy();
    create();
    operador=this.keyname;
    console.log(operador);
}

function actionCalcula() {
    switch (operador){
        case"+":
            sol=parseInt(display)+parseInt(value);
            break;
        case"-":
            sol=parseInt(value)-parseInt(display);
            break;
        case"*":
            sol=parseInt(display)*parseInt(value);
            break;
        case"/":
            sol=parseInt(value)/parseInt(display);
            break;
    }
    value=0;
    display=sol.toString();
    console.log(display);
    text_calcul.destroy();
    create();
}

function actionEsborra() {
    value=0
    display="";
    text_calcul.destroy();
}