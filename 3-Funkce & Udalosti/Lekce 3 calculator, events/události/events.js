// Funkce

// Události

let ctverec = document.querySelector(".ctverec");
let obdelnik = document.querySelector(".obdelnik");

ctverec.addEventListener('click', function() {
    ctverec.classList.toggle('kruh');
});

obdelnik.addEventListener('mouseenter', function() {
    obdelnik.style.backgroundColor = '#ff4242';
});

obdelnik.addEventListener('mouseleave', function() {
    obdelnik.style.backgroundColor = 'white';
});


window.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        obdelnik.classList.toggle('otoc');
    }
    console.log(event.key);
});