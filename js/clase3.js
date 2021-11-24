//propagación de eventos
//UNO*****
// let padre = document.getElementById("padre");
// let hijo = document.getElementById("hijo");
// let nieto = document.getElementById("nieto");
// console.log(padre);
// nieto.addEventListener("click", function (e) {
//     //console.log(e);
//     e.stopPropagation();
//     console.log("soy el nieto");
// }, false);
// padre.addEventListener("click", function () {
//     console.log("soy el padre");
// }, false);

//DOS****
// const boton1 = document.querySelector("#boton1");
// function mostrarMensaje() {
//     console.log("tocaste!");
//     const p = document.createElement("p");
//     p.innerHTML = "soy nuevo";
//     document.body.appendChild(p);
//     boton1.removeEventListener("click", mostrarMensaje, false);
// }
// boton1.addEventListener("dblclick", mostrarMensaje, false);

//TRES
// let a = document.querySelectorAll("a");
// // console.log(a)
// for (var i = 0; i < a.length; i++) {
//     //console.log(a[i]);
//     a[i].onclick = (e) => { 
//         e.preventDefault();
//         console.log(e.target);
//         if(confirm(`¿Seguro que quieres ir a ${e.target.href}?`)){
//             window.location = e.target.href;
//         }
//     }
// }

//CUATRO
// document.form.onsubmit = (e) => {
//     e.preventDefault();
// console.log("previniendo");
// let inputs = document.querySelectorAll("input");
// for (var i = 0; i < inputs.length - 1; i++) {
//     //console.log(inputs[i].value);
//     if (inputs[i].value === "") {
//         alert(`${inputs[i].name} incompleto`);
//         // inputs[i].classList.remove("correcto");
//         // inputs[i].classList.add("incorrecto");
//         inputs[i].removeAttribute('id','correcto');
//         inputs[i].setAttribute('id','incorrecto');

//     }else{
//         alert("todo bien");
//         // inputs[i].classList.remove("incorrecto");
//         // inputs[i].classList.add("correcto");
//         inputs[i].removeAttribute('id','incorrecto');
//         inputs[i].setAttribute('id','correcto');
//     }
// }
// }

//CINCO
let form = document.querySelector("form");
let nombre = document.querySelector("#nombre");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let exp = /amor/ //literal
    exp = /^[a-z,A-Z]{4,8}$/ //solo letra en rango de 4 a 8
    exp = /^[0-9]{2,4}$/
    exp = /\d{3}/
    exp = /^\d{3,8}$/
    console.log(exp.test(nombre.value));
    // console.log(nombre.value.trim());
    // console.log(encodeURIComponent(nombre.value));
    // console.log(decodeURIComponent(nombre.value));
    // console.log(nombre.value.length);
    // console.log(nombre.value[0]);
    // console.log(nombre.value[0].charCodeAt());
});

