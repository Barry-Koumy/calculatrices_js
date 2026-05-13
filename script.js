let button_number = document.getElementsByClassName("number")[0]
let expression = ""
let screen = document.getElementById("screen");
//number 1 to 9
for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;

    btn.onclick = () => {
        expression += i;
        screen.textContent = expression;
    };
    button_number.appendChild(btn);
}
//sign 
let button_sign = document.getElementsByClassName("sign")[0]
let sign = ["/","*","-","+"]
for (let i = 0; i <sign.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = sign[i];
    btn.onclick = () => {
            expression += sign [i];
            screen.textContent = expression;
    };

    button_sign.appendChild(btn);
}
//decimal
let decimal = document.createElement("button");

decimal.textContent = ".";

decimal.onclick = () => {
    expression += ".";
    screen.textContent = expression;
}
document.getElementById("decimal").appendChild(decimal)
//zero
let zero = document.createElement("button");

zero.textContent = "0";

zero.onclick = () => {
    expression += "0";
    screen.textContent = expression;
}

document.getElementById("zero").appendChild(zero)
//clear
let clear = document.createElement("button");

clear.textContent = "C";

clear.onclick = () => {
    expression = "";
    screen.textContent = "";
};
document.getElementById("clear").appendChild(clear);
let equal = document.createElement("button")
document.getElementById("equal").onclick = () => {
    try {
        let result = eval(expression);
        screen.textContent = result;
        expression = result.toString();
    } catch {
        screen.textContent = "Error";
        expression = "";
    }
};
document.getElementById("equal").appendChild(equal);
//result = calc()
//calc()

