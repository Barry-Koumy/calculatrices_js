let screen = document.getElementById("screen");
let expression = "";

// 1. Generate Numbers 1 to 9
let numberGrid = document.querySelector(".number-grid");
for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => {
        expression += i;
        screen.textContent = expression;
    };
    numberGrid.appendChild(btn);
}

// 2. Generate Signs
let signColumn = document.querySelector(".sign-column");
let signs = ["/", "*", "-", "+"];
signs.forEach(s => {
    let btn = document.createElement("button");
    btn.textContent = s;
    btn.onclick = () => {
        expression += s;
        screen.textContent = expression;
    };
    signColumn.appendChild(btn);
});

// 3. Decimal
let decimalBtn = document.createElement("button");
decimalBtn.textContent = ".";
decimalBtn.onclick = () => {
    expression += ".";
    screen.textContent = expression;
};
document.getElementById("decimal").appendChild(decimalBtn);

// 4. Zero
let zeroBtn = document.createElement("button");
zeroBtn.textContent = "0";
zeroBtn.onclick = () => {
    expression += "0";
    screen.textContent = expression;
};
document.getElementById("zero").appendChild(zeroBtn);

// 5. Clear
let clearBtn = document.createElement("button");
clearBtn.textContent = "C";
clearBtn.onclick = () => {
    expression = "";
    screen.textContent = "";
};
document.getElementById("clear").appendChild(clearBtn);

// 6. Equal (The Big One)
let equalBtn = document.createElement("button");
equalBtn.textContent = "=";
equalBtn.onclick = () => {
    try {
        // Evaluate the string expression
        let result = eval(expression);
        screen.textContent = result;
        expression = result.toString();
    } catch {
        screen.textContent = "Error";
        expression = "";
    }
};
document.getElementById("equal").appendChild(equalBtn);