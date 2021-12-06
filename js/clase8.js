// // // //PROMESAS --> PENDIENTE, RESUELVE, NOP ;(
// // // const promise = new Promise((resolve, reject) => {
// // //     const num = Math.floor(Math.random() * 10)
// // //     setTimeout(() => {
// // //         num > 5 ? resolve(num) : reject(new Error('es menor que 5 el número ' + num))
// // //     }, 1000)
// // // })
// // // promise
// // //     .then(num => console.log(num))
// // //     .catch(error => console.log(error))
// // //     .finally(()=>{
// // //         console.log("finalizando")
// // //     })

// // //LEER UN TXT
// // // let promesa = new Promise(function (resolve, reject) {
// // //     let xhr = new XMLHttpRequest()
// // //     xhr.open("get", "archivo.txt")
// // //     xhr.addEventListener("load", () => {
// // //         if (xhr.status == 200) {
// // //             resolve(xhr.response)
// // //         } else {
// // //             reject()
// // //         }
// // //     })
// // //     xhr.send()
// // // })
// // // promesa.then(function (valor) {
// // //     console.log("promesa resuelta 😉", valor)
// // // }).catch(function(){
// // //     console.log("Algo salió mal 😭") 
// // // })

// // //LEER JSON
// // let espacio = document.getElementById("espacio")
// // let promesa = new Promise(function (resolve, reject) {
// //     let xhr = new XMLHttpRequest()
// //     xhr.open("get", "https://jsonplaceholder.typicode.com/posts")
// //     xhr.addEventListener("load", () => {
// //         if (xhr.status == 200) {

// //             resolve(JSON.parse(xhr.response))
// //         } else {
// //             reject()
// //         }
// //     })
// //     xhr.send()
// // })
// // promesa.then(function (valor) {
// //     for (const X of valor) {
// //         console.log(X.title)
// //         espacio.innerHTML += `${X.id} - ${X.title} <br>`
// //     }

// //     // console.log("promesa resuelta 😉", valor)
// // }).catch(function () {
// //     console.log("Algo salió mal 😭")
// // })

// //FETCH

// // let a = fetch("archivo.txt")
// // a.then(valor => {
// //     //console.log(valor.text())
// //     return valor.text()
// // }).then(valor => {
// //     console.log(valor)
// // })

// //JSON
// // fetch("https://jsonplaceholder.typicode.com/users")
// //     .then(response => {
// //         //console.log(response)
// //         return response.json()
// //     }).then(users => console.log(users))

// //ASYNC - AWAIT
// let frutas = [
//     {
//         nombre: "banana",
//         precio: 300
//     },
//     {
//         nombre: "kiwi",
//         precio: 450
//     },
//     {
//         nombre: "papaya",
//         precio: 320
//     }
// ]

// function verFrutas() {
//     return new Promise((resolve, reject) => {
//         console.log("cargando...")
//         setTimeout(() => {
//             resolve(frutas)
//         }, 3000)
//     })
// }
// async function getFrutas() {
//     let mis_frutas = await verFrutas()
//     console.log(mis_frutas)
// }
// getFrutas()

//
let anterior = document.getElementById("btnAnterior")
let siguiente = document.getElementById("btnSiguiente")
let pagina = 1
anterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina--
        cargarPeliculas()
    }
})
siguiente.addEventListener("click", () => {
    pagina++
    cargarPeliculas()
})
const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`)
        // console.log(respuesta)
        console.log(respuesta.status)
        if (respuesta.status == 200) {
            const datos = await respuesta.json()
            // console.log(datos)
            console.log(datos.results)
        }
    } catch (error) {
        console.log(error)
    }
}
cargarPeliculas()