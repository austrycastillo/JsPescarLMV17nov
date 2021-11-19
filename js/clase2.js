// // //arreglos
// // // var nombre = new Array("Luis", "Juan", "Ana");
// // // var edad = [20, 25, 30, 35, 40, 45, 50];
// // var datos = [2, "Tomás", true, 80.2];
// // // console.log(datos[1])
// // // console.log(datos.length)
// // // var tam = datos.length;
// // // for (var i = 0; i < tam; i++) {
// // //     console.log(datos[i]);
// // // }
// // // datos.forEach(element => {
// // //     console.log(element);
// // // });
// // // for (const x of datos) {
// // //     console.log(x);
// // // }
// // // for (const key in datos) {
// // //     console.log(datos[key]);
// // // }
// // // datos.push('Fulano');//agrega al final
// // // datos.pop();//elimina al final
// // // datos.unshift('Fulano'); //agrega al principio
// // // datos.shift();//elimina al principio
// // // datos.splice(1, 3,"Leo");
// // // datos.splice(1, 2);
// // // datos.map(element => {
// // //     console.log(element);
// // // })

// // // //objetos
// // // var cliente = { 
// // //     id: 123, 
// // //     nombre: 'Falabella', 
// // //     cuenta: 5252 
// // // };
// // // var alumnos = [
// // //     {nombre: 'Pablo',apellido:'Beltrán',edad: 60},
// // //     {nombre:'Contanza',apellido:'Ibarra',edad: 15},
// // //     {nombre: 'Guido',apellido:'Di Fiore',edad: 30}
// // // ];
// // // console.log(alumnos[2].nombre);
// // // for (const key in cliente) {
// // //    console.log(cliente[key]);
// // // }
// // // for (const key in alumnos) {
// // //     console.log(alumnos[key].nombre);
// // //  }

// // //funciones
// // function mostrar(dato = "Fulano") {
// //     //console.log("Hola función convencional");
// //     let mensaje = "Hola función convencional con return " + dato;
// //     return mensaje;
// // }
// // console.log(mostrar());
// // console.log(mostrar("hola"));

// // //función anónima
// // var fun = function () {
// //     console.log("soy anónima");
// // }
// // fun();
// // var fun2 = () => {
// //     console.log("soy flecha o lambda");
// // }
// // fun2();
// // var fun3 = edad => "soy corta " + edad;
// // console.log(fun3(25));

// //DOM Document Object Model
// // let h1 = document.getElementById("hola");
// // let h1 = document.querySelector("#hola");
// // let h1 = document.querySelector("h1");
// // let h1 = document.querySelector(".hola");
// let h1 = document.getElementsByClassName("hola")[0];
// console.log(h1);
// console.log(h1.innerHTML);
// h1.innerHTML = "Hola <br>javascript";
// h1.style.color = "red";
// h1.style.backgroundColor = "lightpink";
// h1.style.padding = "50px";
// h1.style.border = "2px solid blue";
// let p = document.createElement("p");
// p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sit ipsam asperiores rem quisquam culpa animi itaque laboriosam sed iure nostrum minima, recusandae architecto error accusantium excepturi eius debitis corporis.";
// document.body.appendChild(p);
// h1.appendChild(p);

// //crear una lista de elementos
function mostrarLista() {
    let datos = ["enero", "febrero", "marzo", "abril", "mayo"];
    let ul = document.createElement("ul");
    for (var i = 0; i < datos.length; i++) {
        let li = document.createElement("li");
        li.innerText = datos[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

let leer = document.getElementById("leer");
// leer.addEventListener("click",()=>{
//     console.log("estoy");
// })
leer.addEventListener("click", mostrarLista);

console.log(Math.floor(Math.random() * 9))