// // //geolocalización


// // function encontrar() {
// //     let status = document.querySelector("#status")
// //     let mapLink = document.querySelector("#map-link")
// //     if (!navigator.geolocation) {
// //         status.innerHTML = "La geolocalización no está disponible en tu navegador"
// //     } else {
// //         status.innerHTML = "Localizando..."
// //         setTimeout(() => {
// //             navigator.geolocation.getCurrentPosition(mostrar, error)
// //         }, 3000)
// //     }
// //     function mostrar(position) {
// //         // console.log(position)
// //         const latitude = position.coords.latitude
// //         const longitude = position.coords.longitude
// //         console.log(latitude)
// //         console.log(longitude)
// //         const a = document.createElement("a")
// //         a.href = `https://www.openstreetmap.org/#map=16/${latitude}/${longitude}`
// //         a.target = "_blank"
// //         a.innerHTML = `Latitud: ${latitude}º, Longitud: ${longitude}`
// //         mapLink.appendChild(a)
// //     }
// //     function error() {
// //         status.innerHTML = "No podemos obtener tu ubicación"
// //     }
// // }
// // document.querySelector("#aqui").addEventListener("click", encontrar)

// //POO
// const alumno = {
//     nombre: "Matias",
//     apellido: "Reyes",
//     edad: 58,
//     datos: function () {
//         return `lo que sea ${this.nombre}`
//     }
// }

// class Auto {
//     //atributos
//     marca;
//     ruedas;
//     color;
//     //métodos
//     //constructor
//     constructor(m, r, c) {
//         this.marca = m;
//         this.ruedas = r;
//         this.color = c;
//     }
//     acelerar() {
//         return `${this.marca} tiene una aceleración por ${this.ruedas} ruedas`
//     }
// }

// const auto1 = new Auto("Ford", 4, "azul")
// const auto2 = new Auto("Audi", 4, "rojo")
// const auto3 = new Auto("Volkswagen", 8, "negro")
// console.log(auto1.ruedas)
// console.log(auto1.acelerar())

//función constructora
// class Auto {
//     marca;
//     color;
// }
// function AutoC(m, c) {
//     this.marca = m;
//     this.color = c;
//     this.acelerar = function () {
//         return `blabla`
//     }
// }
// let x = new AutoC("Ford", "violeta")
// console.log(x.acelerar())

// //modificador de acceso privado
// class Persona {
//     #id = 123
//     acceder(valor) {
//         if (valor == this.#id)
//             console.log("ingresaste")
//         else
//             console.log("nop ")

//     }
// }
// const p1 = new Persona()

//herencia
//superclase
class Padre {
    constructor(nombre) {
        this.nombre = nombre
    }
    hablar() {
        console.log(`${this.nombre} se encuentra hablando`)
    }
}
let p1 = new Padre("Eddy")
p1.hablar()
//subclase

class Hijo extends Padre{
    
    jugar(){
        console.log("Me encanta jugar")
    }
    hablar() {
        super.hablar()
        console.log("tararararara")
    }
}
let h1 = new Hijo("Austry")