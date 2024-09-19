let SaveValue = ""; 
 let valor = 0;
 let operation = "";
 let buttons = document.querySelectorAll("button");
let screenBox = document.getElementById("screen");

function Calculator() {
    buttons.forEach(element => {

        element.onclick = function() {
            element.classList.toggle("push");

            switch (element.value) {
                case "+":
                case "-":
                case "x":
                case "/":
                    if (SaveValue !== "") {
                        if (operation !== "") {
                            valor = performOperation(valor, parseFloat(SaveValue), operation);
                        } else {
                            valor = parseFloat(SaveValue); // Guardar el valor actual
                        }
                    }
                    operation = element.value;  
                    screenBox.innerHTML += element.value;  
                    SaveValue = "";  
                    break;

                case ".":
                    if (!SaveValue.includes(".")) {  
                        SaveValue += element.value;  
                        screenBox.innerHTML += element.value; 
                    }
                    break;

                case "RESET":
                    screen.innerHTML = "";
                    valor = 0;
                    SaveValue = "";
                    operation = "";
                    break;

                case "DEL":
                    if (SaveValue.length > 0) {
                        SaveValue = SaveValue.slice(0, -1);
                        screenBox.innerHTML = screenBox.innerHTML.slice(0, -1);
                    }
                    break;

                case "=":
                    if (SaveValue !== "" && operation !== "") {  
                        valor = performOperation(valor, parseFloat(SaveValue), operation);
                        screenBox.innerHTML = valor; 
                        SaveValue = valor.toString();  
                        operation = "";  
                    }
                    break;

                default:
                    if (screenBox.innerHTML.includes("=")) {
                         screenBox.innerHTML = "";
                        valor = 0;
                    }
                    SaveValue += element.value;
                     screenBox.innerHTML += element.value;
                     break;
            }
        };
    });
}

function performOperation(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "/":
            return a / b;
        default:
            return b;
    }
}

Calculator();


let selection = document.getElementById("mover");
let Main = document.getElementById("main");
let Mover = document.getElementById("containerButtons");
let BackBTN = document.getElementById("selection");
let MoverSeleccion = document.getElementById("mover");
let screen = document.getElementById("screen");
let Theme = document.getElementById("containerTheme");
let DEL = document.getElementById("DEL");
let RESETBtn = document.getElementById("RESET");
let RESULTBtn = document.getElementById("RESULT");

let INDEX = 0;

function Move() {

    selection.addEventListener("click", e => {
        e.preventDefault()
        INDEX++;
        if (INDEX === 1) {
            removeAllThemes();
            selection.style.margin = "12px";
            
            THEME2();
            screen.classList.remove("ScreenTheme1");
            screen.classList.toggle("ScreenTheme2");
            screen.classList.remove("ScreenTheme3");
        } else if (INDEX === 2) {
            removeAllThemes();
            selection.style.margin = "25px";
            THEME3();
            screen.classList.remove("ScreenTheme1");
            screen.classList.toggle("ScreenTheme3");
            screen.classList.remove("ScreenTheme2");
        } else if (INDEX === 3) {
            removeAllThemes();
            selection.style.margin = "0px";
            THEME1();
           
            INDEX = 0; // Reiniciar el índice para el próximo ciclo
        }
    });
}

function THEME1() {
    let SeleccionBoton = ["223, 31%, 20%"];
    let BodyColor = ["222, 26%, 31%"];
    let ToogleBack = ["223, 31%, 20%"];
    let BackBoton = ["6, 63%, 50%"];
    let MainBack = ["222, 26%, 31%"];
    let containerThemeColor = ["0, 0%, 100%"];

    // Asignar los colores
    Theme.style.color = `hsl(${containerThemeColor[0]})`;
    Main.style.backgroundColor = `hsl(${MainBack[0]})`;
    document.body.style.backgroundColor = `hsl(${BodyColor[0]})`;
    Mover.style.backgroundColor = `hsl(${SeleccionBoton[0]})`;
    BackBTN.style.backgroundColor = `hsl(${ToogleBack[0]})`;
    MoverSeleccion.style.backgroundColor = `hsl(${BackBoton[0]})`;

    RESULTBtn.classList.add("RESULT-THEME1");
    screen.classList.add("ScreenTheme1");
    RESETBtn.classList.add("RESET-THEME1");
    DEL.classList.add("DEL-THEME1");

    let select = document.querySelectorAll("button");
    select.forEach(element => {
        element.classList.add("THEME1_Buttos");
    });
}

function THEME2() {
    let SeleccionBoton = ["0, 5%, 81%"];
    let BodyColor = ["0, 0%, 90%"];
    let ToogleBack = ["0, 5%, 81%"];
    let BackBoton = ["25, 98%, 40%"];
     let MainBack = ["0, 0%, 90%"];
    let containerThemeColor = ["60, 10%, 19%"];

    // Asignar los colores
    Theme.style.color = `hsl(${containerThemeColor[0]})`;
    Main.style.backgroundColor = `hsl(${MainBack[0]})`;
    document.body.style.backgroundColor = `hsl(${BodyColor[0]})`;
    Mover.style.backgroundColor = `hsl(${SeleccionBoton[0]})`;
    BackBTN.style.backgroundColor = `hsl(${ToogleBack[0]})`;
    MoverSeleccion.style.backgroundColor = `hsl(${BackBoton[0]})`;
 
    RESULTBtn.classList.toggle("RESULT-THEME2");
     
    RESETBtn.classList.toggle("RESET-THEME2");
    DEL.classList.toggle("DEL-THEME2");

    let select = document.querySelectorAll("button");
    select.forEach(element => {
        element.classList.add("THEME2_Buttos");
    });
}

function THEME3() {
    let SeleccionBoton = ["268, 75%, 9%"];
    let BodyColor = ["268, 71%, 12%"];
    let ToogleBack = ["268, 75%, 9%"];
    let BackBoton = ["176, 100%, 44%"];
    let MainBack = ["268, 71%, 12%"];
    let containerThemeColor = ["52, 100%, 62%"];

    // Asignar los colores
    Theme.style.color = `hsl(${containerThemeColor[0]})`;
    Main.style.backgroundColor = `hsl(${MainBack[0]})`;
    document.body.style.backgroundColor = `hsl(${BodyColor[0]})`;
    Mover.style.backgroundColor = `hsl(${SeleccionBoton[0]})`;
    BackBTN.style.backgroundColor = `hsl(${ToogleBack[0]})`;
    MoverSeleccion.style.backgroundColor = `hsl(${BackBoton[0]})`;

    RESULTBtn.classList.toggle("RESULT-THEME3");
     RESETBtn.classList.toggle("RESET-THEME3");
    DEL.classList.toggle("DEL-THEME3");

    let select = document.querySelectorAll("button");
    select.forEach(element => {
        element.classList.add("THEME3_Buttos");
    });
}

function removeAllThemes() {
    // Eliminar clases de todos los temas
    RESULTBtn.classList.remove("RESULT-THEME1", "RESULT-THEME2", "RESULT-THEME3");
     RESETBtn.classList.remove("RESET-THEME1", "RESET-THEME2", "RESET-THEME3");
    DEL.classList.remove("DEL-THEME1", "DEL-THEME2", "DEL-THEME3");

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove("THEME1_Buttos", "THEME2_Buttos", "THEME3_Buttos");
    });
}

THEME1();
Move();




 