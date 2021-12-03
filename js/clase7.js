// //form data
// const form = document.forms.namedItem("formulario");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let campos = new FormData();
//     campos.append("nombre", form.nombre.value)
//     campos.append("edad", form.edad.value)
//     campos.append("archivo", form.archivo.files)
//     //console.log(campos);
//     console.log(form.archivo.files[0].name);
//     for (const dato of campos.entries()) {
//         console.log(dato[0] + ": " + dato[1])
//     }
// })
// // vista previa
// var file = document.querySelector("input[type=file]");
// var vistaPrevia = document.querySelector("#vistaPrevia");
// file.addEventListener("change", (e) => {
//     // console.log(e.target)
//     // console.log(e.target.value)
//     // console.log(e.target.files)
//     // console.log(e.target.files[0])
//     //  console.log(e.target.files[0].name)
//     var url = URL.createObjectURL(e.target.files[0])
//     // console.log(url)
//     // vistaPrevia.src = url
//     vistaPrevia.setAttribute("src", url)
// })

//DRAG AND DROP
// const caja = document.getElementById("caja")
// caja.addEventListener("dragover", permitirDrop)
// caja.addEventListener("drop", drop)
// function permitirDrop(e) {
//     e.preventDefault()
// }
// function drop(e) {
//     e.preventDefault()
//     var arc = new FileReader()
//     arc.addEventListener("load", leer)
//     //console.log(e.dataTransfer.files[0])
//     arc.readAsDataURL(e.dataTransfer.files[0])
// }
// function leer(e) {
//     //console.log(e.target)
//     console.log(e.target.result)
//     caja.style.backgroundImage = "url(" + e.target.result + ")"
// }

//GESTION DE TAREAS
function drag(ev) {
    // console.log(drag)
    // console.log(ev)
    // console.log(ev.target)
    // console.log(ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id)
}
function drop(ev) {
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text")
    console.log(data)
    console.log(ev.target)
    ev.target.appendChild(document.getElementById(data))

}
function permitir(ev) {
    ev.preventDefault()
    // console.log(drop)
    // console.log(ev)
}