var form = document.getElementById("form")
var inputs = document.querySelectorAll("input");
var nombre = document.querySelector("#nombre")
var correo = document.querySelector("#correo")
var p_nombre = document.querySelector("#p-nombre")
var p_correo = document.querySelector("#p-correo")
var p_submit = document.querySelector("#p-submit")
var campos = {
    nombre: false,
    correo: false
}
var exp = {
    nombre: /^[a-zA-Z]{2,10}$/,
    correo: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
const validar = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    switch (e.target.name) {
        case "nombre":
            //console.log(exp.nombre.test(e.target.value))
            if (exp.nombre.test(e.target.value)) {
                nombre.classList.remove("input-incorrecto")
                nombre.classList.add("input-correcto")
                p_nombre.classList.remove("p-nombre-error")
                p_nombre.classList.add("p-nombre")
                campos.nombre = true
            } else {
                nombre.classList.remove("input-correcto")
                nombre.classList.add("input-incorrecto")
                p_nombre.classList.remove("p-nombre")
                p_nombre.classList.add("p-nombre-error")
                campos.nombre = false
            }
            break;
        case "correo":
            if (exp.correo.test(e.target.value)) {
                correo.classList.remove("input-incorrecto")
                correo.classList.add("input-correcto")
                p_correo.classList.remove("p-correo-error")
                p_correo.classList.add("p-correo")
                campos.correo = true
            } else {
                correo.classList.remove("input-correcto")
                correo.classList.add("input-incorrecto")
                p_correo.classList.remove("p-correo")
                p_correo.classList.add("p-correo-error")
                campos.correo = false
            }
            break;
    }
}
inputs.forEach((item) => {
    //console.log(item)
    item.addEventListener("keyup", validar)
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(campos.nombre)
    // console.log(campos.correo)
    if (campos.nombre && campos.correo) {
        console.log("enviado")
        p_submit.innerHTML = "Enviado correctamente"
        p_submit.classList.remove("p-submit-error")
        p_submit.classList.add("p-submit-enviado")
        //e.target.submit(); //enviar correo
    } else {
        console.log("no enviado")
        p_submit.innerHTML = "No Enviado"
        p_submit.classList.remove("p-submit-enviado")
        p_submit.classList.add("p-submit-error")
    }
})

//FECHAS *******************

let x = new Date()
console.log(x.getFullYear())
console.log(x.getDay())
let reloj = document.getElementById("reloj")
reloj.innerHTML = `Hoy es ${x.getDate()} - ${x.getMonth() + 1} - ${x.getFullYear()} / ${x.getHours()} : ${x.getMinutes()} : ${x.getSeconds()}`
reloj.style.fontSize = "40px"
reloj.style.fontWeight = "bold"

//ASINCRONIA
setTimeout(() => {
    console.log("saludando")
}, 3000)

// setInterval(() => {
//     console.log("interval")
// }, 3000)

//API REST
//REST (JSON)
//RESTFULL programa basado en REST
//API 
//***** PARTIR DE AQUI: AJAX */
