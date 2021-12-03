// // let boton = document.getElementById("boton")
// // boton.addEventListener("click", () => {
// //     let xhr = new XMLHttpRequest()
// //     xhr.open("get", "https://picsum.photos/v2/list")
// //     xhr.addEventListener("load", () => {
// //         //console.log(xhr.responseText)
// //         let respuesta = JSON.parse(xhr.responseText)
// //         // console.log(respuesta)
// //         // console.log(respuesta[2])
// //         // console.log(respuesta[2].author)
// //         // console.log(respuesta[2].download_url)
// //         let grid = document.querySelector("#grid")
// //         for (const item of respuesta) {
// //             //console.log(item)
// //             //console.log(item.download_url)
// //             var div = document.createElement("div")
// //             div.innerHTML = `${item.id}<br><strong>${item.author}</strong><br>width: ${item.width}, height: ${item.height}<br>
// //             url: ${item.url}<br><br>`
// //             var img = document.createElement("img")
// //             img.src = item.download_url
// //             div.appendChild(img)
// //             grid.appendChild(div)
// //         }
// //     })
// //     xhr.send()
// // })

// //SPA SIMPLE PAGE APLICATION - EXTERNO
// let main = document.querySelector("main")
// let links = document.querySelectorAll("a")
// links.forEach(function (link) {
//     //console.log(link)
//     link.addEventListener("click", (e) => {
//         e.preventDefault()
//         //console.log(e.target.href)
//         var ruta = e.target.href
//         cargar(ruta)
//     })
// })
// function cargar(ruta) {
//     var ajax = new XMLHttpRequest()
//     ajax.open("get", ruta)
//     ajax.addEventListener("load", () => {
//         //console.log(ajax.responseText)
//         main.innerHTML = ajax.responseText
//         history.pushState(
//             ajax.response,"",ruta
//         )
//     })
//     ajax.send()
// }
// window.addEventListener("popstate",(e)=>{
//     console.log(e.state)
//     main.innerHTML = e.state
// })

//SPA - INTERNO

var a = document.querySelectorAll("a")
a.forEach((link) => {
    // console.log(link)
    // console.log(link.className)
    var clase = link.className
    link.addEventListener("click", (e) => {
        e.preventDefault()
        var p = document.querySelectorAll("p")
        history.pushState({
            tab: clase
        }, null, "tab- " + clase)
        p.forEach(contenido => {
            // console.log(contenido)
            // console.log(contenido.id)
            var id = contenido.id
            if (clase == id) {
                contenido.classList.remove("hide")
                contenido.classList.add("active")
            } else {
                contenido.classList.remove("active")
                contenido.classList.add("hide")
            }
        })
    })
})
window.addEventListener("popstate", (e) => {
    console.log(e.state.tab)
    var a = e.state.tab
    var p = document.querySelectorAll("p")
    p.forEach(contenido => {
        // console.log(contenido)
        // console.log(contenido.id)
        var id = contenido.id
        if (a == id) {
            contenido.classList.remove("hide")
            contenido.classList.add("active")
        } else {
            contenido.classList.remove("active")
            contenido.classList.add("hide")
        }
    })
})