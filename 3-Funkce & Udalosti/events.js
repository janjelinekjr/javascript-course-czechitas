// Funkce

//function changeColor(color) {
//   let obdelnik = document.querySelector(".obdelnik");
//   obdelnik.style.backgroundColor = color;
//}

//changeColor("red");

function calculator(a, b) {
    let action = prompt("Zadejte požadovanou operaci");
    if (action === "+") {
       return a + b;
    } else if (action === "-") {
        return a - b;
   } else if (action === "*") {
        return a * b;
    } else if (action === "/") {
        return a / b;
    } else {
        return "Incorrect input";
   }
}

alert(calculator());


// Události
