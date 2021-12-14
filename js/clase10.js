// // // //PRACTICA DE HERENCIA
// // // //superclase
// // // class Ballena {
// // //     constructor(color, edad, peso) {
// // //         this.color = color;
// // //         this.edad = edad;
// // //         this.peso = peso;
// // //         this.canto = "do re";
// // //     }
// // //     cantar(x) {
// // //         this.canto = x;
// // //         console.log(`La ballena de color ${this.color} canta ${this.canto}`);
// // //     }
// // //     comer(x) {
// // //         console.log(`La ballena come ${x}`);
// // //     }
// // // }
// // // //subclase
// // // class Azul extends Ballena {
// // //     constructor(color, edad, peso, estado) {
// // //         super(color, edad, peso)
// // //         this.estado = estado;
// // //     }
// // //     cantar(x) {
// // //         super.cantar(x)
// // //         console.log("es divertida!")
// // //     }
// // // }
// // // const a1 = new Azul("azul", 20, 150000, "en peligro");

// // //PROTOTIPADO, función constructora
// // // function Persona(nombre, apellido, edad) {
// // //     this.nombre = nombre;
// // //     this.apellido = apellido;
// // //     this.edad = edad;
// // // }
// // // function Empleado(nombre, apellido, edad, sueldo) {
// // //     Persona.call(this, nombre, apellido, edad)
// // //     this.sueldo = sueldo;
// // // }
// // // Empleado.prototype = new Persona();
// // // let p1 = new Persona("Laura", "Lang", 18)
// // // let e1 = new Empleado("Juan", "Perez", 50, 2500)

// // function Animal(nombre) {
// //     this.nombre = nombre;
// // }
// // Animal.prototype.comer = function () {
// //     console.log("comiendo");
// // }
// // function Perro(nombre){
// //     Animal.call(this,nombre)
// //     this.estaLadrando = false;
// // }
// // Perro.prototype = new Animal();
// // var p1 = new Perro("Mutante");
// // console.log("Está ladrando: " + p1.estaLadrando)
// // console.log("Nombre: " + p1.nombre)
// // p1.comer()

// // class Animal{
// //     constructor(nombre){
// //         this.nombre = nombre;
// //     }
// //     comer(){
// //         console.log("comiendo");
// //     }
// // }

// //JQUERY
// //$("selector").accion()   --sintaxis, métodos: text, html, val, show, hide, click, mouseover
// // $("#saludo")
// // $(".hola")
// var saludo = $("h1").text()
// console.log(saludo)
// $("#saludo").text("Hola JQuery")

// $("#a").click(cambiarTextoA)
// $("#b").click(cambiarTextoB)
// $("#c").click(desaparece)
// $("#d").click(aparece)
// $("#e").mouseover(slider)
// $("#f").dblclick(animar)
// function cambiarTextoA() {
//     $("#capa").html("Tocaste el botón <strong> A </strong>")
//     $("#capa").css("background-color", "red")
//     $("#capa").animate({ with: "70%" }, 500)
// }
// function cambiarTextoB() {
//     $("#capa").html("Tocaste el botón <strong> B </strong>")
// }
// function desaparece() {
//     // $("#capa").hide()
//     $("#capa").fadeOut("slow")
// }
// function aparece() {
//     // $("#capa").show()
//     $("#capa").fadeIn("slow")
// }
// function slider() {
//     $("#capa").slideToggle("slow")
// }
// function animar(){
//     $("#capa").animate({
//         marginLeft: "400px"
//     }) 
// }

//cookies
// function guardar() {
//     var miCookie = document.form.miCookie.value;
//     console.log(miCookie);
//     document.cookie = "miCookie = " + miCookie;
// }
// function leer(){
//     let x = document.cookie;
//     console.log(x);
// }

//STORAGE API
let boton = document.getElementById("boton")
boton.addEventListener("click", () => {
    let nom = document.getElementById("nom").value;
    let ape = document.getElementById("ape").value;
    console.log(nom, ape)
    localStorage.setItem("nombre", nom)
    localStorage.setItem("apellido", ape)
})
let link = document.getElementById("link")
link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("nombre") + ", " + localStorage.getItem("apellido"));
})