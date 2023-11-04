const celcius = document.querySelector(".celcius");
const Fahrenheit = document.querySelector(".Fahrenheit");
const kelvin = document.querySelector(".kelvin");
const btn = document.querySelector(".btn");

const mode = document.querySelector("#mode");


mode.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.innerHTML = 'Light <i class="fa-regular fa-sun"></i>';
    }else {
        mode.innerHTML = 'Dark <i class="fa-regular fa-moon"></i>';
    }
}

btn.addEventListener("click", () => {
    celcius.value = "";
    Fahrenheit.value = "";
    kelvin.value = "";
})

celcius.oninput = function(){
    Fahrenheit.value = celcius.value * (9/5) + 32;
    kelvin.value = celcius.value * 1 + 273.15;
}

Fahrenheit.oninput = function(){
    celcius.value = (Fahrenheit.value - 32) * (5/9);
    kelvin.value = ((Fahrenheit.value - 32) * (5/9)) + 273.15;
}

kelvin.oninput = function(){
    celcius.value = kelvin.value - 273.15;
    Fahrenheit.value = (kelvin.value - 273.15) * (9/5) + 32;
}