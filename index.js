let codeString = ""
let evalString = ""
let displayString = ""
let tempNum = ""
let ans = 0;
let display = document.querySelector(".display") // screen 1 
let rightB = 0, leftB = 0; // left and right bracket count

let result = false; // for dot

let dott = document.querySelector(".dot")

// screen 2
function one() {
    check()
    result = false
    codeString += "1"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function two() {
    check()
    result = false
    codeString += "2"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function three() {
    check()
    result = false
    codeString += "3"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function four() {
    check()
    result = false
    codeString += "4"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function five() {
    check()
    result = false
    codeString += "5"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function six() {
    check()
    result = false
    codeString += "6"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function seven() {
    check()
    result = false
    codeString += "7"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function eight() {
    check()
    result = false
    codeString += "8"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function nine() {
    check()
    result = false
    codeString += "9"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function zero() {
    check()
    result = false
    codeString += "0"
    enableDMP()
    enablePM()
    enableScreen3()
    dispBuilder()
}

function dot() {
    check()
    result = false
    codeString += "."
    enableDMP()
    enablePM()
    dispBuilder()
    checkDot()
    disableScreen3()
    disableDot()
}

function plus() {
    result = false
    codeString += "+"
    disablePM()
    disableDMP()
    dispBuilder()
    enableDot()
}

function minus() {
    result = false
    codeString += "-"
    disablePM()
    disableDMP()
    dispBuilder()
    enableDot()
}

function multi() {
    result = false
    codeString += "*"
    disableDMP()
    dispBuilder()
    enableDot()
}

function divide() {
    result = false
    codeString += "/"
    disableDMP()
    dispBuilder()
    enableDot()
}

function e() {
    result = false
    codeString += "e"
    dispBuilder()
    enableDot()
}

function log() {
    result = false
    codeString += "l"
    dispBuilder()
    enableDot()
}
function exp() {
    result = false
    codeString += "p"
    disableDMP()
    dispBuilder()
    enableDot()
}

function sqrt() {
    result = false
    codeString += "]"
    dispBuilder()
    enableDot()
}

// screen 3
function pi() {
    result = false
    codeString += "π"
    dispBuilder()
    enableDot()
    enableDMP()
}

function sinn() {
    result = false
    codeString += "["
    dispBuilder()
    enableDot()
}

function coss() {
    result = false
    codeString += "c"
    dispBuilder()
    enableDot()
}

function tann() {
    result = false
    codeString += "&"
    dispBuilder()
    enableDot()
}

function logg10() {
    result = false
    codeString += "#"
    dispBuilder()
    enableDot()
}

function xsq() {
    result = false
    codeString += "$"
    dispBuilder()
    enableDot()
}

function xtenSq() {
    result = false
    codeString += "!"
    dispBuilder()
    enableDot()
}

function asinn() {
    result = false
    codeString += "%"
    dispBuilder()
    enableDot()
}

function acoss() {
    result = false
    codeString += "_"
    dispBuilder()
    enableDot()
}

function atann() {
    result = false
    codeString += "|"
    dispBuilder()
    enableDot()
}

function xexp() {
    result = false
    codeString += "?"
    dispBuilder()
    enableDot()
}

function equal() {
    evalBuilder()
    balanceB()
    ans = eval(evalString)
    displayString = ans.toString()
    codeString = displayString
    result = true
    displayScreen()
    enableDMP()
    enablePM()
}

function back() {
    if (codeString[codeString.length - 1] == '.') {
        enableDot()
        enableScreen3()
    }

    if (codeString[codeString.length - 2] == '.') {
        disableScreen3()
    }

    if ((codeString[codeString.length - 2] == '/') ||
        (codeString[codeString.length - 2] == '*')) {
        disableDMP()
        // console.log('hello');
    }

    if ((codeString[codeString.length - 2] == '+') ||
        (codeString[codeString.length - 2] == '-')) {
        disableDMP()
        disablePM()
        // console.log('hello');
    }

    if ((codeString[codeString.length - 1] == '+') ||
        (codeString[codeString.length - 1] == '-') ||
        (codeString[codeString.length - 1] == '*') ||
        (codeString[codeString.length - 1] == '/')
    ) {
        enableDMP()
        enablePM()
        // console.log('hello');
    }

    codeString = codeString.slice(0, -1)
    checkDot()
    dispBuilder()
}

function evalBuilder() {
    evalString = codeString.replaceAll("l", "Math.log(")
    evalString = evalString.replaceAll("e", "Math.E")
    evalString = evalString.replaceAll("p", "**")
    evalString = evalString.replaceAll("]", "Math.sqrt(")
    evalString = evalString.replaceAll("π", "Math.PI")
    evalString = evalString.replaceAll("[", "Math.sin(")
    evalString = evalString.replaceAll("c", "Math.cos(")
    evalString = evalString.replaceAll("&", "Math.tan(")
    evalString = evalString.replaceAll("#", "Math.log10(")
    evalString = evalString.replaceAll("!", "10**")
    evalString = evalString.replaceAll("$", "**2")
    evalString = evalString.replaceAll("%", "Math.asin(")
    evalString = evalString.replaceAll("_", "Math.acos(")
    evalString = evalString.replaceAll("|", "Math.atan(")
    evalString = evalString.replaceAll("?", "Math.exp(")
    console.log(evalString);
}

function dispBuilder() {
    displayString = codeString.replaceAll("e", "e")
    displayString = displayString.replaceAll("l", "ln(")
    displayString = displayString.replaceAll("p", "^")
    displayString = displayString.replaceAll("]", "√")
    displayString = displayString.replaceAll("[", "sin(")
    displayString = displayString.replaceAll("c", "cos(")
    displayString = displayString.replaceAll("&", "tan(")
    displayString = displayString.replaceAll("#", "log(")
    displayString = displayString.replaceAll("$", "²")
    displayString = displayString.replaceAll("!", "10^")
    displayString = displayString.replaceAll("%", "sin⁻¹(")
    displayString = displayString.replaceAll("_", "cos⁻¹(")
    displayString = displayString.replaceAll("|", "tan⁻¹(")
    displayString = displayString.replaceAll("?", "exp(")
    displayString = displayString.replaceAll("*", "×")
    displayString = displayString.replaceAll("/", "÷")

    displayString = displayString.replace(/ /g, "");
    console.log(displayString);
    displayScreen()

}

function displayScreen() {
    display.textContent = displayString
}

function bracL() {
    codeString += "("
    dispBuilder()
}

function bracR() {
    codeString += ")"
    dispBuilder()
}

// AC means all clear
function AC() {
    codeString = ""
    displayMessage = ""
    dispBuilder()
    enableDot()
    disableDMP()
    enablePM()
}

let screen3 = document.querySelector(".s3")

function disableDot() {
    dott.style.pointerEvents = "none"
}

function enableDot() {
    dott.style.pointerEvents = "auto"
}

function disableScreen3() {
    pie.style.pointerEvents = "none"
    sin.style.pointerEvents = "none"
    cos.style.pointerEvents = "none"
    tan.style.pointerEvents = "none"
    log10.style.pointerEvents = "none"
    pluss.style.pointerEvents = "none"
    minuss.style.pointerEvents = "none"
    multii.style.pointerEvents = "none"
    dividee.style.pointerEvents = "none"
    ee.style.pointerEvents = "none"
    logg.style.pointerEvents = "none"
    expp.style.pointerEvents = "none"
    exppp.style.pointerEvents = "none"
    sqrtt.style.pointerEvents = "none"
    sq.style.pointerEvents = "none"
    tenSq.style.pointerEvents = "none"
    asin.style.pointerEvents = "none"
    acos.style.pointerEvents = "none"
    atan.style.pointerEvents = "none"
}

function enableScreen3() {
    pie.style.pointerEvents = "auto"
    sin.style.pointerEvents = "auto"
    cos.style.pointerEvents = "auto"
    tan.style.pointerEvents = "auto"
    log10.style.pointerEvents = "auto"
    pluss.style.pointerEvents = "auto"
    minuss.style.pointerEvents = "auto"
    multii.style.pointerEvents = "auto"
    dividee.style.pointerEvents = "auto"
    ee.style.pointerEvents = "auto"
    logg.style.pointerEvents = "auto"
    expp.style.pointerEvents = "auto"
    exppp.style.pointerEvents = "auto"
    sqrtt.style.pointerEvents = "auto"
    sq.style.pointerEvents = "auto"
    tenSq.style.pointerEvents = "auto"
    asin.style.pointerEvents = "auto"
    acos.style.pointerEvents = "auto"
    atan.style.pointerEvents = "auto"
}

function balanceB() {
    for (let i = 0; i < evalString.length; i++) {
        if (evalString[i] == "(") {
            leftB++;
        }
        else if (evalString[i] == ")") {
            rightB++;
        }
        // console.log(str[i]);
    }
    let diff = Math.abs(leftB - rightB)
    // console.log("left B:",leftB);
    // console.log("right B:",rightB);
    if (diff == 0) {
        return null
    }
    else if (leftB > rightB) {
        for (i = 0; i < diff; i++) {
            evalString = evalString + ")"
        }
    }
    else {
        for (i = 0; i < diff; i++) {
            evalString = "(" + evalString
        }
    }
    console.log(evalString);
    console.log(rightB);
    leftB = 0
    rightB = 0
}

function check() {
    if (result == true) {
        codeString = ""
        dispBuilder()
        enableDot()
        // enableScreen3()
    }
}

function enableDMP() {
    exppp.style.pointerEvents = "auto"
    multii.style.pointerEvents = "auto"
    dividee.style.pointerEvents = "auto"
}

function disableDMP() {
    exppp.style.pointerEvents = "none"
    multii.style.pointerEvents = "none"
    dividee.style.pointerEvents = "none"
}

function enablePM() {
    pluss.style.pointerEvents = "auto"
    minuss.style.pointerEvents = "auto"
}

function disablePM() {
    pluss.style.pointerEvents = "none"
    minuss.style.pointerEvents = "none"
}

// when result is displated, eg 1.24, dot can still be enter, this function fixes it
function checkDot() {

    for (i = codeString.length - 1; i >= 0; i--) {
        if ((codeString[i] == "+") ||
            (codeString[i] == "-") ||
            (codeString[i] == "*") ||
            (codeString[i] == "/")
        ) {
            enableDot()
            i = -1
        }
        else if (codeString[i] == ".") {
            i = -1
            disableDot()
        }
    }

}

// all that just for a sawp feature
let pie = document.querySelector(".pie")
let inv = document.querySelector(".inv")
let log10 = document.querySelector(".log10")
let sin = document.querySelector(".sin")
let cos = document.querySelector(".cos")
let tan = document.querySelector(".tan")

let pluss = document.querySelector(".plus")
let minuss = document.querySelector(".minus")
let multii = document.querySelector(".multi")
let dividee = document.querySelector(".divide")
let ee = document.querySelector(".e")
let logg = document.querySelector(".log")

let asin = document.querySelector(".asin")
let acos = document.querySelector(".acos")
let atan = document.querySelector(".atan")
let expp = document.querySelector(".expp")

let sq = document.querySelector(".sq")
let tenSq = document.querySelector(".tenSq")

let exppp = document.querySelector(".exppp")
let sqrtt = document.querySelector(".sqrtt")

let visibility = false
let trigInv = false
let swap = document.querySelector(".dropdown")

swap.addEventListener('click', () => {
    if (visibility == false) {
        visibility = true
        swap.style.color = "rgb(255, 187, 0)"
        showtrig()
    }
    else {
        visibility = false
        trigInv = false
        swap.style.color = "rgb(255, 255, 146)"
        inv.style.color = "rgb(162, 255, 173)"
        hidetrig()

        asin.style.display = "none"
        acos.style.display = "none"
        atan.style.display = "none"
        expp.style.display = "none"
    }
})

inv.addEventListener('click', () => {
    if (trigInv == false) {
        trigInv = true
        asin.style.display = "flex"
        acos.style.display = "flex"
        atan.style.display = "flex"
        expp.style.display = "flex"

        inv.style.color = "rgb(255, 0, 230)"
        // inv.style.fontWeight="700"
        // inv.style.cssText = 'background-color:red !important';
        hidetrig2()

    }
    else {
        trigInv = false
        asin.style.display = "none"
        acos.style.display = "none"
        atan.style.display = "none"
        expp.style.display = "none"

        inv.style.color = "rgb(162, 255, 173)"
        // inv.style.fontWeight="400"

        showtrig2()
    }
})

function showtrig2() {
    sin.style.display = "flex"
    cos.style.display = "flex"
    tan.style.display = "flex"
    log10.style.display = "flex"
}

function hidetrig2() {
    sin.style.display = "none"
    cos.style.display = "none"
    tan.style.display = "none"
    log10.style.display = "none"
}

function showtrig() {
    sqrtt.style.display = "none"
    exppp.style.display = "none"

    inv.style.display = "flex"

    sq.style.display = "flex"
    tenSq.style.display = "flex"

    pie.style.display = "flex"
    inv.style.display = "flex"
    sin.style.display = "flex"
    cos.style.display = "flex"
    tan.style.display = "flex"
    log10.style.display = "flex"
    pluss.style.display = "none"
    minuss.style.display = "none"
    multii.style.display = "none"
    dividee.style.display = "none"
    ee.style.display = "none"
    logg.style.display = "none"
}

function hidetrig() {
    exppp.style.display = "flex"
    sqrtt.style.display = "flex"

    inv.style.display = "none"

    sq.style.display = "none"
    tenSq.style.display = "none"

    pie.style.display = "none"
    inv.style.display = "none"
    sin.style.display = "none"
    cos.style.display = "none"
    tan.style.display = "none"
    log10.style.display = "none"
    pluss.style.display = "flex"
    minuss.style.display = "flex"
    multii.style.display = "flex"
    dividee.style.display = "flex"
    ee.style.display = "flex"
    logg.style.display = "flex"
}

disableDMP()